import SecondComponent from "./SecondComponent";
import Footer from "./src/Component/Footer";
import Content from "./src/Component/Content";
import Header from "./src/Component/Header";

function MyFirstComponent() {
  // const name = "dipali";
  const reactElememt = (createby) => {
    return <p>hey i am react element {createby}</p>;
  };

  /**
   *  function demo(name){
   * return name;
   *
   * }
   *
   * conosle.log("dsfs",demo("dipali"))
   *
   *
   */

  const name = "dev shaha";
  return (
    <>
      <SecondComponent />
      <h1 style={{ color: "blue" }}>hello my name is {name}</h1>
      <Footer name={name} />
      <Content />

      {reactElememt("shahaji")}
      {/* the above code is my react element  */}
    </>
  );
}

export default MyFirstComponent;
