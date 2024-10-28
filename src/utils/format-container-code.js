const DEFAULTS = {
  width: "auto",
  maxWidth: "auto",
  minWidth: "auto",
  height: "auto",
  maxHeight: "auto",
  minHeight: "auto",
  flexFlow: "row nowrap",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "start",
  alignItems: "stretch",
  alignContent: "stretch",
  gap: "0",
};

export function formatContainerCode(arr) {
  const containerCode = {};

  [
    "display",
    "width",
    "maxwidth",
    "minwidth",
    "height",
    "maxheight",
    "minheight",
    "flexFlow",
    "justifyContent",
    "alignItems",
    "alignContent",
    "gap",
  ].forEach((property) => {
    if (property === "flexFlow") {
      containerCode.flexFlow = arr.flexDirection + " " + arr.flexWrap;
    } else if (property === "gap") {
      containerCode.gap = `${arr.rowGap} ${
        arr.columnGap !== arr.rowGap ? arr.columnGap : ""
      }`.trim();
    } else {
      containerCode[property] = arr[property];
    }
  });

  // Delete properties if values are default
  for (const key in containerCode) {
    if (containerCode[key] === DEFAULTS[key]) {
      delete containerCode[key];
    }
  }

  return containerCode;
}
