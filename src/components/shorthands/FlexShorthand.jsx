import { useState } from "react";
import { getOneValueSyntax } from "../../utils/flex-shorthand";
import { getButtonClassName } from "../../utils/get-button-classname";
import { motion, AnimatePresence } from "framer-motion";
import Input from "../property/Input";
import Property from "../property/Property";
import ToggleAccordion from "../animations/ToggleAccordion";
import Button from "../property/Button";

const FlexShorthand = ({
  handleUpdate,
  currentFlexValues,
  currentGrowValues,
  currentShrinkValues,
  currentBasisValues,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const oneValueShorthand = getOneValueSyntax(currentFlexValues);

  function handleToggle() {
    setIsOpen((v) => !v);
  }

  function handleUpdateFlexGrowShorthand(property, value) {
    handleUpdate(property, `${value} 1 0`);
  }

  function handleUpdateFlexBasisShorthand(property, value) {
    handleUpdate(property, `1 1 ${value}`);
  }

  function handleUpdateFlexShorthand(key, value) {
    const nextFlexValues = {
      flexGrow: currentGrowValues.length > 1 ? "0" : currentGrowValues[0],
      flexShrink: currentShrinkValues.length > 1 ? "1" : currentShrinkValues[0],
      flexBasis: currentBasisValues.length > 1 ? "auto" : currentBasisValues[0],
      [key]: value,
    };
    const nextFlexValue = `${nextFlexValues.flexGrow} ${nextFlexValues.flexShrink} ${nextFlexValues.flexBasis}`;

    handleUpdate("flex", nextFlexValue);
  }

  return (
    <div className="property__container">
      <div
        className="property__title--with-toggle-button"
        onClick={handleToggle}
      >
        <h3 className="property__title">
          <span className="property__title__name">flex:</span>
          {currentFlexValues.length === 1 && (
            <>
              <span className="property__title__value">
                {currentFlexValues}
              </span>
              {oneValueShorthand && (
                <span className="property__title__value property__title__value--flex-shorthand">
                  = {oneValueShorthand}
                </span>
              )}
            </>
          )}

          {currentFlexValues.length > 1 && (
            <span className="property__title__value--mixed">mixed</span>
          )}
        </h3>
        <ToggleAccordion isOpen={isOpen} />
      </div>
      <ul className="button-list">
        {[
          { alias: "initial", value: "0 1 auto" },
          { alias: "auto", value: "1 1 auto" },
          { alias: "none", value: "0 0 auto" },
        ].map(({ alias, value }) => {
          const { isActive, isMultiple } = getButtonClassName(
            value,
            currentFlexValues
          );
          return (
            <li key={`flex-${alias}`}>
              <Button
                isActive={isActive}
                isMultiple={isMultiple}
                onClick={() => handleUpdate("flex", value)}
              >
                {alias}
              </Button>
            </li>
          );
        })}

        <Input
          property="flex"
          type={"number"}
          handleUpdate={handleUpdateFlexGrowShorthand}
          currentValues={currentFlexValues}
        />
        <Input
          property="flex"
          type={"length"}
          handleUpdate={handleUpdateFlexBasisShorthand}
          currentValues={currentFlexValues}
        />
      </ul>
      <div className="collapsible">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 1, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 1, height: 0 }}
            >
              <div className="collapsible--one-col">
                <Property
                  name="flexGrow"
                  handleUpdate={handleUpdateFlexShorthand}
                  currentValues={currentGrowValues}
                />
                <Property
                  name="flexShrink"
                  handleUpdate={handleUpdateFlexShorthand}
                  currentValues={currentShrinkValues}
                />
                <Property
                  name="flexBasis"
                  handleUpdate={handleUpdateFlexShorthand}
                  currentValues={currentBasisValues}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default FlexShorthand;
