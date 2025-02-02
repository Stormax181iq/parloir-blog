import { useRef } from "react";

import MainButton from "../components/MainButton";
import CategoryButton from "../components/CategoryButton";
import PostCard from "../components/PostCard";

import homeImg from "../assets/homeWomanArt.png";

export default function Home() {
  const popularRef = useRef(null);
  return (
    <>
      <div className="h-[90vh] flex flex-row relative overflow-clip px-[10vw] items-center">
        <div className="ml-16">
          <h1 className="text-8xl pb-14 font-h">Let your stories shine.</h1>
          <p className="text-2xl mb-14 font-sans">
            Parloir helps others read, write, and deepen their understanding.
          </p>
          <MainButton
            onClick={() => {
              popularRef.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
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
      <div className="flex justify-stretch mx-[10vw] px-16 my-4">
        <div className="w-3/4 mr-4">
          <h1
            ref={popularRef}
            className="text-3xl font-h mb-4  scroll-mt-[10vh]"
          >
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
          <div className="mb-8 pb-8 border-b border-main-black/10 dark:border-main-white/40">
            <PostCard
              title="Will Deno2 overtake Node.js ?"
              description="For years, we’ve been using Node.js for the backend …"
              author="Emelin Miller"
              timeOfPublication="03/08/2024 19:12"
              category="Coding"
              imgSrc="https://picsum.photos/800/201"
            />
          </div>
          <div className="mb-8 pb-8 border-b border-main-black/10 dark:border-main-white/40">
            <PostCard
              title="How to type fast (100 words per minute)"
              description="I spent too much time trying to improve my typing speed by doing the wrong things …"
              author="Dan"
              timeOfPublication="12/12/2024 12:12"
              category="Productivity"
              imgSrc="https://picsum.photos/1440/2160"
            />
          </div>
          <PostCard
            title="Creating my own database system, from scratch!"
            description="I realised that some aspects of the current databases are bad, so I decided to create one myself …"
            author="Arnoldlebg"
            timeOfPublication="22/09/2024 02:34"
            category="Coding"
            imgSrc="https://picsum.photos/1000/1099"
          />
          <div className="flex w-full items-center justify-between pt-4">
            <button className="bg-third p-2 rounded-full w-28 text-main-white">
              Previous
            </button>
            <p>
              <b>1</b> - 2 - 3
            </p>
            <button className="bg-third p-2 rounded-full w-28 text-main-white">
              Next
            </button>
          </div>
        </div>
        <div className="ml-8 pl-8 border-l border-main-black dark:border-main-white">
          <h1 className="text-3xl font-h mb-4">Most popular</h1>
          <PostCard
            title="A journey in Alès"
            author="John Doe"
            timeOfPublication="27/07/2024"
            category="Travel"
            size="sm"
          />
          <PostCard
            title="A journey in Alès"
            author="John Doe"
            timeOfPublication="27/07/2024"
            category="Travel"
            size="sm"
          />
          <PostCard
            title="A journey in Alès"
            author="John Doe"
            timeOfPublication="27/07/2024"
            category="Travel"
            size="sm"
          />
          <PostCard
            title="A journey in Alès"
            author="John Doe"
            timeOfPublication="27/07/2024"
            category="Travel"
            size="sm"
          />
          <PostCard
            title="A journey in Alès"
            author="John Doe"
            timeOfPublication="27/07/2024"
            category="Travel"
            size="sm"
          />

          <h1 className="text-3xl font-h my-4">Editor’s choice</h1>
          <PostCard
            title="How I broke 20’ on the 5k"
            author="runner passion"
            timeOfPublication="13/12/2024"
            category="Sport"
            imgSrc="https://picsum.photos/120/120"
            size="sm"
          />
          <PostCard
            title="How to have style"
            author="billiejogging"
            timeOfPublication="24/08/2024"
            category="Fashion"
            imgSrc="https://picsum.photos/70/70"
            size="sm"
          />
          <PostCard
            title="Play the piano better"
            author="seratte"
            timeOfPublication="24/08/2024"
            category="Music"
            imgSrc="https://picsum.photos/60/70"
            size="sm"
          />
        </div>
      </div>
    </>
  );
}
