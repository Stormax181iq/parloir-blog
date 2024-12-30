import PropTypes from "prop-types";
import CategoryButton from "./CategoryButton";
import PostCard from "./PostCard";
import Comment from "./Comment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import MainButton from "./MainButton";

library.add(faThumbsUp, faComment);

export default function PostPage({
  title,
  content,
  author,
  thumbnail,
  reactions,
  timeOfPublication,
  categories,
}) {
  return (
    <>
      <div className="mx-[20vw] mt-8 border-l border-main-black pl-4">
        <div className="flex w-full justify-between">
          <div className="flex w-full flex-col justify-between">
            <div className="flex h-full w-full flex-col justify-between">
              <h1 className="mb-8 pr-4 font-h text-5xl">{title}</h1>
              <div className="flex items-center">
                <img
                  src={author.profilePicture}
                  alt={"profile picture of " + author.username}
                  className="my-2 mr-2 h-16 w-16 rounded-full"
                />
                <div className="mx-2 flex flex-col">
                  <div className="flex items-center">
                    <a
                      href={`/users/${author.username}`}
                      className="text-3xl underline"
                    >
                      {author.username}
                    </a>
                    <MainButton className="mx-8 p-1">Follow</MainButton>
                  </div>
                  <p>{timeOfPublication}</p>
                </div>
              </div>
            </div>
            <div className="mb-2 flex w-full items-center justify-between border-y border-main-black px-4 py-4">
              <div className="flex w-1/3 items-center justify-between">
                <button className="flex" title="Like this post">
                  <FontAwesomeIcon icon={faThumbsUp} className="text-2xl" />
                  <p className="ml-1">{reactions.likes}</p>
                </button>
                <button className="flex" title="Scroll to the comments section">
                  <FontAwesomeIcon icon={faComment} className="text-2xl" />
                  <p className="ml-1">{reactions.comments}</p>
                </button>
              </div>
              <div className="flex w-1/6 justify-between">
                <button title="Save this post to your list of favorites">
                  <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
                </button>
                <button title="Share this post">
                  <FontAwesomeIcon icon={faShareNodes} className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
          <img
            src={thumbnail}
            alt="post’s thumbnail"
            className="rounded-xl"
            width={500}
            height={300}
          />
        </div>
        <div className="w-5/6 border-b border-r border-main-black py-4 pb-4 pr-4">
          <p>{content}</p>
        </div>
        <div className="flex h-36 w-5/6 flex-col justify-between border-r border-main-black px-4 py-8">
          <div className="flex items-center">
            {categories.map((category) => (
              <div className="mr-8" key={category}>
                <CategoryButton size="lg">{category}</CategoryButton>
              </div>
            ))}
          </div>
          <div className="my-4 mb-2 flex w-full items-center px-4 py-4">
            <div className="flex w-1/4 items-center justify-between">
              <button className="flex" title="Like this post">
                <FontAwesomeIcon icon={faThumbsUp} className="text-2xl" />
                <p className="ml-1">{reactions.likes}</p>
              </button>
              <button className="flex" title="Scroll to the comments section">
                <FontAwesomeIcon icon={faComment} className="text-2xl" />
                <p className="ml-1">{reactions.comments}</p>
              </button>
              <button title="Save this post to your list of favorites">
                <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
              </button>
              <button title="Share this post">
                <FontAwesomeIcon icon={faShareNodes} className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-3 border-t border-main-black px-[10vw] py-4">
        <div className="border-r border-main-black pr-4">
          <div>
            <img
              src={author.profilePicture}
              alt={author.username}
              className="h-16 w-16 rounded-full"
            />
            <div className="flex items-start">
              <div>
                <p className="mt-2 font-h text-4xl">
                  Written by{" "}
                  <a href={`/users/${author.username}`} className="underline">
                    {author.username}
                  </a>
                </p>
                <p className="text-xl">{author.followersCount} followers</p>
                <p>{author.description}</p>
              </div>
              <MainButton className="ml-4 mt-3 px-2 py-1">Follow</MainButton>
            </div>
            <div>
              <h2 className="mb-2 mt-4 font-h text-3xl">
                More from {author.username}
              </h2>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <PostCard
                  title="Post title"
                  category={"Nature"}
                  timeOfPublication={"27/07/2024"}
                  imgSrc={"https://picsum.photos/200/200"}
                  displayButton={false}
                  imgTop={true}
                  reactions={{ likes: 100, comments: 20 }}
                />
                <PostCard
                  title="Post title that is very long and should be cut off"
                  category={"Nature"}
                  timeOfPublication={"27/07/2024"}
                  imgSrc={"https://picsum.photos/400/200"}
                  displayButton={false}
                  imgTop={true}
                  reactions={{ likes: 100, comments: 20 }}
                />
                <PostCard
                  title="Post title"
                  category={"Nature"}
                  timeOfPublication={"27/07/2024"}
                  imgSrc={"https://picsum.photos/200/200"}
                  displayButton={false}
                  imgTop={true}
                  reactions={{ likes: 100, comments: 20 }}
                />
                <PostCard
                  title="Post title"
                  category={"Nature"}
                  timeOfPublication={"27/07/2024"}
                  imgSrc={"https://picsum.photos/200/200"}
                  displayButton={false}
                  imgTop={true}
                  reactions={{ likes: 100, comments: 20 }}
                />
              </div>
              <MainButton
                isLink={true}
                link={`/users/${author.username}`}
                className="px-2 py-4"
              >
                See all from {author.username}
              </MainButton>
            </div>
          </div>
        </div>
        <div className="col-span-2 mx-8 w-full">
          <div className="flex w-full flex-col items-start border-b border-main-black pb-4">
            <h2 className="mb-2 font-h text-3xl">
              Responses ({reactions.comments})
            </h2>
            <textarea
              id="comment"
              name="comment"
              placeholder="What are your thoughts?"
              className="field-sizing-content w-1/2 resize-none rounded-2xl border border-main-black p-2"
            ></textarea>
            <MainButton className="mt-2 px-4 py-2">Send</MainButton>
          </div>
          <div className="py-4">
            <select
              name="order-by-comments"
              id="order-by-comments"
              className="rounded-2xl bg-third p-2 text-main-white"
            >
              <option value="relevant">Most relevant</option>
              <option value="recent">Most recent</option>
            </select>
            <Comment text="this is a comment" />
          </div>
        </div>
      </div>
    </>
  );
}
PostPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    followersCount: PropTypes.number.isRequired,
    followingCount: PropTypes.number.isRequired,
  }).isRequired,
  thumbnail: PropTypes.string.isRequired,
  reactions: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
  }).isRequired,
  timeOfPublication: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
