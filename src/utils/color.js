export const getGradient = (color) => {
  let pureColor;

  if (color.startsWith("#")) {
    pureColor = color.slice(1);
  }
  const r = pureColor.substr(0, 2);
  const g = pureColor.substr(2, 2);
  const b = pureColor.substr(4, 2);

  return [
    `#${getLowerBound(r)}${getLowerBound(g)}${getLowerBound(b)}`,
    `#${getUpperBound(r)}${getUpperBound(g)}${getUpperBound(b)}`,
  ];
};

const getLowerBound = (hex) => {
  let bound = parseInt(hex, 16);

  bound = Math.max(bound - 50, 0);
  return bound.toString(16).padStart(2, "0");
};

const getUpperBound = (hex) => {
  let bound = parseInt(hex, 16);

  bound = Math.min(bound + 50, 255);
  return bound.toString(16).padStart(2, "0");
};

export const newRandomColor = () => {
  return [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ].reduce((acc, cur) => {
    return `${acc}${cur.toString(16).padStart(2, "0")}`;
  },"#");
};