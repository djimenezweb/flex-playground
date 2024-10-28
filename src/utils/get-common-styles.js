export function getCommonStyles(arr) {
  if (arr.length === 0)
    return {
      width: [""],
      maxWidth: [""],
      minWidth: [""],
      height: [""],
      maxHeight: [""],
      minHeight: [""],
      flex: [""],
      alignSelf: [""],
      order: [""],
      flexGrow: [""],
      flexShrink: [""],
      flexBasis: [""],
      marginTop: [""],
      marginRight: [""],
      marginBottom: [""],
      marginLeft: [""],
    };

  const commonStyles = {};

  const properties = Object.keys(arr[0].style);

  properties.forEach((property) => {
    const uniqueArray = [];
    arr.forEach((item) => {
      const value = item.style[property];
      if (!uniqueArray.includes(value)) {
        uniqueArray.push(value);
      }
    });
    commonStyles[property] = uniqueArray;
  });

  ["flexGrow", "flexShrink", "flexBasis"].forEach((property, index) => {
    const uniqueArray = [];
    arr.forEach((item) => {
      const value = item.style.flex.split(" ")[index];
      if (!uniqueArray.includes(value)) {
        uniqueArray.push(value);
      }
    });
    commonStyles[property] = uniqueArray;
  });

  return commonStyles;
}
