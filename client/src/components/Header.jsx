import { useState } from "react";

import HeaderLink from "./HeaderLink";
import MainButton from "./MainButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";

export default function Header() {
  const [checked, setChecked] = useState(false);
  const isLoggedIn = false;
  return (
    <header className="mx-72 flex items-center justify-between border-b">
      <div>
        <a href="/" aria-label="home page">
          <img src={logo} alt="logo" width={250} />
        </a>
      </div>
      <div>
        <label className="relative border inline-block align-middle w-12 h-6">
          <input
            checked={checked}
            onChange={() => setChecked(!checked)}
            type="checkbox"
            name="dark mode switch"
            className="w-0 h-0 focus:shadow-2xl peer"
          />
          <span
            className="absolute cursor-pointer top-0 bottom-0 right-0 left-0 bg-red-300 rounded-2xl
            before:absolute before:bg-blue-400 before:h-6 before:w-6 before:left-0 before:bottom-0 before:rounded-xl
            peer-checked:before:translate-x-6 before:duration-300 peer-checked:bg-lime-700"
          ></span>
          {/* <FontAwesomeIcon
            className="absolute inline-block peer-checked:hidden opacity-100 right-1"
            icon={faSun}
          />
          <FontAwesomeIcon
            className="opacity-0 peer-checked:opacity-100 left-1 delay-150"
            icon={faMoon}
          /> */}
        </label>
        <HeaderLink link="/contact">Contact</HeaderLink>
        <HeaderLink link="/about">About</HeaderLink>
        <HeaderLink link={isLoggedIn ? "/write" : "/login"}>Write</HeaderLink>
        {!isLoggedIn && (
          <>
            <HeaderLink link="/login">Login</HeaderLink>
            <MainButton isLink={true} link="/register">
              Register
            </MainButton>
          </>
        )}
      </div>
    </header>
  );
}
