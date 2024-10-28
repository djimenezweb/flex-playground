import { useEffect, useRef, useState } from "react";
import { MenuContext } from "./MenuContext";

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuScreen, setMenuScreen] = useState(null);
  const fullExit = useRef(false);

  function closeMenu() {
    fullExit.current = true;
    setMenuScreen(null);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.addEventListener("click", closeMenu);
    return () => document.body.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  function handleMenuScreen(screen) {
    fullExit.current = false;
    if (menuScreen === screen) {
      closeMenu();
      return;
    }
    setMenuScreen(screen);
    setIsMenuOpen(true);
  }

  const value = {
    isMenuOpen,
    menuScreen,
    handleMenuScreen,
    closeMenu,
    fullExit,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
