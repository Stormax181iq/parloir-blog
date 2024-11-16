import { useRef } from "react";

import MainButton from "../components/MainButton";
import CategoryButton from "../components/CategoryButton";

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
      <div className="flex justify-stretch mx-64 px-16 my-4">
        <div className="w-2/3 mr-4">
          <h1 ref={popularRef} className="text-3xl font-h mb-4">
            Popular categories
          </h1>
          <div className="flex justify-between">
            <CategoryButton size="lg">Fashion</CategoryButton>
            <CategoryButton size="lg">Health</CategoryButton>
            <CategoryButton size="lg">Coding</CategoryButton>
            <CategoryButton size="lg">Travel</CategoryButton>
            <CategoryButton size="lg">Culture</CategoryButton>
            <CategoryButton size="lg">Sport</CategoryButton>
          </div>
          <h1 className="text-3xl font-h my-4">Recent posts</h1>
          <div className="flex mb-8 pb-8 border-b border-main-black/10">
            <img src="https://picsum.photos/300/201" alt="" />
            <div className="flex flex-col m-4 justify-between">
              <p>03/08/2024 19:12 &#x00B7; Coding</p>
              <p>Emelin Miller</p>
              <h2 className="text-2xl font-h">Will Deno2 overtake Node.js ?</h2>
              <p className="mb-4">
                For years, we’ve been using Node.js for the backend …
              </p>
              <MainButton
                isLink={true}
                link="#"
                className="py-2 px-3 w-28 text-center"
              >
                Read More
              </MainButton>
            </div>
          </div>
          <div className="flex mb-8 pb-8 border-b border-main-black/10">
            <img src="https://picsum.photos/300/199" alt="" />
            <div className="flex flex-col m-4 justify-between">
              <p>12/12/2024 12:12 &#x00B7; Productivity</p>
              <p>Dan</p>
              <h2 className="text-2xl font-h">
                How to type fast (100 words per minute)
              </h2>
              <p className="mb-4">
                I spent too much time trying to improve my typing speed by doing
                the wrong things …
              </p>
              <MainButton
                isLink={true}
                link="#"
                className="py-2 px-3 w-28 text-center"
              >
                Read More
              </MainButton>
            </div>
          </div>
          <div className="flex mb-8 pb-8 border-b border-main-black/10">
            <img src="https://picsum.photos/300/198" alt="" />
            <div className="flex flex-col m-4 justify-between">
              <p>23/09/2024 22:02 &#x00B7; Travel</p>
              <p>Donald Smith</p>
              <h2 className="text-2xl font-h">My journey in Zagreb</h2>
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
                dolorem? Dolorem, ullam quod. Sint, accusantium …
              </p>
              <MainButton
                isLink={true}
                link="#"
                className="py-2 px-3 w-28 text-center"
              >
                Read More
              </MainButton>
            </div>
          </div>
          <div className="flex">
            <img src="https://picsum.photos/300/197" alt="" />
            <div className="flex flex-col m-4 justify-between">
              <p>22/09/2024 02:34 &#x00B7; Coding</p>
              <p>Arnoldlebg</p>
              <h2 className="text-2xl font-h">
                Creating my own database system, from scratch!
              </h2>
              <p className="mb-4">
                I realised that some aspect of the current databases are bad, so
                I decided to create one myself …
              </p>
              <MainButton
                isLink={true}
                link="#"
                className="py-2 px-3 w-28 text-center"
              >
                Read More
              </MainButton>
            </div>
          </div>
        </div>
        <div className="ml-8 pl-8 border-l border-main-black">
          <h1 className="text-3xl font-h mb-4">Most popular</h1>
          <div className="mb-6">
            <CategoryButton size="sm">Travel</CategoryButton>
            <a href="/users/john-doe/posts/a-journey-in-ales-194834">
              <h2 className="text-xl font-h underline mt-1">
                A journey in Alès
              </h2>
            </a>
            <p>John Doe &#x00B7; 27/07/2024</p>
          </div>
          <div className="mb-6">
            <CategoryButton size="sm">Travel</CategoryButton>
            <a href="/users/john-doe/posts/a-journey-in-ales-194834">
              <h2 className="text-xl font-h underline mt-1">
                A journey in Alès
              </h2>
            </a>
            <p>John Doe &#x00B7; 27/07/2024</p>
          </div>
          <div className="mb-6">
            <CategoryButton size="sm">Travel</CategoryButton>
            <a href="/users/john-doe/posts/a-journey-in-ales-194834">
              <h2 className="text-xl font-h underline mt-1">
                A journey in Alès
              </h2>
            </a>
            <p>John Doe &#x00B7; 27/07/2024</p>
          </div>
          <div className="mb-6">
            <CategoryButton size="sm">Travel</CategoryButton>
            <a href="/users/john-doe/posts/a-journey-in-ales-194834">
              <h2 className="text-xl font-h underline mt-1">
                A journey in Alès
              </h2>
            </a>
            <p>John Doe &#x00B7; 27/07/2024</p>
          </div>
          <div className="mb-6">
            <CategoryButton size="sm">Travel</CategoryButton>
            <a href="/users/john-doe/posts/a-journey-in-ales-194834">
              <h2 className="text-xl font-h underline mt-1">
                A journey in Alès
              </h2>
            </a>
            <p>John Doe &#x00B7; 27/07/2024</p>
          </div>

          <h1 className="text-3xl font-h my-4">Editor’s choice</h1>
          <div className="my-8">
            <div className="ml-14">
              <CategoryButton size="sm">Sport</CategoryButton>
            </div>
            <div className="flex my-2 items-center">
              <img
                src="https://picsum.photos/50/50"
                alt=""
                className="rounded-full mt-1"
              />
              <a href="/users/runner-passion/posts/how-i-broke-20-on-the-5k-439203">
                <h2 className="mx-2 font-h text-xl underline">
                  How I broke 20’ on the 5k
                </h2>
              </a>
            </div>
          </div>
          <div className="my-8">
            <div className="ml-14">
              <CategoryButton size="sm">Fashion</CategoryButton>
            </div>
            <div className="flex my-2 items-center">
              <img
                src="https://picsum.photos/50/49"
                alt=""
                className="rounded-full mt-1"
              />
              <a href="/users/billiejogging/posts/how-to-have-style-184343">
                <h2 className="mx-2 font-h text-xl underline">
                  How to have style
                </h2>
              </a>
            </div>
          </div>
          <div className="my-8">
            <div className="ml-14">
              <CategoryButton size="sm">Music</CategoryButton>
            </div>
            <div className="flex my-2 items-center">
              <img
                src="https://picsum.photos/49/50"
                alt=""
                className="rounded-full mt-1"
              />
              <a href="/users/saratte/posts/play-the-piano-better-593920">
                <h2 className="mx-2 font-h text-xl underline">
                  Play the piano better
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
