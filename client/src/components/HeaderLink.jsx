import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function HeaderLink({ link, children }) {
  return (
    <Link to={link} className="mx-1 px-2 underline underline-offset-2">
      {children}
    </Link>
  );
}

HeaderLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node,
};
