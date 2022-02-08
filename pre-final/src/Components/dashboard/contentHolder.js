import React from "react";
import { makeStyles } from "@material-ui/core";
import Tabs from "./tabs";
import FreedaDrawer from "../drawer/freedaDrawer";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import { useEffect, useState } from "react";
import getDataBtnAction from "../../actions/getdummyData";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./HomePage";
import Fab from "@material-ui/core/Fab";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import {
  nextPageAction,
  previousPageAction,
  thisButtonClicked,
} from "../../actions/pagenationAction";

const useStyles = makeStyles((theme) => ({
  mainContaintOuter: {
    width: "100%",
    height: "98.5%",
    display: "flex",
    flexDirection: "column",
  },
  cardFav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: "0",
    height: "2rem",
    position: "absolute",
    zIndex: "0",
    width: "95%",
    top: "54.5%",
  },
  content: {
    flexGrow: 1,
    //border:"1px solid red",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: "0",
    height: "100%",
  },
  contentShift: {
    //border:"1px solid white",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: "23%",
  },
  biggerdiv: {
    height: "100%",
    width: "100%",
  },
  fabIsActive: {
    height: "2rem",
    width: "2rem",
    backgroundColor: "#5DAAE0",
  },
  fabIsDisabled: {
    width: "2rem",
    height: "2rem",
  },
}));
function ContaintHolder() {
  const disp = useDispatch();
  const classes = useStyles();

  const isOpen = useSelector((state) => {
    return state.FreedaDrawerReducer.initial;
  });

  const pageNum = useSelector((state) => {
    return state.DummyData.pageNum;
  });

  const totalPage = useSelector((state) => {
    return state.DummyData.totalPage;
  });

  useEffect(() => {
    disp({ type: "GET_FETCH_DATA" });
  }, []);

  const loadNextPage = () => {
    if (pageNum < totalPage) {
      disp({ type: "GET_FETCH_DATA" });
      disp(nextPageAction());
    }
  };

  const loadPrevPage = () => {
    if (pageNum > 0) {
      disp(previousPageAction());
    }
  };

  var responseData = useSelector((state) => {
    return state.DummyData.initial;
  });

  return (
    <div className={classes.biggerdiv}>
      <FreedaDrawer />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isOpen,
        })}
      >
        <div className={classes.mainContaintOuter}>
          <Tabs />
          <Homepage data={responseData && responseData} />
        </div>
        <div class={classes.cardFav}>
          <Fab
            onClick={loadPrevPage}
            disabled={pageNum==0}
            className={pageNum==0?classes.fabIsDisabled:classes.fabIsActive}
            style={{backgroundColor:pageNum==0?"transparent":""}}
          >
            <NavigateBeforeIcon style={{ color: "#B9BEC6" }} />
          </Fab>
          <Fab
            onClick={loadNextPage}
            disabled={pageNum==totalPage}
            className={pageNum==totalPage?classes.fabIsDisabled:classes.fabIsActive}
            style={{backgroundColor:pageNum==totalPage?"transparent":""}}
          >
            <NavigateNextIcon style={{ color: "#B9BEC6" }} />
          </Fab>
        </div>
      </main>
    </div>
  );
}
export default ContaintHolder;
