const DEFAULTS = {
  width: "auto",
  maxWidth: "auto",
  minWidth: "auto",
  height: "auto",
  maxHeight: "auto",
  minHeight: "auto",
  flex: "0 1 auto",
  alignSelf: "auto",
  order: "0",
  marginTop: "0",
  marginLeft: "0",
  marginBottom: "0",
  marginRight: "0",
};

export function formatItemsCode(arr) {
  let commonStyles = {};
  let nthStyles = [];

  Object.keys(DEFAULTS).forEach((property) => {
    const uniqueArray = [];
    arr.forEach((item) => {
      const value = item.style[property];
      if (!uniqueArray.includes(value)) {
        uniqueArray.push(value);
      }
    });
    if (uniqueArray.length === 1) {
      commonStyles[property] = uniqueArray[0];
    }
  });

  arr.forEach((element, index) => {
    Object.keys(DEFAULTS).forEach((property) => {
      if (element.style[property] !== commonStyles[property]) {
        nthStyles[index] = {
          ...nthStyles[index],
          [property]: element.style[property],
        };
      }
    });
  });

  // Delete properties from Common Styles if values are default
  for (let key in commonStyles) {
    if (commonStyles[key] === DEFAULTS[key]) {
      delete commonStyles[key];
    }
  }

  // Delete properties from nth Children if values are default AND the same value is default in common values
  nthStyles.forEach((item) => {
    for (let key in item) {
      if (item[key] === DEFAULTS[key] && !commonStyles[key]) delete item[key];
    }
  });

  return { commonStyles, nthStyles };
}
