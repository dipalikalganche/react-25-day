const Child = (propsData) => {
  console.log("props", propsData?.addressData[1]);

  const finalData = propsData.addressData;

  //   console.log("dfs", elements);
  //   console.log("fdsdf", finalData);
  return (
    <>
      <h5>child element</h5>
      {finalData?.map((item) => (
        <h3>{item}</h3>
      ))}
    </>
  );
};

export default Child;
