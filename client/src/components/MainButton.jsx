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
            "no-underline bg-main-black text-main-white rounded-full font-medium dark:bg-main-white dark:text-main-black " +
            className
          }
          href={link}
        >
          {children}
        </a>
      ) : (
        <button
          className={
            "no-underline bg-main-black text-main-white rounded-full font-medium dark:bg-main-white dark:text-main-black " +
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
