const DrawerReducer = (state = { initial: false}, action) => {
    switch (action.type) {
      case "HAMBURGER_CLICKED":
        return { ...state, initial: !state.initial };
    default:
        return state;
    }
  };
export default DrawerReducer;