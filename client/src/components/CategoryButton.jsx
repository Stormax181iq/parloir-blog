import PropTypes from "prop-types";

export default function CategoryButton({ children, size = "lg" }) {
  let styles;
  switch (size) {
    case "lg":
      styles = "bg-accent px-4 py-3 rounded-full w-24 text-center";
      break;
    case "sm":
      styles = "bg-accent py-1 px-2 rounded-full";
  }
  return (
    <a href={`/posts/categories/${children.toLowerCase()}`} className={styles}>
      {children}
    </a>
  );
}
CategoryButton.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
