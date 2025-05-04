import PropTypes from "prop-types";

import MainButton from "./MainButton";
import CategoryButton from "./CategoryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

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
}) {
  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const pad = (num) => num.toString().padStart(2, "0");

    return `${pad(day)}/${pad(month)}/${year} ${pad(hours)}:${pad(minutes)}`;
  }
  const publicationTime = formatDate(new Date(timeOfPublication));
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
              <button className="mx-2 px-2">
                <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
              </button>
            </div>
            {author && <p>{author}</p>}
            {displayButton ? (
              <h2 className="text-justify font-h text-2xl">{title}</h2>
            ) : (
              <h2 className="w-full text-justify font-h text-2xl underline">
                <a href={"/posts/" + title + "-" + postId}>{title}</a>
              </h2>
            )}
            <p className="mb-4">{content.slice(0, 150)}…</p>
            {displayButton && (
              <MainButton
                isLink={true}
                link={"/posts/" + title + "-" + postId}
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
              <a href={"/posts/" + title + "-" + postId}>
                <h2 className="mt-1 font-h text-xl underline">{title}</h2>
              </a>
              <p>
                {author} {publicationTime}
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
  author: PropTypes.string,
  timeOfPublication: PropTypes.string.isRequired,
  category: PropTypes.string,
  imgSrc: PropTypes.string,
  size: PropTypes.string,
  displayButton: PropTypes.bool,
  imgTop: PropTypes.bool,
};
