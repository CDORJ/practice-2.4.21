import axios from "axios";
import { website } from "../actions";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfComponent = (props) => {
  return (
    <div>
      {props.smurfs.map((smurf) => (
        <div class="card">
          <h3>{smurf.name}</h3>
          <p>{smurf.age}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    smurfs: state.smurfsReducer.smurfs,
    isLoading: state.smurfsReducer.isLoading,
    error: state.smurfsReducer.error,
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfComponent);
