import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
import drawerStateAction from "../../actions/drawerActions/drawerAction";
import { makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AvatarHolder from "../atomic/avatar";
import Button from "@material-ui/core/Button";

/* eslint-disable no-console */
const useStyles = makeStyles(() => ({
  paperdiv: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "23vw",
    backgroundColor: "#5DAAE0",
  },
  menuButton: {
    width: "70%",
    height: "100%",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    height: "7.5%",
  },
  dividerColor: {
    backgroundColor: "#90C5EA",
  },
  iconButton: {
    width: "13%",
    height: "100%",
    borderRadius: 0,
    margin: 0,
    padding: 0,
  },
  headerTitle: {
    display: "flex",
    justifyContent: "start",
    flexGrow: 1,
    alignItems: "center",
    color: "white",
    height: "100%",
    width: "20%",
    padding: 0,
    minWidth: 0,
    fontSize: "1.3rem",
  },
  list: {
    width: "100%",
    height: "8%",
    color: "white",
  },
  listtext: {
    textAlign: "left",
    fontSize: "1.2rem",
  },
  listicon: {
    color: "white",
  },
  upperPart: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1.1,
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "8%",
    width: "99%",
    marginRight:"10%"
  },
  avatarHolder: {
    height: "90%",
    width: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    width: "20%",
    height: "50%",
    display: "flex",
    flexGrow: 1,
    justifyContent: "end",
    alignItems: "center",
  },
  listbox:{
    height:"8%",
    width:"100%"
  }
}));
function OpenDrawer() {
  const classes = useStyles();
  const disp = useDispatch();
  const isOpen = useSelector((state) => {
    return state.DrawerReducer.initial;
  });

  const closeDrawer = () => {
    disp(drawerStateAction());
  };

  var name = "John Smith";
  // const list = ()=>{
  //     <List>
  //     {['Switch Back to Enterprise UI'].map((text, index) => (
  //       <ListItem button key={text}>
  //         <ListItemIcon><ArrowBackIcon/></ListItemIcon>
  //         <ListItemText primary={text} />
  //       </ListItem>
  //     ))}
  //   </List>
  // }

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={isOpen}
      onClose={closeDrawer}
    >
      <Paper className={classes.paperdiv} square="true">
        <div className={classes.upperPart}>
          <div className={classes.drawerHeader}>
            <IconButton
              style={{ color: "white" }}
              aria-label="open drawer"
              onClick={closeDrawer}
              className={classes.iconButton}
            >
              <MenuIcon
                className={classes.menuButton}
                style={{ color: "white" }}
              />
            </IconButton>
            <Typography variant="h4" className={classes.headerTitle}>
              MENU
            </Typography>
          </div>
          <Divider classes={{ root: classes.dividerColor }} />
          <div className={classes.listbox}>
            <List className={classes.list} onClick={closeDrawer}>
              {["Switch Back to Enterprise UI"].map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon className={classes.listicon}>
                    <ArrowBackIcon />
                  </ListItemIcon>
                  <ListItemText className={classes.listtext} primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.avatarHolder}>
            <AvatarHolder />
          </div>
          <Typography variant="h6" style={{color:"white",fontSize:"1.25rem"}}>{`${name}`}</Typography>
          <div className={classes.loginBtn}>
            <Button
              variant="contained"
              style={{
                height: "100%",
                width: "30%",
                borderRadius:"1.5rem",
                backgroundColor:"#2D4250",
                color:"white",
                marginRight: "0.8rem",
                fontSize: "0.8rem",
                minWidth: "7vw",
                minHeight:"4.8vh"
              }}
            >
              LOGOUT
            </Button>
          </div>
        </div>
      </Paper>
    </Drawer>
  );
}
export default OpenDrawer;
