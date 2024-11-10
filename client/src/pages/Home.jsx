import { useRef } from "react";

import MainButton from "../components/MainButton";

import homeImg from "../assets/homeWomanArt.png";

export default function Home() {
  const popularRef = useRef(null);
  return (
    <>
      <div className="h-[85vh] flex flex-row relative overflow-hidden px-64 items-center">
        <div className="ml-16">
          <h1 className="text-8xl pb-14 font-h">Let your stories shine.</h1>
          <p className="text-2xl mb-14 font-sans">
            Parloir helps others read, write, and deepen their understanding.
          </p>
          <MainButton
            onClick={() =>
              popularRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 rounded-full text-2xl font-sans"
          >
            Start reading
          </MainButton>
        </div>
        <img
          src={homeImg}
          alt="Women Day Flower Abstract Art"
          className="absolute -right-40 h-full object-cover"
        />
      </div>
      <div className="flex justify-between mx-64 px-16 my-4">
        <div className="w-2/3">
          <h1 ref={popularRef} className="text-3xl font-h mb-4">
            Popular categories
          </h1>
          <div className="flex justify-between">
            <a
              href="/posts/categories/fashion"
              className="bg-accent px-4 py-3 rounded-full w-24 text-center"
            >
              Fashion
            </a>
            <a
              href="/posts/categories/health"
              className="bg-accent px-4 py-3 rounded-full w-24 text-center"
            >
              Health
            </a>
            <a
              href="/posts/categories/coding"
              className="bg-accent px-4 py-3 rounded-full w-24 text-center"
            >
              Coding
            </a>
            <a
              href="/posts/categories/travel"
              className="bg-accent px-4 py-3 rounded-full w-24 text-center"
            >
              Travel
            </a>
            <a
              href="/posts/categories/culture"
              className="bg-accent px-4 py-3 rounded-full w-24 text-center"
            >
              Culture
            </a>
            <a
              href="/posts/categories/sport"
              className="bg-accent px-4 py-3 rounded-full w-24 text-center"
            >
              Sport
            </a>
          </div>
          <h1 className="text-3xl font-h my-4">Recent posts</h1>
          <div className="flex">
            <img src="https://picsum.photos/300/200" alt="" />
            <div className="m-4">
              <p>03/08/2024 19:12 &#x00B7; Coding</p>
              <p>Emelin Miller</p>
              <h2 className="text-2xl font-h">Will Deno2 overtake Node.js ?</h2>
              <p className="mb-4">
                For years, we’ve been using Node.js for the backend …
              </p>
              <MainButton isLink={true} link="#" className="py-2 px-3">
                Read More
              </MainButton>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-h">Most popular</h1>
          <h1 className="text-3xl font-h">Editor’s choice</h1>
        </div>
      </div>
    </>
  );
}
