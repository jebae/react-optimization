import "./App.css";

import { AddCounterBtn, Checkbox, Counters, InputText } from "./components";
import React, { useEffect } from "react";

import { logRender } from "./utils";
import { setCounters } from "./store";
import { useDispatch } from "react-redux";

const colorsFetched = [
  { color: "#ff9a76" },
  { color: "#96c0eb" },
  { color: "#7fff94" }
];

function App() {
  logRender("App");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCounters(colorsFetched));
  }, [ dispatch ]);

  return (
    <div>
      <InputText/>
      <Checkbox/>
      <Counters/>
      <AddCounterBtn/>
    </div>
  );
}

export default App;
