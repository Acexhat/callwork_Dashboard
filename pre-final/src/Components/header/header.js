import React from "react";
import { makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import { ReactComponent as Freeda } from "../../assets/images/freeda.svg";
import freedaBtnAction from "../../actions/freedaBtn";
import { useDispatch, useSelector } from "react-redux";
import TopHeaderButtonLeft from "../../assets/images/Symbol 531 – 3.svg";
import TopHeaderButtonRight from "../../assets/images/Symbol 534 – 1.svg";
import SearchBar from './searchButton';
const useStyles = makeStyles(() => ({
  root: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "4rem",
      border: "0.12rem solid #5DAAE0",
      fontSize: "1rem",
      width: "72%",
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: "2.8%",
    },
  },
  headerOuter: {
    width: "100%",
    height: "7%",
    // border:"1px solid white",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  leftSection: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexGrow: 1,
    marginLeft: "0.8rem",
  },
  rightSection: {
    display: "flex",
    // justifyContent:"start",
    alignItems: "center",
    flexGrow: "1",
    //border:"1px solid red",
    justifyContent: "end",
    marginRight: "0.4rem",
    height: "100%",
    maxWidth: "35%",
  },
  headerTitle: {
    color: "#5DAAE0",
    fontSize: " 1.85rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "1.5rem",
  },
  buttonFreeda:{
    minWidth:"unset",
    borderRadius: "4rem",
    backgroundColor: "#FC7500",
    color: "white",
    height: "65%",
    width: "25%",
    paddingLeft: "1rem",
    display: "flex",
    justifyContent: "center",
    marginLeft: "1rem",
  },
  headerTopButton: {
    height: "2.314vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-start",
    background: "#FC7500 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "0px 0px 0.577rem 0.577rem",
    opacity: "1",
    marginRight:"10vw"
  },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#9BA3AD",
    },
  },
  freedasvg: {
    border: "3px solid white",
  },
  myIconSizeMedium: {
    "& > *:first-child": {
      fontSize: "inherit",
    },
    "& .MuiButton-endIcon": {
      marginRight: "-6px",
    },
  },
  label: {
    "& .MuiButton-label": {
      marginRight: "-15px",
    },
  },
}));
function Header() {
  const classes = useStyles();
  const disp = useDispatch();

  const freedaBtnClicked = () => {
    disp(freedaBtnAction());
  };
  return (
    <div className={classes.headerOuter}>
      <div className={classes.leftSection}>
        <ArrowBackIcon style={{ color: "white", fontSize: "1.8rem" }} />
        <Typography className={classes.headerTitle}>Call Workboard</Typography>
      </div>
      <div className={classes.headerTopButton}>
        <img
          src={TopHeaderButtonLeft}
          alt="topbutton"
          style={{ height: "2.22vh", width: "0.54vw" }}
        />
        <Typography style={{fontSize:"0.6rem",color:"white"}}>AUTONOMOUS RECEIVABLES</Typography>
        <img
          src={TopHeaderButtonRight}
          alt="topbutton"
          style={{ height: "2.22vh", width: "0.54vw" }}
        />
      </div>
      <div className={classes.rightSection}>
        <SearchBar />
        <Button
          variant="contained"
          className={classes.buttonFreeda}
          endIcon={<Freeda style={{ transform: "scale(0.7)" }} />}
          classes={{ label: classes.label }}
          onClick={freedaBtnClicked}
        >
          FREEDA
        </Button>
      </div>
    </div>
  );
}
export default Header;
