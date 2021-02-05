import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    age: "",
    height: "",
    id: 0,
    name: "",
  });

  const handleChange = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
      id: props.smurfs.length,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(newSmurf);
    props.addSmurf({ ...newSmurf, height: `${newSmurf.height}cm` });
    setNewSmurf({ age: "", height: "", id: 0, name: "" });
  };

  return (
    <form onSubmit={handleClick}>
      <label htmlFor="name">
        Name:
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          value={newSmurf.name}
        ></input>
      </label>
      <br />
      <label htmlFor="age">
        Age:
        <input
          onChange={handleChange}
          type="number"
          name="age"
          id="age"
          value={newSmurf.age}
        ></input>
      </label>
      <br />
      <label htmlFor="height">
        Height (in cm.):
        <input
          type="number"
          id="height"
          name="height"
          onChange={handleChange}
          value={newSmurf.height}
        />
      </label>
      <br />
      <button>ADD</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfsReducer.smurfs,
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
