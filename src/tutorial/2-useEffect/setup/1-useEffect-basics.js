import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // Used to update stuff outside of the component
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) document.title = `New Messages(${value})`;
  }, [value]);

  // dependency list tells to run useEffect when the specified  values are updated
  // empty dependency list = run only on initial render
  // no dependency list = runs initial render and every re-render

  console.log("render");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click
      </button>
    </>
  );
};

export default UseEffectBasics;
