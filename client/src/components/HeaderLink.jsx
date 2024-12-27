import PropTypes from "prop-types";

export default function HeaderLink({ link, children }) {
  return (
    <a href={link} className="mx-1 px-2 underline underline-offset-2">
      {children}
    </a>
  );
}

HeaderLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node,
};
