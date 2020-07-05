import { logRender, logUseSelector } from "../utils";

import { Counter } from "./Counter";
import React from "react";
import { useSelector } from "react-redux";

export const Counters = () => {
  logRender("Counters");

  const counters = useSelector(({ counter }) => {
    logUseSelector("Counters", "counter.counters");
    return counter.counters;
  });

  return (
    <div>
      { counters.map(({ color }, i) =>
        <Counter key={`${color}-${i}`} color={color}/>) }
    </div>
  );
};