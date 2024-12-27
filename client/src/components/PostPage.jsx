import PropTypes from "prop-types";
import CategoryButton from "./CategoryButton";

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
    <div className="mx-[20vw] my-8 border-l border-main-black pl-4">
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
  );
}
PostPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
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
