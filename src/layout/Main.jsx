import { useReducer, useRef } from "react";
import { DEFAULT_CONTAINER_STYLE } from "../config/initial-states";
import FlexContainerControls from "../components/FlexContainerControls";
import Playground from "../components/Playground";
import { containerReducer } from "../reducers/containerReducer";

const Main = () => {
  const initialContainerStyleRef = useRef(DEFAULT_CONTAINER_STYLE);

  const [flexContainerStyle, dispatch] = useReducer(
    containerReducer,
    initialContainerStyleRef.current
  );

  function handleResetContainer() {
    dispatch({
      type: "reset-container",
      initial: initialContainerStyleRef.current,
    });
  }

  return (
    <main>
      <FlexContainerControls
        flexContainerStyle={flexContainerStyle}
        dispatch={dispatch}
        handleResetContainer={handleResetContainer}
      />
      <Playground
        flexContainerStyle={flexContainerStyle}
        dispatchContainer={dispatch}
        initialContainerStyleRef={initialContainerStyleRef}
      />
    </main>
  );
};
export default Main;
