import React from "react";

const DashboardSelector = ({
  dashboards,
  selectedDashboard,
  onSelectDashboard,
}) => {
  return (
    <div className='dashboard-selector'>
      {dashboards.map((dashboard) => (
        <button
          key={dashboard.title}
          className={dashboard === selectedDashboard ? "selected" : ""}
          onClick={() => onSelectDashboard(dashboard)}
        >
          {dashboard.title}
        </button>
      ))}
    </div>
  );
};

export default DashboardSelector;
