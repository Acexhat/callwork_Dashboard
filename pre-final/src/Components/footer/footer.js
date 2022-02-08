import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import FooterIcon1 from "../../assets/images/Symbol 255 – 1.svg";
import FooterIcon2 from "../../assets/images/Symbol 254 – 1.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    //height: "2.5vh",
    //paddingBottom: "0.1vh",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div style={{ marginLeft: "1.19vw" }}>
        <Typography style={{fontSize:"0.85rem",color:"#B9BEC6"}}>Viewing 1 - 5 of 12</Typography>
      </div>
      <div style={{marginLeft:"8vw"}}>
        <img
          style={{ padding: ".1vw", width: "0.57rem" }}
          src={FooterIcon1}
          alt="Icon"
        />
        <img
          style={{ padding: ".1vw", width: "0.57rem" }}
          src={FooterIcon2}
          alt="Icon"
        />
        <img
          style={{ padding: ".1vw", width: "0.57rem" }}
          src={FooterIcon2}
          alt="Icon"
        />
      </div>
      <div style={{ marginRight: "1.19vw" }}>
        <Typography style={{fontSize:"0.85rem",color:"#B9BEC6"}}>
          © Copyright 2018 HighRadius. All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;