const DummyData = (
  state = {
    initial: [],
    pageNum: 0,
    loadingPage:-1,
    totalPage:0,
    summaryData: [],
    overViewData: [],
  },
  action
) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, initial: [...state.initial, ...action.payload] };
    case "OVERVIEW_DATA":
      return { ...state, overViewData: action.payload };
    case "TRIGGER_NEXT_PAGE":
      return { ...state, pageNum: state.pageNum + 1 };
    case "TRIGGER_PREVIOUS_PAGE":
      return { ...state, pageNum: state.pageNum - 1 };
      case "SET_LOADING_PAGE":
      return { ...state, loadingPage: state.loadingPage + 1 };
      case "SET_TOTAL_PAGE":
        console.log(action.payload);
      return { ...state, totalPage: action.payload };
    case "GET_SUMMARY_DATA":
      return { ...state, summaryData: action.payload };
    default:
      return state;
  }
};
export default DummyData;
