import HeaderLink from "./HeaderLink";
import MainButton from "./MainButton";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";

export default function Header({ theme, setTheme }) {
  const isLoggedIn = false;
  return (
    <header className="sticky top-0 z-50 overflow-hidden px-[10vw] h-[8vh] flex items-center justify-between border-b border-main-black">
      <div>
        <a href="/" aria-label="home page">
          <img src={logo} alt="logo" width={250} />
        </a>
      </div>
      <div>
        <label className="cursor-pointer relative inline-block align-middle w-12 h-6">
          <input
            checked={theme === "dark"}
            onChange={() => {
              if (theme === "light") setTheme("dark");
              else setTheme("light");
            }}
            type="checkbox"
            name="dark mode switch"
            className="w-0 h-0 peer"
          />
          <span
            className="absolute top-0 bottom-0 right-0 left-0 bg-main-white rounded-2xl
            before:absolute before:bg-accent before:h-6 before:w-6 before:left-0 before:bottom-0 before:rounded-xl
            peer-checked:before:translate-x-6 before:duration-200 peer-checked:bg-main-black peer-focus:shadow-md"
          ></span>
          <FontAwesomeIcon
            className="fa-sm text-main-black absolute inline-block peer-checked:opacity-0 opacity-100 right-1.5 top-1/2 -translate-y-1/2 duration-150"
            icon={faSun}
          />
          <FontAwesomeIcon
            className="fa-sm text-main-white opacity-0 peer-checked:opacity-100 absolute inline-block top-1/2 -translate-y-1/2 left-1.5 duration-150"
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
              className="py-2 px-3 mx-2"
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
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};
