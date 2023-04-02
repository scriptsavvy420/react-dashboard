import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./css/widgets.css";
import { Bar } from "react-chartjs-2";
import { AppContext } from "../../context/AppContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

const BarGraph = () => {
  const { chartData } = useContext(AppContext);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Dataset 1",
        data: chartData.barChart?.dataset1,

        backgroundColor: "rgba(255, 99, 133, 0.829)",
      },
      {
        label: "Dataset 2",
        data: chartData.barChart?.dataset2,
        backgroundColor: "rgba(232, 235, 53, 0.596)",
      },
    ],
  };
  return (
    <div className='fbox'>
      <Bar options={options} data={data} />;
    </div>
  );
};

export default BarGraph;
