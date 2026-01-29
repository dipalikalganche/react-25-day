import Child from "./Child";

const Parent = () => {
  // this is object and i want to send this data through the props
  const address = {
    pincode: 55454,
    city: "pune",
  };

  const array = ["shahaji", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali", "koknae", "dipali"];

  console.log("first", address.city);
  return (
    <>
      <h5>Parent eleemtn</h5>
      <Child addressData={array} />
    </>
  );
};

export default Parent;
