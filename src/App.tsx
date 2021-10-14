import React from "react";
import "./App.css";
import { Provider, useDispatch } from "react-redux";
import store from "../src/Redux/store";
import Main from "../src/Components/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main dispatch={useDispatch} />
      </div>
    </Provider>
  );
}

export default App;
