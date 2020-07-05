import React, { useCallback, useState } from "react";
import { logRender, logUseCallback, logUseSelector } from "../utils";
import { useDispatch, useSelector } from "react-redux";

import { toggleCheckbox } from "../store";

export const Checkbox = () => {
  logRender("Checkbox");

  const [ trace, setTrace ] = useState(0);

  const { checked } = useSelector(({ input }) => {
    logUseSelector("Checkbox", `input ${input.checked}`);
    return input;
  }, (left, right) => left.checked === right.checked);

  const dispatch = useDispatch();

  const onChange = useCallback((e) => {
    logUseCallback("Checkbox onChange", trace);
    setTrace(t => t + 1);
    dispatch(toggleCheckbox());
  }, []);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};