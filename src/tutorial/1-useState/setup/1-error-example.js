import React from "react";

// Without use state, ther variable values can change but the component doesn't rerender.

const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    title = "new title";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
