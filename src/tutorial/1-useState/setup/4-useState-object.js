import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Pete",
    age: "24",
    message: "Lorem ipsum",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "hello world" });
  };

  // could just use setName, setAge, setMessage

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
