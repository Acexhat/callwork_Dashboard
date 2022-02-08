import axios from 'axios'
import {PAGE_SIZE} from '../Utils/constants';

export const fetchSearchedData=(custName)=>{
    return axios({
        method:"post",
        url:"http://localhost:4000/esCustomerSearch.do",
        data:{
            data:{
                customerName:`${custName}`,
            },
        },
    })
}


export const fetchData=(pageNum)=>{
    return axios.post(
      `http://localhost:4000/getUserCallWorkBook.do?pageNumber=${pageNum}&pageSize=${PAGE_SIZE}`
    )
};

export const fetchSummaryData=()=>{
  return axios.post(
    `http://localhost:4000/getUpcomingSummary.do`
  )
};