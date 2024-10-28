import FlexShorthand from "./shorthands/FlexShorthand";
import MarginShorthand from "./shorthands/MarginShorthand";
import { getCommonStyles } from "../utils/get-common-styles";
import Property from "./property/Property";
import TextContent from "./property/TextContent";
import FlexItemsControlsButtons from "./FlexItemsControlsButtons";
import { useState } from "react";
import Tabs from "./Tabs";

const FlexItemsControls = ({
  flexItems,
  selectedId,
  selectedItem,
  setSelectedId,
  dispatch,
  initialItemsRef,
}) => {
  const [widthTab, setWidthTab] = useState("width");
  const [heightTab, setHeightTab] = useState("height");

  let commonStyles;
  !selectedId && (commonStyles = getCommonStyles(flexItems));

  function handleUpdate(key, value) {
    dispatch({
      type: selectedId ? "update-item" : "update-all",
      style: { [key]: value },
      id: selectedId,
    });
  }

  function handleContent(content) {
    dispatch({
      type: selectedId ? "content-item" : "content-all",
      content: content,
      id: selectedId,
    });
  }

  return (
    <section className="flex-items-controls flow" data-multiple={!selectedId}>
      <h2 className="controls__title">Flex Items</h2>

      {/* {selectedId && <p>Modify flex item {selectedId}</p>}
      {!selectedId && <p>Modify all flex items</p>} */}

      <FlexItemsControlsButtons
        flexItems={flexItems}
        selectedId={selectedId}
        selectedItem={selectedItem}
        setSelectedId={setSelectedId}
        dispatch={dispatch}
        initialItemsRef={initialItemsRef}
        size={20}
      />
      <div className="scrollable flow">
        <Tabs tab={widthTab} setTab={setWidthTab} property="width">
          <Property
            name={widthTab}
            handleUpdate={handleUpdate}
            currentValues={
              selectedId
                ? [selectedItem.style[widthTab]]
                : commonStyles?.[widthTab]
            }
          />
        </Tabs>
        <Tabs tab={heightTab} setTab={setHeightTab} property="height">
          <Property
            name={heightTab}
            handleUpdate={handleUpdate}
            currentValues={
              selectedId
                ? [selectedItem.style[heightTab]]
                : commonStyles?.[heightTab]
            }
          />
        </Tabs>
        <FlexShorthand
          currentFlexValues={
            selectedId ? [selectedItem.style.flex] : commonStyles?.flex
          }
          currentGrowValues={
            selectedId
              ? [selectedItem.style.flex.split(" ")[0]]
              : commonStyles.flexGrow
          }
          currentShrinkValues={
            selectedId
              ? [selectedItem.style.flex.split(" ")[1]]
              : commonStyles.flexShrink
          }
          currentBasisValues={
            selectedId
              ? [selectedItem.style.flex.split(" ")[2]]
              : commonStyles.flexBasis
          }
          handleUpdate={handleUpdate}
        />
        <Property
          name="alignSelf"
          handleUpdate={handleUpdate}
          currentValues={
            selectedId
              ? [selectedItem.style.alignSelf]
              : commonStyles?.alignSelf
          }
        />
        <Property
          name="order"
          handleUpdate={handleUpdate}
          currentValues={
            selectedId ? [selectedItem.style.order] : commonStyles?.order
          }
        />
        <MarginShorthand
          selectedId={selectedId}
          handleUpdate={handleUpdate}
          currentValues={selectedId ? selectedItem.style : null}
        />
        <TextContent
          content={selectedId ? selectedItem.content : ""}
          handleContent={handleContent}
        />
      </div>
    </section>
  );
};

export default FlexItemsControls;
