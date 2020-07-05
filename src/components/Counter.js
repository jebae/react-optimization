import React, { useCallback, useMemo, useState } from "react";
import { getGradient, logRender, logUseCallback, logUseMemo } from "../utils";

import PropTypes from "prop-types";
import styled from "styled-components";

const Counter = ({ color }) => {
  logRender(`Counter ${color}`);
  const [ num, setNum ] = useState(0);

  /**
   * useCallback is suitable for event handler
   * if function is too long, just write function in another file to import
   * you can test onClick is re defined when not using useCallback
   */
  const onClick = useCallback(() => {
    logUseCallback(`Counter ${color} onClick`, num);
    setNum(n => n + 1);
  }, []);

  const gradient = useMemo(() => {
    logUseMemo(`Counter ${color} gradient`);
    return getGradient(color);
  }, [ color ]);

  return (
    <CounterPresenter gradient={gradient} onClick={onClick}>
      <span>{color}</span>
      <br/>
      {num}
    </CounterPresenter>
  );
};

const CounterPresenter = styled.div`
  background-image: ${({ gradient }) => "linear-gradient(to right, " + gradient[0] + ", " + gradient[1] + ")"};
  width: 100px;
  height: 100px;
  font-size: 15px;
  text-align: center;
  padding-top: 20px;
`;

Counter.propTypes = {
  color: PropTypes.string.isRequired
};

/**
 * You can see Counter is rendered everytime
 * when new Counter is added without memo
 */
const MemoizedCounter = React.memo(Counter);

export {
  MemoizedCounter as Counter
};