import "./styles.css";
import { ThemeProvider } from "./providers/theme/ThemeProvider";
import { MenuProvider } from "./providers/menu/MenuProvider";
import ThemeWrapper from "./layout/ThemeWrapper";
import Main from "./layout/Main";

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <MenuProvider>
          <Main />
        </MenuProvider>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
