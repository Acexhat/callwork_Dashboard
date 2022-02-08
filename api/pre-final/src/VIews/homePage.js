import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Drawer from '../Components/drawer/drawer'
import MainDashboard from '../Components/dashboard/mainDashboard';

function HomePage(){

    const useStyles = makeStyles(()=>({
        homePage:{
            height:'100vh',
            width:'100vw',
            display:"flex",
            flexDirection:"row",
            backgroundColor:"#3E4E63",
            border: 0,
        },
    }));
    const classes = useStyles();
    return(

       <div className={classes.homePage}>
        <Drawer/>
        <MainDashboard/>
       </div>
    )
}
export default HomePage;