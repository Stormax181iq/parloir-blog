import PropTypes from "prop-types";

import MainButton from "./MainButton";
import CategoryButton from "./CategoryButton";

export default function PostCard({
  title,
  description,
  author,
  timeOfPublication,
  category,
  imgSrc,
  size = "lg",
}) {
  switch (size) {
    case "lg":
      return (
        <div className="flex mb-8 pb-8 border-b border-main-black/10">
          <img src={imgSrc} alt="" className="w-72 h-44" />
          {/* TODO : fix unconsistent img ratio */}
          <div className="flex flex-col m-4 justify-between">
            <div className="flex">
              <p>{timeOfPublication}</p>
              <div className="ml-2">
                <CategoryButton size="sm">{category}</CategoryButton>
              </div>
            </div>
            <p>{author}</p>
            <h2 className="text-2xl font-h">{title}</h2>
            <p className="mb-4">{description}</p>
            <MainButton
              isLink={true}
              link="#"
              className="py-2 px-3 w-28 text-center"
            >
              Read More
            </MainButton>
          </div>
        </div>
      );
    case "sm":
      return (
        <div className="mb-6 flex items-end">
          {imgSrc && (
            <img
              src={imgSrc}
              alt=""
              className="rounded-full mt-1 mr-2 h-12 w-12"
            />
          )}
          <div>
            <CategoryButton size="sm">{category}</CategoryButton>
            <a href="/users/john-doe/posts/a-journey-in-ales-194834">
              <h2 className="text-xl font-h underline mt-1">{title}</h2>
            </a>
            <p>
              {author} {timeOfPublication}
            </p>
          </div>
        </div>
      );
  }
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string.isRequired,
  timeOfPublication: PropTypes.string,
  category: PropTypes.string,
  imgSrc: PropTypes.string,
  size: PropTypes.string,
};
