import { flexProperties } from "../../config/flex-properties";
import { getButtonClassName } from "../../utils/get-button-classname";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

const Property = ({ name, handleUpdate, currentValues }) => {
  const { cssName, values, input } = flexProperties[name];

  return (
    <div className="property__container">
      <Title
        name={cssName}
        value={currentValues ?? ""}
        mixed={currentValues.length > 1}
      />

      <ul className="button-list">
        {values.map((value) => {
          const { isActive, isMultiple } = getButtonClassName(
            value,
            currentValues
          );
          return (
            <li key={`${name}-${value}`}>
              <Button
                isActive={isActive}
                isMultiple={isMultiple}
                onClick={() => handleUpdate(name, value)}
              >
                {value}
              </Button>
            </li>
          );
        })}
        {input && (
          <Input
            property={name}
            type={input}
            handleUpdate={handleUpdate}
            currentValues={currentValues}
          />
        )}
      </ul>
    </div>
  );
};
export default Property;
