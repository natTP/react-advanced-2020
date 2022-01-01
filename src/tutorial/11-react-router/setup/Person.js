import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  const [displayName, setDisplayName] = useState("default name");
  const { name } = useParams(); // Router parameters

  console.log(useParams());

  useEffect(() => {
    const newPerson = data.find((person) => person.name === name);
    setDisplayName(newPerson.name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people">Back</Link>
    </div>
  );
};

export default Person;
