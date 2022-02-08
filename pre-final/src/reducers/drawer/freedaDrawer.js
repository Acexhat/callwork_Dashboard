const FreedaDrawerReducer = (state = { initial: false}, action) => {
    switch (action.type) {
      case "FREEDA_BTN_CLICKED":
        return { ...state, initial: !state.initial };
    default:
        return state;
    }
  };
export default FreedaDrawerReducer;