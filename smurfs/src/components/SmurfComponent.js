import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfComponent = (props) => {
  return (
    <div>
      {props.smurfs.map((smurf) => (
        <div className="card" key={smurf.id}>
          <h3>{smurf.name}</h3>
          <p>{smurf.age}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfsReducer.smurfs,
    isLoading: state.smurfsReducer.isLoading,
    error: state.smurfsReducer.error,
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfComponent);
