import Title from "../property/Title";

const MarginShorthand = ({ handleUpdate, selectedId, currentValues }) => {
  const [mt, mr, mb, ml] = [
    currentValues?.marginTop ?? "0",
    currentValues?.marginRight ?? "0",
    currentValues?.marginBottom ?? "0",
    currentValues?.marginLeft ?? "0",
  ];

  function handleClick(property, value) {
    if (!selectedId) return;
    if (value === "auto") {
      handleUpdate(property, "0");
    } else {
      handleUpdate(property, "auto");
    }
  }

  return (
    <div className="property__container">
      <div className="margin-container">
        <div className="margin-buttons">
          <button
            className={`margin-button margin-button--top ${
              mt === "auto" ? "active" : undefined
            }`}
            disabled={!selectedId}
            onClick={() => handleClick("marginTop", mt)}
          />
          <button
            className={`margin-button margin-button--left ${
              ml === "auto" ? "active" : undefined
            }`}
            disabled={!selectedId}
            onClick={() => handleClick("marginLeft", ml)}
          />
          <button
            className={`margin-button margin-button--right ${
              mr === "auto" ? "active" : undefined
            }`}
            disabled={!selectedId}
            onClick={() => handleClick("marginRight", mr)}
          />
          <button
            className={`margin-button margin-button--bottom ${
              mb === "auto" ? "active" : undefined
            }`}
            disabled={!selectedId}
            onClick={() => handleClick("marginBottom", mb)}
          />
        </div>
        <div>
          <h3 className="property__title property__title--serif">
            Toggle auto margin
          </h3>
          {!selectedId && <p className="text--info">Select one item</p>}
          {selectedId && (
            <div className="property__title--margin-0">
              <Title name="margin" value={`${mt} ${mr} ${mb} ${ml}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarginShorthand;
