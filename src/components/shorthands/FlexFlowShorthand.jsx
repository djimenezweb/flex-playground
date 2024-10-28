import { useState } from "react";
import Title from "../property/Title";
import ToggleAccordion from "../animations/ToggleAccordion";
import { motion, AnimatePresence } from "framer-motion";

const FlexFlowShorthand = ({ children, name, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((v) => !v);
  }
  return (
    <div className="property__container">
      <div
        className="property__title--with-toggle-button property__title--margin-0"
        onClick={handleToggle}
      >
        <Title name={name} value={value} />
        <ToggleAccordion isOpen={isOpen} />
      </div>
      <div className="collapsible">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 1, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 1, height: 0 }}
            >
              <div className="collapsible--one-col">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default FlexFlowShorthand;
