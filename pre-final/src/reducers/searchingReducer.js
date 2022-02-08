const SearchingReducer = (state = {initial: [],searchData:[]}, action) => {
    switch (action.type) {
      case "SEARCHED_USER_INPUT":
        return { ...state, initial: action.payload };
      case "SEARCH_RESULT_DATA":
        return { ...state, searchData: action.payload };      
    default:
        return state;
    }
  };
export default SearchingReducer;