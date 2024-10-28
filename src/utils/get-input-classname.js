import { flexProperties } from "../config/flex-properties";

// flexNumberRegex: '<number> 1 0'
// const flexNumberRegex = /[0-9]+ 1 0/;
// flexLengthRegex: '1 1 <length>' (excepto si length es 'auto')
// const flexLengthRegex = /1 1 (?!auto)[0-9]*[^0-9]+$/;

const regex = { number: /[0-9]+ 1 0/, length: /1 1 (?!auto)[0-9]*[^0-9]+$/ };

export function getInputClassName(type, property, arr) {
  let isActive = false;
  let isMultiple = arr.length > 1;
  let flex = null;
  const valuesToCompare = flexProperties[property].values;

  if (arr.length > 0 && property === "flex") {
    isActive = arr.some((value) => {
      return value !== "" && regex[type].test(value);
    });
    if (isActive && !isMultiple) {
      const [grow, shrink, basis] = arr[0].split(" ");
      if (shrink === "1" && (basis === "0" || basis === "0%")) {
        flex = grow;
      } else {
        flex = basis;
      }
    }
  }

  if (arr.length > 0 && property !== "flex") {
    isActive = arr.some((value) => {
      return value !== "" && !valuesToCompare.includes(value);
    });
  }

  return { isActive, isMultiple, flex };
}
