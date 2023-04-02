import React from "react";
import "./css/widgets.css";

const Memory = () => {
  return (
    <div className='sbox memory'>RAM: {Math.floor(Math.random() * 100)}%</div>
  );
};

export default Memory;
