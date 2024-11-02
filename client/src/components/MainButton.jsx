import PropTypes from "prop-types";

export default function MainButton({ onClick, isLink, link, children }) {
  return (
    <>
      {isLink ? (
        <a
          className="no-underline mx-2 bg-slate-800 text-[#dddddd] py-2 px-3 rounded-3xl"
          href={link}
        >
          {children}
        </a>
      ) : (
        <button
          className="no-underline mx-2 bg-slate-800 text-[#dddddd] py-2 px-3 rounded-3xl"
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
