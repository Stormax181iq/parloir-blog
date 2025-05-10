import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import CategoryButton from "./CategoryButton";
import formatDate from "../helpers/formatDate";

export default function PostCard({
  postId,
  title,
  content,
  author,
  timeOfPublication,
  category,
  imgSrc,
  size = "lg",
  displayButton = true,
  imgTop = false,
  showAuthor = true,
}) {
  const publicationTime = formatDate(new Date(timeOfPublication));

  const postLink = `/users/${author}/posts/${postId}`;
  const authorLink = `/users/${author}`;
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
                "rounded-xl" + (imgTop ? " h-36 w-full" : " h-48 w-1/3")
              }
            />
          )}
          <div className="m-4 flex w-full flex-col justify-between pr-12">
            <div className="flex">
              <p>{publicationTime}</p>
              {category && (
                <div className="ml-2">
                  <CategoryButton size="sm">{category}</CategoryButton>
                </div>
              )}
            </div>
            {showAuthor && (
              <Link className="hover:underline" to={authorLink}>
                {author}
              </Link>
            )}
            {displayButton ? (
              <h2 className="text-justify font-h text-2xl">{title}</h2>
            ) : (
              <h2 className="w-full text-justify font-h text-2xl underline">
                <Link to={postLink}>{title}</Link>
              </h2>
            )}
            <p className="mb-4">{content.slice(0, 150)}…</p>
            {displayButton && (
              <MainButton
                isLink={true}
                link={postLink}
                className="w-28 px-3 py-2 text-center"
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
                className="mr-2 mt-1 h-12 w-12 rounded-full"
              />
            )}
            <div>
              <Link to={postLink}>
                <h2 className="mt-1 font-h text-xl underline">{title}</h2>
              </Link>
              <p>
                {showAuthor && (
                  <Link className="hover:underline" to={authorLink}>
                    {author}
                  </Link>
                )}{" "}
                {publicationTime}
              </p>
            </div>
          </div>
        </div>
      );
  }
}

PostCard.propTypes = {
  postId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  author: PropTypes.string.isRequired,
  timeOfPublication: PropTypes.string.isRequired,
  category: PropTypes.string,
  imgSrc: PropTypes.string,
  size: PropTypes.string,
  displayButton: PropTypes.bool,
  imgTop: PropTypes.bool,
  showAuthor: PropTypes.bool,
};
