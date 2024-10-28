import { useEffect, useRef, useState } from "react";
import { getStored } from "../../utils/get-stored";

const SaveMenu = ({
  flexContainerStyle,
  flexItems,
  savePlaceholder,
  setSavePlaceholder,
  closeMenu,
}) => {
  const [name, setName] = useState(savePlaceholder);
  const [replace, setReplace] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  useEffect(() => {
    const storedFlex = getStored("storedFlex");
    const exists = storedFlex.find((flex) => flex.name === name);
    if (exists) {
      setReplace(true);
    } else {
      setReplace(false);
    }
  }, [name]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name) return;

    const newFlex = {
      name,
      creationDate: new Date(),
      flexContainerStyle,
      flexItems,
    };

    const storedFlex = getStored("storedFlex");

    let nextFlex;

    if (replace) {
      nextFlex = storedFlex.map((flex) => {
        if (flex.name === name) {
          return newFlex;
        } else {
          return flex;
        }
      });
    }

    if (!replace) {
      nextFlex = [...storedFlex, newFlex];
    }

    window.localStorage.setItem("storedFlex", JSON.stringify(nextFlex));
    setSavePlaceholder(name);
    closeMenu();
  }

  return (
    <div>
      <h4 className="menu__title">Save</h4>
      <form className="save-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          ref={inputRef}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{replace ? "Replace" : "Save"}</button>
      </form>
    </div>
  );
};
export default SaveMenu;
