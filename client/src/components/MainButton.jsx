import PropTypes from "prop-types";

export default function MainButton({ onClick, isLink, link, children }) {
  return (
    <>
      {isLink ? (
        <a
          className="no-underline mx-2 bg-main-black text-main-white py-2 px-3 rounded-3xl"
          href={link}
        >
          {children}
        </a>
      ) : (
        <button
          className="no-underline mx-2 bg-main-black text-main-white py-2 px-3 rounded-3xl"
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}

MainButton.propTypes = {
  onClick: PropTypes.func,
  isLink: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node,
};
