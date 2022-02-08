import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import freedaBtnAction from "../../actions/freedaBtn";
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import flippedFreeda from '../../assets/images/flippedFreeda.png';
const useStyles = makeStyles((theme) => ({
    root:{
      "& .MuiDrawer-paper":{
        display: "flex",
        flexDirection: "column",
        marginTop:"4.3%",
        height: "88%",
        width: "20%",
        backgroundColor: "#2D4250",
        borderLeft:"none",
        borderTop:"0.1vw solid #FC7500"
      },
     root:{
        backgroundColor:"red"
      },
      "& .MuiAvatar-root":{
        width:"2rem",
        height:"2rem"
      },
      "& .MuiListItemAvatar-root":{
        minWidth:"20%"
      },
      "& .MuiListItem-root":{
        padding: "0.5rem 1rem 0.5rem 1rem",
        color:"#B9BEC6",
        fontSize:"0.5rem"
      },
      "& .MuiList":{
        padding:0,
      },
    },
    header:{
      display:"flex",
    //  / border:"1px solid white",
      height:"6.5%",
      maxWidth:"100%",
      justifyContent:"space-between",
      alignItems:"center",
      margin:"0.5rem 0.6rem 0 0.8rem"
    }
}));
function FreedaDrawer() {
  const classes = useStyles();
  const disp = useDispatch();
  const isOpen = useSelector((state) => {
    return state.FreedaDrawerReducer.initial;
  });
  const handleDrawerClose = () => {
    disp(freedaBtnAction());
  };

  const data = [
    { compName: "Walmart USA", compNum: 4435434232 },
    { compName: "Walmart Asia", compNum: 3645344343 },
    { compName: "Walmart Malaysia", compNum: 265464543 },
  ];

  return (
    <>
    {/* <Divider classes={{ root: classes.dividerColor }} orientation="vertical" /> */}
      <Drawer variant="persistent" anchor="right" open={isOpen} classes={{root:classes.root}}> 
        <div className={classes.header}>
          <Typography style={{color:"#B9BEC6"}}>FREEDA</Typography>
          <IconButton onClick={handleDrawerClose} style={{padding:0}}>
            <CloseIcon style={{color:"#B9BEC6"}}/>
          </IconButton>
        </div>
        <List classes={{root:classes.root}}>
          <ListItem>
            <ListItemAvatar>
            <Avatar src={flippedFreeda}/>
          </ListItemAvatar>
            <ListItemText primary={<Typography style={{fontSize:"0.9rem"}}>Hi John,<br/> how can I help you?</Typography>} />
          </ListItem>
          <ListItem>
            <ListItemText primary={<Typography style={{fontSize:"0.9rem",width:"90%",textAlign:"right"}}>Pull up account walmart</Typography>} />
            <ListItemAvatar>
            <Avatar alt="ME" src="me.jpg" style={{backgroundColor:"#5DAAE0"}}/>
          </ListItemAvatar>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={flippedFreeda}/>
            </ListItemAvatar>
            <ListItemText primary={<Typography style={{fontSize:"0.9rem"}}>I found 3 customers by name Walmart, which one should I pull up?</Typography>} />
          </ListItem>
          {data.map((elem) => (
              <ListItem key={elem.index} style={{padding:0}}>
                <ListItemText primary={<Typography style={{display:"flex",justifyContent:"space-between",fontSize:"0.9rem",width:"80%",margin:"0 2rem 0 2rem",backgroundColor:"#37576D",borderRadius:"0.3rem",padding:"0.25rem"}}>
                  <span style={{fontWeight:"bold",color:"#fff"}}>{elem.compName}</span>{elem.compNum}
                </Typography>}/>
              </ListItem>
            ))}
          <ListItem>
            <ListItemText primary={<Typography style={{fontSize:"0.9rem",width:"90%",textAlign:"right"}}>Okey, select Walmart Asia</Typography>} />
            <ListItemAvatar>
            <Avatar alt="ME" src="me.jpg" style={{backgroundColor:"#5DAAE0"}}/>
          </ListItemAvatar>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
export default FreedaDrawer;
