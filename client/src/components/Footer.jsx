import authorImg from "../assets/author.jpg";

export default function Footer() {
  return (
    <footer className="mt-auto px-4 mb-4 pt-1 border-t border-main-black flex justify-between items-center dark:border-main-white">
      <div className="flex flex-col items-end w-44">
        <p>Made with ❤️ by</p>
        <a
          className="flex items-center underline"
          href="https://github.com/Stormax181iq"
        >
          <img
            src={authorImg}
            alt="The author of the website"
            className="rounded-full w-14 mx-2"
          />
          <p>Stormax181iq</p>
        </a>
      </div>
      <div className="grid grid-flow-col grid-rows-4 grid-cols-2 gap-x-8 mr-8">
        <p>Links</p>
        <a className="underline" href="/">
          Homepage
        </a>
        <a className="underline" href="/about">
          About
        </a>
        <a className="underline" href="/contact">
          Contact
        </a>
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
