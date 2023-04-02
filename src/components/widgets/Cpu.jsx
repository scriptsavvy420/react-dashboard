import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/widgets.css";

const Cpu = () => {
  const [cpu, setCpu] = useState({ cpu: 0 });

  const getCpu = async () => {
    try {
      const response = await axios.get(
        "https://easy-red-fly-hose.cyclic.app/cpu"
      );
      // console.log(response.data);
      setCpu(response.data);
    } catch (error) {
      console.log(error);
    }
    // setCpu({ cpu: 0 });
  };

  useEffect(() => {
    getCpu();
    const id = setInterval(() => {
      getCpu();
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div onClick={() => getCpu()} className='hbox cpu'>
      CPU: {cpu.cpu}%
    </div>
  );
};

export default Cpu;
