import React, { useState } from "react";
import DashboardSelector from "./DashboardSelector";
import Dashboard from "./Dashboard";
import dashboards from "../config.json";

const DashboardContainer = () => {
  const [selectedDashboard, setSelectedDashboard] = useState(dashboards[0]);

  const onSelectDashboard = (dashboard) => {
    setSelectedDashboard(dashboard);
  };

  return (
    <div className='dashboard-container'>
      <DashboardSelector
        dashboards={dashboards}
        selectedDashboard={selectedDashboard}
        onSelectDashboard={onSelectDashboard}
      />
      <Dashboard dashboard={selectedDashboard} />
    </div>
  );
};

export default DashboardContainer;
