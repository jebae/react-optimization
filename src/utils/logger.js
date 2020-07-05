export const logRender = (componentName) => {
  console.log(`Functional component ${componentName} render`);
};

export const logUseCallback = (funcName, trace) => {
  console.log(`useCallback function ${funcName} trace: ${trace}`);
};

export const logUseMemo = (valueName) => {
  console.log(`useMemo ${valueName}`);
};

export const logUseSelector = (componentName, stateKey) => {
  console.log(`useSelector ${componentName} ${stateKey}`);
};