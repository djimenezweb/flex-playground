import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../providers/theme/useTheme";

const ToggleTheme = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      title="Toggle theme"
      className="menu__icon"
      onClick={toggleTheme}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={`theme-${isDark}`}
          style={{ originY: "150%" }}
          initial={{ rotate: isDark ? -90 : 90 }}
          animate={{ rotate: 0 }}
          exit={{ rotate: isDark ? -90 : 90 }}
          transition={{ type: "tween", ease: "easeInOut" }}
        >
          {isDark ? <Moon size={24} /> : <Sun size={24} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
export default ToggleTheme;
