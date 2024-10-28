export function containerReducer(state, action) {
  switch (action.type) {
    case "update-container": {
      return { ...state, ...action.style };
    }
    case "reset-container": {
      return { ...action.initial };
    }
  }
}
