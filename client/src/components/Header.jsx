import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import HeaderLink from "./HeaderLink";
import MainButton from "./MainButton";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";
import darkModeLogo from "../assets/logo-dm.png";

export default function Header({ toggleTheme }) {
  const theme = useContext(ThemeContext);
  const isLoggedIn = false;
  return (
    <header className="sticky top-0 z-50 flex h-[8vh] items-center justify-between overflow-hidden border-b border-main-black bg-second px-[10vw] dark:border-main-white dark:bg-main-black">
      <div>
        <a href="/" aria-label="home page">
          <img
            src={theme === "light" ? logo : darkModeLogo}
            alt="logo"
            width={250}
          />
        </a>
      </div>
      <div>
        <label className="relative inline-block h-6 w-12 cursor-pointer align-middle">
          <input
            checked={theme === "dark"}
            onChange={toggleTheme}
            type="checkbox"
            name="dark mode switch"
            className="peer h-0 w-0"
          />
          <span className="absolute bottom-0 left-0 right-0 top-0 rounded-2xl bg-main-white before:absolute before:left-0 before:top-1/2 before:h-5 before:w-5 before:-translate-y-1/2 before:rounded-xl before:bg-accent before:duration-200 peer-checked:bg-main-black peer-checked:before:translate-x-[1.6rem] peer-focus:shadow-md dark:border dark:border-main-white"></span>
          <FontAwesomeIcon
            className="fa-sm absolute right-1.5 top-1/2 inline-block -translate-y-1/2 text-main-black opacity-100 duration-150 peer-checked:opacity-0"
            icon={faSun}
          />
          <FontAwesomeIcon
            className="fa-sm absolute left-1.5 top-1/2 inline-block -translate-y-1/2 text-main-white opacity-0 duration-150 peer-checked:opacity-100"
            icon={faMoon}
          />
        </label>
        <HeaderLink link="/contact">Contact</HeaderLink>
        <HeaderLink link="/about">About</HeaderLink>
        <HeaderLink link={isLoggedIn ? "/write" : "/login"}>Write</HeaderLink>
        {!isLoggedIn && (
          <>
            <HeaderLink link="/login">Login</HeaderLink>
            <MainButton
              isLink={true}
              link="/register"
              className="mx-2 px-3 py-2"
            >
              Register
            </MainButton>
          </>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func,
};
