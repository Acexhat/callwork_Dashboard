import React from "react";
import { MY_RENDER_APP } from "./constants";
import CompanyDetailsCard from '../Components/cards/_companyDetailsCard';
import SummaryCard from '../Components/cards/Summary';
import { useDispatch, useSelector } from "react-redux";

//const index=0;

function ComponentGetter(props) {
  const { componentId, data, index } = props;

  const totalPage = useSelector((state) => {
    return state.DummyData.totalPage;
  });

  const pageNum = useSelector((state) => {
    return state.DummyData.pageNum;
  });


  if (componentId === MY_RENDER_APP.FIRST_CARD) {
    return (
      <CompanyDetailsCard data={data[index]} />
    )
  } else if (componentId === MY_RENDER_APP.SIXTH_CARD && totalPage!=pageNum ) {
    return <SummaryCard />;
  }
  else return null;
}

export default ComponentGetter;
