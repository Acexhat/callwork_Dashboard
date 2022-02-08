import React from "react";
import { makeStyles } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiTab-root": {
      minWidth: "7vw",
      padding: "1vw",
      paddingBottom: "0",
      maxWidth: "18vw",
      minHeight: "1vw",
      fontSize: "0.85rem",
    },
    "& .PrivateTabIndicator-root-47": {
      marginBottom: "0.45rem",
    },
  },
  outerDiv: {
    display: "flex",
    height: "8%",
    width: "100%",
    paddingTop: "0.3rem",
    paddingRight: "none",
  },
  tabs: {
    display: "flex",
    height: "100%",
    width: "40%",
  },
  summaryinfo: {
    display: "flex",
    height: "100%",
    width: "45%",
    paddingTop: "0.1rem",
  },
  indicator: {
    backgroundColor: "white",
    background: "3px solid red",
  },
  sec1: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    marginLeft: "1rem",
  },
  dividerColor: {
    backgroundColor: "#5DAAE033",
    width: "0.08rem",
  },
  caption: {
    color: "#5DAAE0BF",
    fontSize: "0.8rem",
  },
  dataHolder: {
    marginTop: "0.2rem",
  },
}));
function TabBar() {
  const classes = useStyles();
  const toCall = 12;
  const finsihedCall = 12;
  var [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var searchInput = useSelector((state) => {
    return state.SearchingReducer.initial;
  });

  var overviewData = useSelector((state) => {
    return state.DummyData.overViewData;
  });

  var totalSearchResult = useSelector((state) => {
    return state.SearchingReducer.searchData.total;
  });

  value = searchInput.length ? 2 : 0;


  var totalPastDueProcessed = Math.ceil(overviewData.totalPastDueProcessed/100);
  var totalPastDueAmount = Math.ceil(overviewData.totalPastDueAmount/ 1000);


  return (
    <div className={classes.outerDiv}>
      <div className={classes.tabs}>
        <Tabs
          value={value}
          classes={{ root: classes.root, indicator: classes.indicator }}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              height: "1px",
              maxHeight: "2px",
              marginLeft: "0.5rem",
            },
          }}
        >
          <Tab
            style={{
              color:
                searchInput.length > 0
                  ? "#5DAAE0BF"
                  : value % 2 == 0
                  ? "#B9BEC6"
                  : "#5DAAE0BF",
            }}
            label={`TO CALL LIST (${toCall})`}
          />
          <Tab
            style={{
              color:
                searchInput.length > 0
                  ? "#5DAAE0BF"
                  : value
                  ? "#B9BEC6"
                  : "#5DAAE0BF",
            }}
            label={`FINISHED CALL LIST (${finsihedCall})`}
          />
          {searchInput.length > 0 ? (
            <Tab
              style={{
                color: "#B9BEC6",
              }}
              label={`SEARCH RESULT (${totalSearchResult})`}
            />
          ) : (
            ""
          )}
        </Tabs>
      </div>
      <div style={{ display: "flex", flexGrow: 1 }} />
      <div className={classes.summaryinfo}>
        <div className={classes.sec1}>
          <Typography className={classes.dataHolder}>
            <span style={{ fontSize: "1.3rem", color: "#ffffff" }}>
              {overviewData.processedCustomerCount}
              <span style={{ color: "#B9BEC6" }}>/</span>
            </span>
            <span style={{ fontSize: "0.9rem", color: "#B9BEC6" }}>
              {overviewData.totalCustomerCount}
            </span>
          </Typography>
          <Typography className={classes.caption}>
            Total Customer Called
          </Typography>
        </div>
        <Divider
          classes={{ root: classes.dividerColor }}
          orientation="vertical"
        />
        <div className={classes.sec1}>
          <Typography className={classes.dataHolder}>
            <span style={{ fontSize: "1.3rem", color: "#ffffff" }}>
              {overviewData.completedCallingMinutes}
              <span style={{ fontSize: "0.9rem" }}>hr</span> 2
              <span style={{ fontSize: "0.9rem" }}>min</span>
              <span style={{ color: "#B9BEC6" }}>/</span>
            </span>
            <span style={{ fontSize: "0.9rem", color: "#B9BEC6" }}>
              {overviewData.expectedCallingMinutes}hr
            </span>
          </Typography>
          <Typography className={classes.caption}>
            Total Time Spent on Call
          </Typography>
        </div>
        <Divider
          classes={{ root: classes.dividerColor }}
          orientation="vertical"
        />
        <div className={classes.sec1}>
          <Typography className={classes.dataHolder}>
            <span style={{ fontSize: "1.3rem", color: "#ffffff" }}>
            {totalPastDueProcessed}$
              <span style={{ color: "#B9BEC6" }}>/</span>
            </span>
            <span style={{ fontSize: "0.9rem", color: "#B9BEC6" }}>
              {totalPastDueAmount}M
            </span>
          </Typography>
          <Typography className={classes.caption}>
            Total Past Due Touched
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default TabBar;
