import React, { useCallback, useState } from "react";
import { logRender, logUseCallback, logUseSelector } from "../utils";
import { useDispatch, useSelector } from "react-redux";

import { setInput } from "../store";

export const InputText = () => {
  logRender("InputText");

  const [ trace, setTrace ] = useState(0);

  const { text } = useSelector(({ input }) => {
    logUseSelector("InputText", `input ${input.text}`);
    return input;
  }, (left, right) => left.text === right.text);

  const dispatch = useDispatch();

  const onChange = useCallback((e) => {
    logUseCallback("Input onChange", trace);
    setTrace(t => t + 1);
    dispatch(setInput(e.target.value));
  }, []);

  return <input value={text} onChange={onChange}/>;
};