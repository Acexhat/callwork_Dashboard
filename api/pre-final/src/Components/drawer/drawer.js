import { makeStyles } from "@material-ui/core";
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from "react-redux";
import drawerStateAction from '../../actions/drawerActions/drawerAction';
import OpenDrawer from './openDrawer';
import AvatarHolder from '../atomic/avatar'

const useStyles = makeStyles(()=>({
    root: {
        "& .MuiAvatar-root": {
            height:"40%",
            width:"40%",
            border:"1px solid black"
        }
      },
    sideDrawer:{
        backgroundColor:"#5DAAE0 ",
        display:"flex",
        flexDirection:"column",
        opacity:"100%",
        width:"3.7vw",
        height:"100vh",
        boxShadow: "0.278vw 0 0.556vw #00000033",
    },
    menuButton: {
        width:"70%",
        height:"100%",
    },
    iconButton:{
        width:"90%",
        height:"7.5%",
        borderRadius:0,
        margin:0,
        padding:0,
    },
    dividerColor:{
        backgroundColor:"#90C5EA"
    },
    // root:{
       
    // },
    avatarbox:{
        height:"8%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:"7.5%"
    },
    upper:{
        display:"flex",
        flexDirection:"column",
        flexGrow:1.1,
    },
    
}));
function SideDrawer(){
    const dispatch = useDispatch();

    const handleDrawerOpen = ()=>{
        dispatch(drawerStateAction());
    }
    
    const drawerState = useSelector((state) => {
        return state.DrawerReducer.initial;
      });
      /* eslint-disable no-console */
    console.log("drawer state:::", drawerState);

    const classes = useStyles();
    return(
        <div>
        <div className={classes.sideDrawer}>
          <div className={classes.upper}>
            <IconButton
            style={{color:"white"}}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={classes.iconButton}
            >
                <MenuIcon className={(classes.menuButton)}/>
            </IconButton>
            <Divider classes={{root: classes.dividerColor}} />
          </div>
          <div className={classes.avatarbox}>
              <AvatarHolder />
          </div>
        </div>
        <OpenDrawer/>
        </div>
    );
}
export default SideDrawer;