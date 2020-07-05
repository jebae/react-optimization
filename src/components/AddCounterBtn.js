import React, { useCallback, useState } from "react";
import { logRender, logUseCallback, newRandomColor } from "../utils";

import { addCounter } from "../store";
import { useDispatch } from "react-redux";

const AddCounterBtn = () => {
  logRender("AddCounterBtn");
  const dispatch = useDispatch();
  const [ trace, setTrace ] = useState(0);

  const onClick = useCallback(() => {
    logUseCallback("AddCounterBtn onClick", trace);

    const newColor = newRandomColor();

    setTrace(t => t + 1);
    dispatch(addCounter(newColor));
  }, [ dispatch ]);

  return <button onClick={onClick}>add counter</button>;
};

const MemoizedAddCounterBtn = React.memo(AddCounterBtn);

export {
  MemoizedAddCounterBtn as AddCounterBtn
};