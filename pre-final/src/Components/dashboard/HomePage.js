import React from "react";
import Render from "../Utility/render";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";

const pageSize = 5;
export default function MainDiv(props) {
  var {data} = props;

  var pageNum = useSelector((state) => {
    return state.DummyData.pageNum;
  });
  
  var searchInput = useSelector((state)=>{
    return state.SearchingReducer.initial;
  });

  var searchedData = useSelector((state)=>{
    return state.SearchingReducer.searchData;
  });

  if(searchInput.length>0){
    console.log("HomePAge::::::::::",searchedData.customer);
    data=searchedData.customer;
  }
  else{
  var idx = pageSize*pageNum+pageSize;
  data =data.slice(idx-pageSize,idx);
  }

  return (
    <div
      style={{
        height: "100%",
        margin: "1rem 0 -1rem 1rem",
        paddingBottom: "0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Render data={data && data} />
    </div>
  );
}
