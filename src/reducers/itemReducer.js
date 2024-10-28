import { nanoid } from "nanoid";
import { DEFAULT_ITEM_STYLE } from "../config/initial-states";

export function itemReducer(state, action) {
  switch (action.type) {
    case "update-item": {
      const nextItems = state.map((item) => {
        if (item.id === action.id) {
          return { ...item, style: { ...item.style, ...action.style } };
        } else {
          return item;
        }
      });
      return nextItems;
    }

    case "update-all": {
      const nextItems = state.map((item) => ({
        ...item,
        style: { ...item.style, ...action.style },
      }));
      return nextItems;
    }

    case "content-item": {
      const nextItems = state.map((item) => {
        if (item.id === action.id) {
          return { ...item, content: action.content };
        } else {
          return item;
        }
      });
      return nextItems;
    }

    case "content-all": {
      const nextItems = state.map((item) => ({
        ...item,
        content: action.content,
      }));
      return nextItems;
    }

    case "add-item": {
      let commonStyles = {};

      if (state.length > 0) {
        const common = { ...state[0].style };
        for (let i = 1; i < state.length; i++) {
          for (let key in common)
            if (
              !(key in state[i].style) ||
              state[i].style[key] !== common[key]
            ) {
              delete common[key];
            }
        }
        commonStyles = { ...common };
      }
      const nextItems = [
        ...state,
        {
          id: nanoid(6),
          content: state.length + 1,
          style: { ...DEFAULT_ITEM_STYLE, ...commonStyles },
        },
      ];
      return nextItems;
    }

    case "delete-item": {
      const filteredItems = state.filter((item) => item.id !== action.id);
      const nextItems = filteredItems.map((item, index) => ({
        ...item,
        content: Number(item.content) ? index + 1 : item.content,
      }));

      return nextItems;
    }

    case "reset-item": {
      const nextItems = state.map((item) => {
        if (item.id === action.id) {
          return { ...item, style: { ...DEFAULT_ITEM_STYLE } };
        } else {
          return item;
        }
      });
      return nextItems;
    }

    case "reset-all": {
      return action.initial;
    }
  }
}
