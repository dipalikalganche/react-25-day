import base_url from "./constant";
import Header from "./Header";

const Footer = (props) => {
  console.log("props", props);
  return (
    <>
      <div>footer {base_url}</div> <Header />;
    </>
  );
};
export default Footer;
