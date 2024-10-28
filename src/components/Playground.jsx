import FlexItemsControls from "./FlexItemsControls";
import { useState, useReducer, useRef } from "react";
import Display from "./Display";
import { DEFAULT_ITEMS } from "../config/initial-states";
import { itemReducer } from "../reducers/itemReducer";
import Menu from "./menu/Menu";

const Playground = ({
  flexContainerStyle,
  dispatchContainer,
  initialContainerStyleRef,
}) => {
  const initialItemsRef = useRef(DEFAULT_ITEMS);

  const [flexItems, dispatch] = useReducer(
    itemReducer,
    initialItemsRef.current
  );

  const [selectedId, setSelectedId] = useState(null);
  let selectedItem = null;
  if (selectedId) {
    selectedItem = flexItems.find((i) => i.id === selectedId);
  }

  return (
    <>
      <Display
        flexContainerStyle={flexContainerStyle}
        flexItems={flexItems}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <FlexItemsControls
        flexItems={flexItems}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        selectedItem={selectedItem}
        dispatch={dispatch}
        initialItemsRef={initialItemsRef}
      />
      <Menu
        dispatchContainer={dispatchContainer}
        initialContainerStyleRef={initialContainerStyleRef}
        dispatchItems={dispatch}
        initialItemsRef={initialItemsRef}
        flexContainerStyle={flexContainerStyle}
        flexItems={flexItems}
      />
    </>
  );
};
export default Playground;
