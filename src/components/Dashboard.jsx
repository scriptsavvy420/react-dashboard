import React from "react";
import Cost from "./widgets/Cost";
import Cpu from "./widgets/Cpu";
import RandomList from "./widgets/RandomList";
import Memory from "./widgets/Memory";
import PieChart from "./widgets/PieChart";
import Stats from "./widgets/Stats";
import LineGraph from "./widgets/LineGraph";
import BarGraph from "./widgets/BarGraph";
import TabularData from "./widgets/TabularData";

const Dashboard = ({ dashboard }) => {
  console.log(dashboard);
  return (
    <div className='widgetsContainer'>
      {/* {dashboard.title} */}
      <div className='widgets'>
        {dashboard.widgets
          .sort((a, b) => a.position - b.position)
          .map((widget, index) => {
            switch (widget.name) {
              case "cost":
                return <Cost key={index} />;
              case "cpu":
                return <Cpu key={index} />;
              case "randomList":
                return <RandomList key={index} />;
              case "stats":
                return <Stats key={index} />;
              case "lineGraph":
                return <LineGraph key={index} />;
              case "barGraph":
                return <BarGraph key={index} />;
              default:
                return null;
            }
          })}
      </div>
      <div className='sideWidgets'>
        {dashboard.sideWidgets
          .sort((a, b) => a.position - b.position)
          .map((widget, index) => {
            switch (widget.name) {
              case "memory":
                return <Memory key={index} />;
              case "pieChart":
                return <PieChart key={index} />;
              case "tabularData":
                return <TabularData key={index} />;
              default:
                return null;
            }
          })}
      </div>
    </div>
  );
};

export default Dashboard;
