import React from "react";
import "./css/widgets.css";
import { Pie } from "react-chartjs-2";

const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(0, 0, 255, 0.5)",
        "rgba(255, 255, 0, 0.5)",
      ],
      borderColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(0, 0, 255, 0.5)",
        "rgba(255, 255, 0, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};
const data2 = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [22, 12, 3],
      backgroundColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(0, 0, 255, 0.5)",
        "rgba(255, 255, 0, 0.5)",
      ],
      borderColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(0, 0, 255, 0.5)",
        "rgba(255, 255, 0, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};
const data3 = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 10, 13],
      backgroundColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(0, 0, 255, 0.5)",
        "rgba(255, 255, 0, 0.5)",
      ],
      borderColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(0, 0, 255, 0.5)",
        "rgba(255, 255, 0, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Stats = () => {
  return (
    <div className='fbox stats'>
      <div className='stats-container'>
        <div>
          <Pie data={data} options={options} />
        </div>
        <div>
          <Pie data={data2} options={options} />
        </div>
        <div>
          <Pie data={data3} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
