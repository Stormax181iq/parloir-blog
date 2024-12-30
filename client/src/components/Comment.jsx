import PropTypes from "prop-types";

export default function Comment({ text }) {
  return <p>{text}</p>;
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
};
