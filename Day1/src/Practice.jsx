const Practice = () => {
  let number = 1;
  const printClick = (name) => {
    number++;
    console.log("number", name, number);
  };
  return (
    <div>
      <h1>My Page</h1>
      <button
        onClick={() => {
          printClick("dfsfsf");
        }}
      >
        my button
      </button>
    </div>
  );
};
export default Practice;
