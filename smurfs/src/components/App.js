import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import SmurfComponent from "./SmurfComponent";
import SmurfForm from "./SmurfForm";
import { rootReducer } from "../b-reducers";
import { GOT_SMURFS, NO_SMURFS, website } from "../actions";

import "./App.css";
import axios from "axios";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

class App extends Component {
  componentDidMount() {
    axios
      .get(website)
      .then((res) => {
        store.dispatch({
          type: GOT_SMURFS,
          payload: res.data,
        });
      })
      .catch((err) => {
        store.dispatch({
          type: NO_SMURFS,
          payload: err.message,
        });
      });
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>SMURFS! W/Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <SmurfForm />
          <SmurfComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
