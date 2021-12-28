import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// used to target DOM nodes/elements

const UseRefBasics = () => {
  // is an object with property of 'current'
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  // here we immediately focus an input on initial render
  useEffect(() => {
    refContainer.current.focus();
  });

  // we don't keep the input value in a state
  // can add ref to any HTML element
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
