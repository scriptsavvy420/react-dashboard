import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

const getData = () => {
  return axios.get("https://easy-red-fly-hose.cyclic.app/dashboard");
};

export const AppContextProviderComponent = ({ children }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getData().then((res) => {
      console.log(res.data);
      setChartData(res.data);
    });
  }, []);

  return (
    <AppContext.Provider value={{ chartData }}>{children}</AppContext.Provider>
  );
};
