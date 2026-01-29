import udsfsfsfsfdsfrl from "./constant";
import Header from "./Header";
import { adress, returnName, vegetables } from "./constant";
const Footer = (props) => {
  console.log("props", adress);

  return (
    <>
      {/* <div>footer {`${adress.landmark}      ${adress.city}`}</div>
      <div>{udsfsfsfsfdsfrl}</div>
      {vegetables[vegetables.length - 1]} */}
      {/* <div>{returnName()}</div> */}
      {/* the above code is for default export i can use any name while importing  */}
      <Header />
    </>
  );
};
export default Footer;
