import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  getSearchData,
  invokeSearchApiCall,
} from "../../actions/searchBarAction";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "4rem",
      border: "0.12rem solid #5DAAE0",
      fontSize: "1rem",
      width: "65%",
      color: "white",
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: 0,
    },
    "& .MuiOutlinedInput-adornedEnd": {
      paddingRight: 0,
    },
    "& .MuiInputAdornment-positionStart": {
      backgroundColor: "#5DAAE0",
      height: "2rem",
      width: "3rem",
      borderRadius: "4rem",
    },
    "& .MuiOutlinedInput-input": {
      padding: "2.8%",
    },
    "& .MuiSvgIcon-root": {
      backgroundColor: "none",
    },
  },

  searchbarinput: {
    width: "40%",
    height: "4.2vh",
    border: "0.1vh solid #14AFF1",
    borderRadius: "2rem",
    paddingLeft: "2vh",
    backgroundColor: "transparent",
    outline: 0,
    color: "#ffff",
  },
  searchBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    flexGrow: 1,
    borderRadius: "2rem",
    height: "2.2rem",
  },
}));

var SearchBarbtn = () => {
  const disp = useDispatch();

  // implemented debouncing concept
  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // function to call when your type something on search bar with delay of 2sec
  const getFunction = debounce(() => disp(invokeSearchApiCall()), 500);

  const setseachdata = (event) => {
    disp(getSearchData(event.target.value));
  };

  const classes = useStyles();
  return (
    <TextField
      placeholder="Search Name"
      variant="outlined"
      onChange={setseachdata}
      onKeyUp={getFunction}
      className={classes.searchBar}
      classes={{ root: classes.root }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ color: "white", marginLeft: "0.2rem" }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <ArrowDropDownIcon style={{ color: "#14AFF1" }} />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
};

export default SearchBarbtn;
