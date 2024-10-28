const camelCase = {
  width: "Width",
  height: "Height",
};

const Tabs = ({ tab, setTab, property, children }) => {
  function handleToggle(prefix) {
    if (tab !== `${prefix}${camelCase[property]}`) {
      setTab(`${prefix}${camelCase[property]}`);
    } else {
      setTab(property);
    }
  }

  return (
    <div className="tabs">
      <div className="tab__button-container">
        <button
          className={
            tab === `min${camelCase[property]}`
              ? "tab__button tab__button--active"
              : "tab__button"
          }
          onClick={() => handleToggle("min")}
        >
          <span>min</span>
        </button>
        <button
          className={
            tab === `max${camelCase[property]}`
              ? "tab__button tab__button--active"
              : "tab__button"
          }
          onClick={() => handleToggle("max")}
        >
          <span>max</span>
        </button>
      </div>
      {children}
    </div>
  );
};
export default Tabs;
