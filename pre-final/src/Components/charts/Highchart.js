import React, { useEffect } from "react";
import Highcharts from "highcharts";
import { useDispatch, useSelector } from "react-redux";

export default function Highchart(props) {
  var {
    data,
    chartData,
    currentDueData,
    totalData,
  } = props;

  var searchInput = useSelector((state)=>{
    return state.SearchingReducer.initial;
  });

  const renderChart = () => {
    const chart = Highcharts.chart(`container${props.id}`, {
      chart: {
        type: "column",
        backgroundColor: "transparent",
        top:"-20%",
      },
      title: "",
      yAxis: {
        visible: false,
        title: {
          text: "",
        },
        labels: "",
      },
      credits: { enabled: false },
      legend: {
        enabled: false,
      },

      xAxis: {
        lineColor: "#FFFFFFA6",
        lineWidth: 0.5,
        tickLength:0,
        labels: {
          enabled: true,
          rotation: 0,
          overflow: "hidden",
          style: {
            fontSize: "0.8rem",
            lineHeight: "0.8rem",
            color: "#FFFFFFA6",
            opacity: "0.6",
            fontFamily: "Roboto",
          },
        },
        min:0,
        max:4,
        categories: [
          "Current Due",
          `${data && data[0]}`,
          `${data && data[1]}`,
          `${data && data[2]}`,
          `${data && data[3]}`,
          `${data && data[4]}`,
        ],
      },
      plotOptions: {
        series: {
          color: "#5DAAE0",
          borderWidth: 0,
          pointWidth:window.innerWidth/64,
        },
        column: {
          dataLabels: {
            enabled: true,
            allowOverlap: true,
            overflow: "allow",
            crop: false,
            formatter: function () {
              return ` ${((Math.ceil(this.y) / totalData) * 100).toFixed(1)}%
                       <br/>
                       $ ${(this.y / 1000).toFixed(1)}K `;
            },
            style: {
              color: "#FFFFFF80",
              margin: 1,
              border: "none",
              fontSize: "0.71rem",
              fontWeight: "lighter",
              fontFamily: "Roboto",
              textOutline: "0",
            },
          },
        },
      },
      series: [
        {
          data: [
             currentDueData,
            chartData && chartData[0],
            chartData && chartData[1],
            chartData && chartData[2],
            chartData && chartData[3],
            chartData && chartData[4],
           // ...(chartData||[])
          ],
        },
      ],
      tooltip: {
        enabled: true,
      },
    },
    );
    return chart;
  };

  useEffect(() => {
    renderChart();
  });

  const freedaIsOpen = useSelector((state) => {
    return state.FreedaDrawerReducer.initial;
  });

  return (
    <div
      style={{ height:"100%",width:"100%" }}
      id={`container${props.id}`}
    ></div>
  );
}
