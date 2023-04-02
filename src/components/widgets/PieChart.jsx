import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { AppContext } from "../../context/AppContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      labels: {
        color: "#ffffff",
      },
    },
  },
};
const PieChart = () => {
  const { chartData } = useContext(AppContext);

  const data = {
    labels: ["Red", "Grass", "Yellow", "Cyan", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: chartData.pieChart?.dataset1,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "#36eb6ca0",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "#36eb6ca0",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };
  return <Pie className='piechart' options={options} data={data} />;
};

export default PieChart;
