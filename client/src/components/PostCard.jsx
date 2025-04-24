import PropTypes from "prop-types";

import MainButton from "./MainButton";
import CategoryButton from "./CategoryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import apiService from "../api/apiService";
import { useEffect, useState } from "react";

export default function PostCard({
  title,
  content,
  authorId,
  timeOfPublication,
  categoryId,
  imgSrc,
  size = "lg",
  displayButton = true,
  imgTop = false,
}) {
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    async function fetchAuthor() {
      try {
        const username = await apiService.getUsernameById(authorId);
        setAuthor(username);
      } catch (error) {
        console.error("Failed to fetch author", error);
      }
    }

    fetchAuthor();
  }, [authorId]);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const name = await apiService.getCategoryNameById(categoryId);
        setCategory(name);
      } catch (error) {
        console.error("Failed to fetch category", error);
      }
    }

    fetchCategory();
  }, [categoryId]);

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
              <h2 className="text-justify font-h text-2xl">{title}</h2>
            ) : (
              <h2 className="w-full text-justify font-h text-2xl underline">
                <a href="#">{title}</a>
              </h2>
            )}
            <p className="mb-4">{content.slice(0, 150)}…</p>
            {displayButton && (
              <MainButton
                isLink={true}
                link="#"
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
              <a href="/users/john-doe/posts/a-journey-in-ales-194834">
                <h2 className="mt-1 font-h text-xl underline">{title}</h2>
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
  content: PropTypes.string,
  authorId: PropTypes.number,
  timeOfPublication: PropTypes.string,
  categoryId: PropTypes.number,
  imgSrc: PropTypes.string,
  size: PropTypes.string,
  reactions: PropTypes.shape({
    likes: PropTypes.number,
    comments: PropTypes.number,
  }),
  displayButton: PropTypes.bool,
  imgTop: PropTypes.bool,
};
