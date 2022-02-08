import React from 'react';
import { makeStyles } from "@material-ui/core";
import Header from '../header/header';
import Footer from '../footer/footer';
import ContaintHolder from '../dashboard/contentHolder';
const useStyles=makeStyles(()=>({
    fulldiv:{
        border:0,
        display:"flex",
        flexDirection:"column",
        width:"100vw",
        height:"100vh",
        justifyContent:"space-between",
        alignItems:"center",
        padding:0,
        margin:0
    },
}));

function MainDashboard(){
    const classes = useStyles();
   return(
       <div className={classes.fulldiv}>
           <Header/>
           <ContaintHolder/>
           <Footer/>
       </div>
   );
}
export default MainDashboard;