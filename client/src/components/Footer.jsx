import authorImg from "../assets/author.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mb-4 mt-auto flex items-center justify-between border-t border-main-black px-4 pt-1 dark:border-main-white">
      <div className="flex w-44 flex-col items-end">
        <p>Made with ❤️ by</p>
        <a
          className="flex items-center underline"
          href="https://github.com/Stormax181iq"
        >
          <img
            src={authorImg}
            alt="The author of the website"
            className="mx-2 w-14 rounded-full"
          />
          <p>Stormax181iq</p>
        </a>
      </div>
      <div className="mr-8 grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-8">
        <p>Links</p>
        <Link className="underline" to="/">
          Homepage
        </Link>
        <Link className="underline" to="/about">
          About
        </Link>
        <Link className="underline" to="/contact">
          Contact
        </Link>
        <p>Socials</p>
        <a className="underline" href="https://www.instagram.com/_k_chl/">
          Instagram
        </a>
        <a className="underline" href="https://www.youtube.com/@huntger2933">
          YouTube
        </a>
        <a className="underline" href="https://github.com/Stormax181iq">
          GitHub
        </a>
      </div>
    </footer>
  );
}
