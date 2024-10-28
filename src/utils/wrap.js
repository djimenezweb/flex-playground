export const wrap = (min, max, value) => {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const wrapZero = (max, value) => {
  return ((value % max) + max) % max;
};
