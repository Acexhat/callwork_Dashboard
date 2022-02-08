import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Highchart from "../charts/Highchart";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NotBrokenIcon from "../../assets/images/Broken.svg";
import BrokenIcon from "../../assets/images/Non-broken.svg";
import { useDispatch, useSelector } from "react-redux";
import Divider from "@material-ui/core/Divider";
import Skeleton from "@material-ui/lab/Skeleton";
import LoadingComponent from '../atomic/loadingComponent';

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiCardContent-root": {
      paddingRight: 0,
    },
  },
  CardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "7.5vh",
    color: "#B4BCC0",
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  dividerColor: {
    backgroundColor: "#5DAAE033",
    width: "0.06rem",
    height: "20vh",
    marginTop: "7.5%",
    marginRight: "2%",
  },
  CardIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.5vw",
  },
  highchartHolder:{
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
}));

export default function FirstCard(props) {
  const { data } = props;

  var searchInput = useSelector((state) => {
    return state.SearchingReducer.initial;
  });

  var searchedBucketNames = useSelector((state) => {
    return state.SearchingReducer.searchData.bucketNames;
  });

  const freedaIsOpen = useSelector((state) => {
    return state.FreedaDrawerReducer.initial;
  });

  let cardIcon = null;
  let promicesText = null;

  var customerName;
  var customerNumber;
  var bucketName;
  var dueBucketAmount = [];
  var totalCurrentOpenAmount;
  var currentDueData;
  var totalBrokenPromises;
  var keysToFInd = [];

  // Function to check data and convert data to required fields.

  if (searchInput.length > 0) {
    customerName = data?.customerName;
    customerNumber = data?.accountCustomerNumber;
    bucketName = searchedBucketNames;

    //function to get names of bucketAmount
    for (let i = 1; i <= bucketName.length; i++) {
      keysToFInd.push(`pastdue_bucket${i}_amount`);
    }
    //console.log(data && data["pastdue_bucket1_amount"]);
    for (let i = 0; i < keysToFInd.length; i++) {
      dueBucketAmount.push(data && data[keysToFInd[i]]);
    }
    totalCurrentOpenAmount = data?.pastdue_bucket12_amount;
    currentDueData = data?.current_due;
    totalBrokenPromises = data?.broken_p2P_count;
  } else {
    customerName = data?.customerName;
    customerNumber = data?.customerNumber;
    bucketName = data && data.bucketNames;
    dueBucketAmount = data && data.pastDueBucketDocumentAmount;
    totalCurrentOpenAmount = data && data.totalCurrentOpenAmount;
    currentDueData = data && data.totalCurrentOpenAmount;
    totalBrokenPromises = data && data.totalBrokenPromises;
  }

  // Caluclating TotalAmount
  let totalAmount = 0;
  totalAmount = totalCurrentOpenAmount;
  for (let i = 0; i < dueBucketAmount?.length; i++) {
    totalAmount += dueBucketAmount[i];
  }

  if (freedaIsOpen) {
    bucketName = bucketName.slice(1, 4);
    dueBucketAmount = dueBucketAmount.slice(1, 4);
  }

  if (totalBrokenPromises > 0) {
    cardIcon = BrokenIcon;
    promicesText = "Broken Promises";
  } else {
    cardIcon = NotBrokenIcon;
    promicesText = "No Broken Promises";
  }

  const classes = useStyles();
  return (
    <Card style={{ height: "inherit", background: "#273D49BF" }}>
      <div className={classes.CardHeader}>
        {data ? (
          <CardHeader
            title={
              <Typography variant="cardTitle" style={{ fontWeight: "bold" }}>
                {customerName}
              </Typography>
            }
          />
        ) : (
          <Skeleton
            variant="text"
            animation="wave"
            width={"50%"}
            height={"90%"}
            style={{ marginLeft: "2%", backgroundColor: "#42535F" }}
          />
        )}
        {data ? (
          <Typography variant="cardCustId" style={{ marginRight: "1vw" }}>
            {customerNumber}
          </Typography>
        ) : (
          <Skeleton
            variant="text"
            animation="wave"
            width={"25%"}
            height={"58%"}
            style={{ margin: "2.5% 2% 0 0", backgroundColor: "#42535F" }}
          />
        )}
      </div>
      <div className={classes.CardContent}>
        <CardContent style={{ paddingRight: "0" }}>
          
          <div
            style={{
              height: "27vh",
              width: freedaIsOpen ? "17vw" : "23.658vw",
            }}
            className={classes.highchartHolder}
          >
            
            <Highchart
              id={Math.random().toString()}
              data={bucketName}
              chartData={dueBucketAmount}
              currentDueData={currentDueData}
              totalData={totalAmount}
            />{ data?"":(<LoadingComponent/>)}
          </div>
        </CardContent>
        <Divider className={classes.dividerColor} orientation="vertical" />
        {data ? (
          <div className={classes.CardIcon}>
            <Typography
              variant="brokenPromices"
              style={{
                marginBottom: "0.5rem",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              {totalBrokenPromises > 0 ? totalBrokenPromises : null}
            </Typography>
            <img
              src={cardIcon}
              alt="CardIcon"
              style={{ width: "4.63vw", height: "5.23vh" }}
            />
            <Typography
              variant="promicesText"
              style={{
                width: "4.37vw",
                height: "6.66vh",
                marginTop: "2.5vh",
                textAlign: "center",
                color: "#B4BCC0",
              }}
            >
              {promicesText}
            </Typography>
          </div>
        ) : (
          <Skeleton
            variant="rect"
            animation="wave"
            width= {"3.5rem"}
            height={"7.3rem"}
            style={{ backgroundColor: "#42535F" ,margin:"10% 2.5% 0 0" }}
          />
        )}
      </div>
    </Card>
  );
}
