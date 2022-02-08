import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AutorenewIcon from '@material-ui/icons/Autorenew';
const useStyles = makeStyles(() => ({
    renewIcon:{
      zIndex: 1,
      position: "absolute",
      marginBottom:"4%",
      fontSize:"2.5rem",
      color:"#AAB3B8",
    },
    loadinng:{
      zIndex: 1,
      position: "absolute",
     fontSize:"0.8rem",
     color:"#AAB3B8"
    }
  }));
export default function LoadingComponent() {
    const classes = useStyles();
  return (
    <>
      <AutorenewIcon className={classes.renewIcon} />
      <div className={classes.loadinng}>Loading...</div>
    </>
  );
}
