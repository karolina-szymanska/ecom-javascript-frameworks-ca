import { Link } from "react-router-dom";

// component to display the back link to Home Page
const BackLink = (props) => {
  return <Link to="/">{props.title}</Link>;
};

export default BackLink;
