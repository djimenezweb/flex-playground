import { useContext } from "react";
import { MenuContext } from "./MenuContext";

export function useMenu() {
  return useContext(MenuContext);
}
