import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Highchart from "../charts/Highchart";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { Typography } from "@material-ui/core/";
import LoadingComponent from '../atomic/loadingComponent';
const useStyles = makeStyles(() => ({
  CardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "7.5vh",
    color: "#B4BCC0",
    fontSize: "1.26rem",
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  highchartHolder:{
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
}));

export default function FirstCard() {
  
  var summaryData = useSelector((state) => {
    return state.DummyData.summaryData;
  });


  console.log("Summary Data-------------",summaryData);

  var searchInput = useSelector((state) => {
    return state.SearchingReducer.initial;
  });

  const freedaIsOpen = useSelector((state) => {
    return state.FreedaDrawerReducer.initial;
  });

  if (searchInput.length > 0) {
    summaryData = null;
  }
  var bucketNames = ["0-30", "31-60", "61-90", "91-120", "121-150"];

  var summaryUpcominData =
    summaryData && summaryData.upcomingPastDueBucketDocumentAmount;

  let totalAmount = 0;
  totalAmount = summaryData?.upcomingOpenAmount;
  for (let i = 0; i < 6; i++) {
    totalAmount += summaryUpcominData && summaryUpcominData[i];
  }

  const classes = useStyles();
  return (
    <div style={{ height: "inherit" }}>
      <Card style={{ height: "inherit", background: "#273D49BF" }}>
        <div className={classes.CardHeader}>
          {summaryData ? (
            <CardHeader
              className={classes.CardHeader}
              title={
                <Typography variant="cardTitle" style={{ fontWeight: "bold" }}>
                  Remaining Balance Summary
                </Typography>
              }
            />
          ) : (
            <Skeleton variant="text" height={"80%"} width={"50%"} style={{marginLeft:"2%",backgroundColor: "#42535F"}} />
          )}
        </div>
        <div className={classes.CardContent}>
          <CardContent>
            <div
              style={{
                height: "27vh",
                width: freedaIsOpen ? "20vw" : "27.658vw",
              }}
              className={classes.highchartHolder}
            >
              <Highchart
                id={Math.random().toString()}
                data={bucketNames}
                chartData={summaryData?.upcomingPastDueBucketDocumentAmount}
                currentDueData={summaryData?.upcomingOpenAmount}
                totalData={totalAmount}
              />{summaryData?"":(<LoadingComponent/>)}
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
