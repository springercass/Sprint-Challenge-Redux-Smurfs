import React from "react";

const AddSmurf = props => {
  return (
    <div>
      <h2>Add Smurf</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.addSmurf(props.newSmurf);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={props.name}
          onChange={props.handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={props.age}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={props.height}
          onChange={props.handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddSmurf;
