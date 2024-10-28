import {
  SquarePlus,
  SquareMinus,
  // Copy,
  CopyCheck,
  SquareCheck,
  SquareChevronRight,
  SquareChevronLeft,
  Reply as Reset,
  ReplyAll as ResetAll,
} from "lucide-react";

import { wrapZero } from "../utils/wrap";

const FlexItemsControlsButtons = ({
  flexItems,
  selectedId,
  setSelectedId,
  dispatch,
  initialItemsRef,
  size = 16,
}) => {
  const isEmpty = flexItems.length === 0;

  function handleDeleteItem() {
    if (!selectedId) return;
    dispatch({ type: "delete-item", id: selectedId });

    if (flexItems.length === 1) {
      setSelectedId(null);
      return;
    }

    const index = flexItems.findIndex((item) => item.id === selectedId);
    if (index === 0) {
      handleSelectNext();
    } else {
      handleSelectPrevious();
    }
  }

  function handleAddItem() {
    dispatch({ type: "add-item" });
  }

  function handleResetAll() {
    dispatch({ type: "reset-all", initial: initialItemsRef.current });
    setSelectedId(null);
  }

  function handleResetItem() {
    dispatch({ type: "reset-item", id: selectedId });
  }

  function handleSelectAll() {
    if (selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(flexItems[0].id);
    }
  }

  function handleSelectNext() {
    if (!selectedId) {
      setSelectedId(flexItems[0].id);
    } else {
      const index = flexItems.findIndex((item) => item.id === selectedId);
      const nextIndex = wrapZero(flexItems.length, index + 1);
      const nextId = flexItems[nextIndex].id;
      setSelectedId(nextId);
    }
  }

  function handleSelectPrevious() {
    if (!selectedId) {
      setSelectedId(flexItems[flexItems.length - 1].id);
    } else {
      const index = flexItems.findIndex((item) => item.id === selectedId);
      const previousIndex = wrapZero(flexItems.length, index - 1);
      const previousId = flexItems[previousIndex].id;
      setSelectedId(previousId);
    }
  }

  return (
    <div className="flex-items-controls__button-wrapper">
      <div className="flex-items-controls__button-group">
        <button
          className="flex-items-controls__button"
          onClick={handleSelectAll}
          data-tooltip="Select one / all"
          disabled={isEmpty}
        >
          {selectedId || isEmpty ? (
            <SquareCheck size={size} />
          ) : (
            <CopyCheck size={size} />
          )}
        </button>
        <button
          className="flex-items-controls__button"
          onClick={handleSelectPrevious}
          data-tooltip="Select previous item"
          disabled={isEmpty}
        >
          <SquareChevronLeft size={size} />
        </button>
        <button
          className="flex-items-controls__button"
          onClick={handleSelectNext}
          data-tooltip="Select next item"
          disabled={isEmpty}
        >
          <SquareChevronRight size={size} />
        </button>
      </div>
      <div className="flex-items-controls__button-group">
        <button
          className="flex-items-controls__button"
          onClick={handleAddItem}
          data-tooltip="Add item"
        >
          <SquarePlus size={size} />
        </button>
        <button
          className="flex-items-controls__button"
          onClick={handleDeleteItem}
          data-tooltip="Delete item"
          disabled={isEmpty || !selectedId}
        >
          <SquareMinus size={size} />
        </button>
      </div>
      <div className="flex-items-controls__button-group">
        <button
          className="flex-items-controls__button"
          onClick={handleResetItem}
          data-tooltip="Reset item"
          disabled={isEmpty || !selectedId}
        >
          <Reset size={size} />
        </button>
        <button
          className="flex-items-controls__button"
          onClick={handleResetAll}
          data-tooltip="Reset all items"
        >
          <ResetAll size={size} />
        </button>
      </div>
    </div>
  );
};
export default FlexItemsControlsButtons;
