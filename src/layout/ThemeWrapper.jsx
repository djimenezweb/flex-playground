import { useTheme } from "../providers/theme/useTheme";

const ThemeWrapper = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <div className={isDark ? "theme-wrapper dark" : "theme-wrapper"}>
      {children}
    </div>
  );
};
export default ThemeWrapper;
