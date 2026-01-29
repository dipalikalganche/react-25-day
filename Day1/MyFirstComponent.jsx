import SecondComponent from "./SecondComponent";
import Footer from "./src/Component/Footer";
import Content from "./src/Component/Content";
import Header from "./src/Component/Header";
import Dsk from "./src/Component/Content";
function MyFirstComponent() {
  // const name = "dipali";
  const reactElememt = (createby) => {
    return <p>hey i am react element {createby}</p>;
  };

  let flag = true;

  console.log(flag);
  const dipaliName = "dev dipi";
  const shahajiName = "dev shaha";
  return (
    <>
      {flag ? <SecondComponent /> : <Dsk />}
      

      {/* {!flag ? "yes i am true " : "i am false"} */}

      {/* {flag ? (
        <h1 style={{ color: "blue" }}>hello my name is {dipaliName}</h1>
      ) : (
        <h1 style={{ color: "blue" }}>hello my name is {shahajiName}</h1>
      )} */}
      {/* <h1 style={{ color: "blue" }}>hello my name is {dipaliName}</h1> */}
      {/* <Footer name={name} />
      <Content /> */}

      {/* {reactElememt("shahaji")} */}
      {/* the above code is my react element  */}
    </>
  );
}

export default MyFirstComponent;
