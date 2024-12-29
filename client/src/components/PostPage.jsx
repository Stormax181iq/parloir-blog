import PropTypes from "prop-types";
import CategoryButton from "./CategoryButton";
import PostCard from "./PostCard";

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
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col justify-between w-full h-full">
              <h1 className="text-5xl font-h mb-8 pr-4">{title}</h1>
              <div className="flex items-center">
                <img
                  src={author.profilePicture}
                  alt={"profile picture of " + author.username}
                  className="rounded-full w-16 h-16 mr-2 my-2"
                />
                <div className="flex flex-col mx-2">
                  <div className="flex items-center">
                    <a
                      href={`/users/${author.username}`}
                      className="underline text-3xl"
                    >
                      {author.username}
                    </a>
                    <MainButton className="p-1 mx-8">Follow</MainButton>
                  </div>
                  <p>{timeOfPublication}</p>
                </div>
              </div>
            </div>
            <div className="flex border-main-black border-y w-full py-4 items-center justify-between mb-2 px-4">
              <div className="flex items-center w-1/3 justify-between">
                <button className="flex" title="Like this post">
                  <FontAwesomeIcon icon={faThumbsUp} className="text-2xl" />
                  <p className="ml-1">{reactions.likes}</p>
                </button>
                <button className="flex" title="Scroll to the comments section">
                  <FontAwesomeIcon icon={faComment} className="text-2xl" />
                  <p className="ml-1">{reactions.comments}</p>
                </button>
              </div>
              <div className="flex justify-between w-1/6">
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
        <div className="w-5/6 py-4 border-r border-b border-main-black pr-4 pb-4">
          <p>{content}</p>
        </div>
        <div className="h-36 flex flex-col justify-between w-5/6 border-r border-main-black py-8 px-4">
          <div className="flex items-center">
            {categories.map((category) => (
              <div className="mr-8" key={category}>
                <CategoryButton size="lg">{category}</CategoryButton>
              </div>
            ))}
          </div>
          <div className="flex w-full my-4 py-4 items-center mb-2 px-4">
            <div className="flex items-center w-1/4 justify-between">
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
      <div className="grid grid-cols-3 px-[10vw] border-t border-main-black py-4 mb-8">
        <div className="border-r border-main-black pr-4">
          <div>
            <img
              src={author.profilePicture}
              alt={author.username}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex items-start">
              <div>
                <p className="font-h text-4xl mt-2">
                  Written by{" "}
                  <a href={`/users/${author.username}`} className="underline">
                    {author.username}
                  </a>
                </p>
                <p className="text-xl">{author.followersCount} followers</p>
                <p>{author.description}</p>
              </div>
              <MainButton className="px-2 py-1 mt-3 ml-4">Follow</MainButton>
            </div>
            <div>
              <h2 className="font-h text-3xl mt-4 mb-2">
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
                className="py-4 px-2"
              >
                See all from {author.username}
              </MainButton>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-white w-full h-full"></div>
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
