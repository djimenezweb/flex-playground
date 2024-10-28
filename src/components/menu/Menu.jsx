import { useEffect, useRef, useState } from "react";
import {
  Save,
  FolderOpen,
  Github,
  FileJson2,
  FileQuestion,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Code from "./code/Code";
import ToggleTheme from "./ToggleTheme";
import LoadMenu from "./LoadMenu";
import SaveMenu from "./SaveMenu";
import About from "../about/About";
import { useMenu } from "../../providers/menu/useMenu";

const Menu = ({
  dispatchContainer,
  initialContainerStyleRef,
  dispatchItems,
  initialItemsRef,
  flexContainerStyle,
  flexItems,
}) => {
  const { isMenuOpen, menuScreen, handleMenuScreen, closeMenu, fullExit } =
    useMenu();

  const [savePlaceholder, setSavePlaceholder] = useState("");
  const [menuWidth, setMenuWidth] = useState(0);

  const menuRef = useRef(null);

  useEffect(() => {
    setMenuWidth(menuRef?.current?.clientWidth);
  }, []);

  const DURATION = 0.5;

  const variants = {
    initial: {
      width: menuWidth,
      height: "0px",
      opacity: 0,
    },
    animate: {
      width: "50vw",
      height: "auto",
      opacity: 1,
      transition: {
        duration: DURATION,
        type: "tween",
        ease: "easeInOut",
        opacity: { duration: DURATION / 2, delay: DURATION * 0.75 },
      },
    },
    exit: (custom) => ({
      width: custom ? menuWidth : "50vw",
      height: "0px",
      opacity: 0,
    }),
  };

  return (
    <motion.div
      animate={{
        boxShadow: isMenuOpen
          ? "0 4px 6px -1px rgba(0 0 0 / 0.2), 0 2px 4px -2px rgba(0 0 0 / 0.2)"
          : "0 4px 6px -1px rgba(0 0 0 / 0), 0 2px 4px -2px rgba(0 0 0 / 0)",
      }}
      className="menu"
      ref={menuRef}
      onClick={(e) => e.stopPropagation()}
    >
      <AnimatePresence custom={fullExit.current}>
        {isMenuOpen && (
          <motion.div
            custom={fullExit.current}
            key={menuScreen}
            className="menu__screen-container"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: DURATION,
              type: "tween",
              ease: "easeInOut",
              opacity: { duration: DURATION / 2, delay: 0 },
            }}
          >
            <div className="padding">
              {menuScreen === "code" && (
                <Code
                  flexContainerStyle={flexContainerStyle}
                  flexItems={flexItems}
                />
              )}
              {menuScreen === "load" && (
                <LoadMenu
                  dispatchContainer={dispatchContainer}
                  initialContainerStyleRef={initialContainerStyleRef}
                  dispatchItems={dispatchItems}
                  initialItemsRef={initialItemsRef}
                  setSavePlaceholder={setSavePlaceholder}
                  closeMenu={closeMenu}
                />
              )}
              {menuScreen === "save" && (
                <SaveMenu
                  flexContainerStyle={flexContainerStyle}
                  flexItems={flexItems}
                  setSavePlaceholder={setSavePlaceholder}
                  savePlaceholder={savePlaceholder}
                  closeMenu={closeMenu}
                />
              )}
              {menuScreen === "about" && <About />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="menu__buttons-container">
        <ToggleTheme />

        <button
          title="Load"
          className={
            menuScreen === "load"
              ? "menu__icon menu__icon--active"
              : "menu__icon"
          }
          onClick={() => handleMenuScreen("load")}
        >
          <FolderOpen size={24} />
        </button>

        <button
          title="Save"
          className={
            menuScreen === "save"
              ? "menu__icon menu__icon--active"
              : "menu__icon"
          }
          onClick={() => handleMenuScreen("save")}
        >
          <Save size={24} />
        </button>
        <button
          title="Get CSS code"
          className={
            menuScreen === "code"
              ? "menu__icon menu__icon--active"
              : "menu__icon"
          }
          onClick={() => handleMenuScreen("code")}
        >
          <FileJson2 size={24} />
        </button>

        <button
          title="About"
          className={
            menuScreen === "about"
              ? "menu__icon menu__icon--active"
              : "menu__icon"
          }
          onClick={() => handleMenuScreen("about")}
        >
          <FileQuestion size={24} />
        </button>

        <a
          href="https://github.com/djimenezweb/flex-playground"
          target="_blank"
          title="Repository"
          className="menu__icon"
        >
          <Github size={24} />
        </a>
      </div>
    </motion.div>
  );
};
export default Menu;
