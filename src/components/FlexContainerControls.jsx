import { useState } from "react";
import Property from "./property/Property";
import FlexFlowShorthand from "./shorthands/FlexFlowShorthand";
import GapShorthand from "./shorthands/GapShorthand";
import { Reply as Reset } from "lucide-react";
import Tabs from "./Tabs";
import Logo from "./Logo";

const FlexContainerControls = ({
  flexContainerStyle,
  dispatch,
  handleResetContainer,
}) => {
  const [widthTab, setWidthTab] = useState("width");
  const [heightTab, setHeightTab] = useState("height");

  function handleUpdateContainer(key, value) {
    dispatch({ type: "update-container", style: { [key]: value } });
  }

  return (
    <section className="flex-container-controls flow">
      <Logo />

      <div className="controls__title__with-button">
        <h2 className="controls__title">Flex Container</h2>
        <div>
          <button
            className="flex-container-controls__button"
            onClick={handleResetContainer}
            data-tooltip="Reset container styles"
          >
            <Reset size={20} />
          </button>
        </div>
      </div>
      <div className="scrollable flow">
        <Property
          name="display"
          handleUpdate={handleUpdateContainer}
          currentValues={[flexContainerStyle.display]}
        />
        <Tabs tab={widthTab} setTab={setWidthTab} property="width">
          <Property
            name={widthTab}
            handleUpdate={handleUpdateContainer}
            currentValues={[flexContainerStyle[widthTab]]}
          />
        </Tabs>
        <Tabs tab={heightTab} setTab={setHeightTab} property="height">
          <Property
            name={heightTab}
            handleUpdate={handleUpdateContainer}
            currentValues={[flexContainerStyle[heightTab]]}
          />
        </Tabs>

        <FlexFlowShorthand
          name="flex-flow"
          value={`${flexContainerStyle.flexDirection} ${flexContainerStyle.flexWrap}`}
        >
          <Property
            name="flexDirection"
            handleUpdate={handleUpdateContainer}
            currentValues={[flexContainerStyle.flexDirection]}
          />
          <Property
            name="flexWrap"
            handleUpdate={handleUpdateContainer}
            currentValues={[flexContainerStyle.flexWrap]}
          />
        </FlexFlowShorthand>

        <Property
          name="justifyContent"
          handleUpdate={handleUpdateContainer}
          currentValues={[flexContainerStyle.justifyContent]}
        />
        <Property
          name="alignItems"
          handleUpdate={handleUpdateContainer}
          currentValues={[flexContainerStyle.alignItems]}
        />
        <Property
          name="alignContent"
          handleUpdate={handleUpdateContainer}
          currentValues={[flexContainerStyle.alignContent]}
        />
        <GapShorthand
          name="gap"
          value={
            flexContainerStyle.rowGap === flexContainerStyle.columnGap
              ? flexContainerStyle.rowGap
              : `${flexContainerStyle.rowGap} ${flexContainerStyle.columnGap}`
          }
        >
          <Property
            name="rowGap"
            handleUpdate={handleUpdateContainer}
            currentValues={[flexContainerStyle.rowGap]}
          />
          <Property
            name="columnGap"
            handleUpdate={handleUpdateContainer}
            currentValues={[flexContainerStyle.columnGap]}
          />
        </GapShorthand>
      </div>
    </section>
  );
};

export default FlexContainerControls;
