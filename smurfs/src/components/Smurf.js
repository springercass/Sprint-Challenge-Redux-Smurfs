import React from "react";

const Smurf = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
    </div>
  );
};

export default Smurf;
