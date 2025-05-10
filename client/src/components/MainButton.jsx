import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MainButton({
  onClick,
  isLink,
  link,
  className,
  type,
  children,
}) {
  return (
    <>
      {isLink ? (
        <Link
          className={
            "bg-main-black text-main-white dark:bg-main-white dark:text-main-black rounded-full font-medium no-underline hover:cursor-pointer " +
            className
          }
          to={link}
        >
          {children}
        </Link>
      ) : (
        <button
          className={
            "bg-main-black text-main-white dark:bg-main-white dark:text-main-black rounded-full font-medium no-underline hover:cursor-pointer " +
            className
          }
          onClick={onClick}
          type={type}
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
  type: PropTypes.string,
  children: PropTypes.node,
};
