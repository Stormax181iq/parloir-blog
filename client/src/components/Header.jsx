import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import HeaderLink from "./HeaderLink";
import MainButton from "./MainButton";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";
import darkModeLogo from "../assets/logo-dm.png";
import useAuth from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

export default function Header({ toggleTheme }) {
  const theme = useContext(ThemeContext);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    await logout();
    navigate("/");
  }

  return (
    <header className="border-main-black bg-second dark:border-main-white dark:bg-main-black sticky top-0 z-50 flex h-[8vh] items-center justify-between overflow-hidden border-b px-[10vw]">
      <div>
        <Link to="/" aria-label="home page">
          <img
            src={theme === "light" ? logo : darkModeLogo}
            alt="logo"
            width={250}
          />
        </Link>
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
          <span className="bg-main-white before:bg-accent peer-checked:bg-main-black dark:border-main-white absolute top-0 right-0 bottom-0 left-0 rounded-2xl peer-focus:shadow-md before:absolute before:top-1/2 before:left-0 before:h-5 before:w-5 before:-translate-y-1/2 before:rounded-xl before:duration-200 peer-checked:before:translate-x-[1.6rem] dark:border"></span>
          <FontAwesomeIcon
            className="fa-sm text-main-black absolute top-1/2 right-1.5 inline-block -translate-y-1/2 opacity-100 duration-150 peer-checked:opacity-0"
            icon={faSun}
          />
          <FontAwesomeIcon
            className="fa-sm text-main-white absolute top-1/2 left-1.5 inline-block -translate-y-1/2 opacity-0 duration-150 peer-checked:opacity-100"
            icon={faMoon}
          />
        </label>
        <HeaderLink link="/contact">Contact</HeaderLink>
        <HeaderLink link="/about">About</HeaderLink>
        <HeaderLink link={"/write"}>Write</HeaderLink>
        {isAuthenticated ? (
          <button className="px-2 hover:cursor-pointer" onClick={handleLogout}>
            Logout
          </button>
        ) : (
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
