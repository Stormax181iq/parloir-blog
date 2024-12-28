import PropTypes from "prop-types";

import MainButton from "./MainButton";
import CategoryButton from "./CategoryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function PostCard({
  title,
  description,
  author,
  timeOfPublication,
  category,
  imgSrc,
  size = "lg",
  displayButton = true,
  imgTop = false,
}) {
  switch (size) {
    case "lg":
      return (
        <div
          className={
            "flex " + (imgTop ? " flex-col items-start" : " items-center")
          }
        >
          {imgSrc && (
            <img
              src={imgSrc}
              alt=""
              className={
                "rounded-xl" + (imgTop ? " w-full h-36" : " w-1/3 h-48")
              }
            />
          )}
          <div className="flex flex-col m-4 justify-between w-full pr-12">
            <div className="flex">
              <p>{timeOfPublication}</p>
              {category && (
                <div className="ml-2">
                  <CategoryButton size="sm">{category}</CategoryButton>
                </div>
              )}
              <button className="mx-2 px-2">
                <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
              </button>
            </div>
            {author && <p>{author}</p>}
            {displayButton ? (
              <h2 className="text-2xl font-h text-justify">{title}</h2>
            ) : (
              <h2 className="text-2xl font-h underline text-justify w-full">
                <a href="#">{title}</a>
              </h2>
            )}
            <p className="mb-4">{description}</p>
            {displayButton && (
              <MainButton
                isLink={true}
                link="#"
                className="py-2 px-3 w-28 text-center"
              >
                Read More
              </MainButton>
            )}
          </div>
        </div>
      );
    case "sm":
      return (
        <div>
          <div className={imgSrc && "ml-14"}>
            <CategoryButton size="sm">{category}</CategoryButton>
          </div>
          <div className="mb-6 flex items-center">
            {imgSrc && (
              <img
                src={imgSrc}
                alt=""
                className="rounded-full mt-1 mr-2 h-12 w-12"
              />
            )}
            <div>
              <a href="/users/john-doe/posts/a-journey-in-ales-194834">
                <h2 className="text-xl font-h underline mt-1">{title}</h2>
              </a>
              <p>
                {author} {timeOfPublication}
              </p>
            </div>
          </div>
        </div>
      );
  }
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string,
  timeOfPublication: PropTypes.string,
  category: PropTypes.string,
  imgSrc: PropTypes.string,
  size: PropTypes.string,
  reactions: PropTypes.shape({
    likes: PropTypes.number,
    comments: PropTypes.number,
  }),
  displayButton: PropTypes.bool,
  imgTop: PropTypes.bool,
};
