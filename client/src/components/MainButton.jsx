import PropTypes from "prop-types";

export default function MainButton({
  onClick,
  isLink,
  link,
  className,
  children,
}) {
  return (
    <>
      {isLink ? (
        <a
          className={
            "rounded-full bg-main-black font-medium text-main-white no-underline dark:bg-main-white dark:text-main-black " +
            className
          }
          href={link}
        >
          {children}
        </a>
      ) : (
        <button
          className={
            "rounded-full bg-main-black font-medium text-main-white no-underline dark:bg-main-white dark:text-main-black " +
            className
          }
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
  className: PropTypes.string,
  children: PropTypes.node,
};
