import HeaderLink from "./HeaderLink";
import MainButton from "./MainButton";

import logo from "../assets/logo.png";

export default function Header() {
  const isLoggedIn = false;
  return (
    <header className="mx-72 flex items-center justify-between border-b">
      <div>
        <a href="/" aria-label="home page">
          <img src={logo} alt="logo" width={250} />
        </a>
      </div>
      <div className="">
        <button>
          <div>Dark Mode</div>
        </button>
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
