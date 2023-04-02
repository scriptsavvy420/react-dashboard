import React from "react";
import "./css/widgets.css";

const Cost = () => {
  return (
    <div className='hbox cost'>COST: {Math.floor(Math.random() * 100)}</div>
  );
};

export default Cost;
