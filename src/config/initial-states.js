export const DEFAULT_CONTAINER_STYLE = {
  width: "auto",
  maxWidth: "auto",
  minWidth: "auto",
  height: "auto",
  maxHeight: "auto",
  minHeight: "auto",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "start",
  alignItems: "stretch",
  alignContent: "stretch",
  rowGap: "0",
  columnGap: "0",
};

export const DEFAULT_ITEM_STYLE = {
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
  marginRight: "0",
  marginBottom: "0",
  marginLeft: "0",
};

export const DEFAULT_ITEMS = [
  { id: "qSUmVL", content: "1", style: { ...DEFAULT_ITEM_STYLE } },
  { id: "2gvvpf", content: "2", style: { ...DEFAULT_ITEM_STYLE } },
  { id: "3obMB8", content: "3", style: { ...DEFAULT_ITEM_STYLE } },
  { id: "nmPqzI", content: "4", style: { ...DEFAULT_ITEM_STYLE } },
];
