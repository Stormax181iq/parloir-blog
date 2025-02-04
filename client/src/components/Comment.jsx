import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

export default function Comment({ text, authorName, likes, responses }) {
  return (
    <>
      <div className="border border-main-black dark:border-main-white m-4 p-4 rounded-2xl">
        <div className="flex">
          <img src="#" alt="profile picture" className="mx-4"/>
          <p className="text-2xl font-h">
            {authorName}
            </p>
        </div>
        <p>{text}</p>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faThumbsUp} />
          <p className="mx-4">{likes}</p>
        </div>
      </div>
    </>
  );
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  responses: PropTypes.number.isRequired
};
