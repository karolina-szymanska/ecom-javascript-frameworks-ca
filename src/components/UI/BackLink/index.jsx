import { Link } from "react-router-dom";

// component to display the back link to Home Page
const BackLink = ({ children }) => {
  return <Link to="/">{children}</Link>;
};

export default BackLink;
