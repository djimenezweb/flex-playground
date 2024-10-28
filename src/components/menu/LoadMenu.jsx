import { useLayoutEffect, useState } from "react";
import { PRESETS } from "../../config/presets";
import { getStored } from "../../utils/get-stored";
import { formatDate } from "../../utils/format-date";
import { Trash } from "lucide-react";

const LoadMenu = ({
  dispatchContainer,
  initialContainerStyleRef,
  dispatchItems,
  initialItemsRef,
  setSavePlaceholder,
  closeMenu,
}) => {
  const [storedFlex, setStoredFlex] = useState([]);

  useLayoutEffect(() => {
    const stored = getStored("storedFlex");
    setStoredFlex(stored);
  }, []);

  function handleDelete(name) {
    const nextFlex = storedFlex.filter((flex) => flex.name !== name);
    window.localStorage.setItem("storedFlex", JSON.stringify(nextFlex));
    setSavePlaceholder((current) => {
      if (current === name) return "";
      return current;
    });
    setStoredFlex(nextFlex);
  }

  function handleLoadPreset(index) {
    const nextContainer = PRESETS[index].flexContainerStyle;
    const nextItems = PRESETS[index].flexItems;

    setSavePlaceholder("");
    load(nextContainer, nextItems);
  }

  function handleLoadStored(index) {
    const nextContainer = storedFlex[index].flexContainerStyle;
    const nextItems = storedFlex[index].flexItems;

    setSavePlaceholder(storedFlex[index].name);
    load(nextContainer, nextItems);
  }

  function load(nextContainer, nextItems) {
    initialContainerStyleRef.current = nextContainer;
    initialItemsRef.current = nextItems;
    dispatchContainer({
      type: "reset-container",
      initial: initialContainerStyleRef.current,
    });
    dispatchItems({
      type: "reset-all",
      initial: initialItemsRef.current,
    });
    closeMenu();
  }

  return (
    <div className="load">
      <h4 className="menu__title">Load preset</h4>
      <ul className="load__list">
        {PRESETS.map((preset, index) => (
          <li
            className="load__item load__item--preset"
            key={preset.name}
            onClick={() => handleLoadPreset(index)}
          >
            {preset.name}
          </li>
        ))}
      </ul>
      <h4 className="menu__title">Saved</h4>
      {storedFlex.length === 0 && <p>Nothing stored</p>}
      {storedFlex.length > 0 && (
        <ul className="load__list">
          {storedFlex.map((flex, index) => {
            return (
              <li className="load__item load__item--saved" key={flex.name}>
                <span onClick={() => handleLoadStored(index)}>{flex.name}</span>
                <span>{formatDate(flex.creationDate)}</span>
                <button
                  className="load__delete-button"
                  onClick={() => handleDelete(flex.name)}
                >
                  <Trash size={16} />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default LoadMenu;
