import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

// can use this in both onSubmit on form, or onCLick on button
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Refreshes on submit by default, so we prevent default to handle the event ourselves
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email }; // ES6 shorthand for { firstName: firstName, email: email }
      setPeople((people) => {
        return [...people, person];
      }); // can also pass directly instead of functional update
      setFirstName("");
      setEmail("");
    } else console.log("empty!");
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              // On change access the event object and set the state
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">add person</button>
        </form>

        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
