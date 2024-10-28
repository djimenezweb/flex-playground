import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ToggleAccordion = ({ isOpen }) => {
  return (
    <motion.button
      className="toggle-accordion"
      animate={{ rotate: isOpen ? 180 : 0 }}
    >
      <ChevronDown size={16} />
    </motion.button>
  );
};
export default ToggleAccordion;
