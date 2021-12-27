import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Some Text"); // empty string evaluates as false
  const firstValue = text || "hello world"; // show "hello world" when text is empty
  const secondValue = text && "hello world"; // show "hello world" when text is not empty

  const [isError, setIsError] = useState(false);

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "John Doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>error</h1>}
      {isError ? <p>There's an error</p> : <p>No error</p>}
    </>
  );
};

export default ShortCircuit;
