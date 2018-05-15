import React from 'react';

import './DashboardPageView.less';

const DashboardPageView = ({ dhtSensor, getDHTSenorData }) => {

  return (
    <div className="dashboard-page">
      <button onClick={ getDHTSenorData } >get data</button>
      <div>
        {dhtSensor}
      </div>
    </div>
  );
}

export { DashboardPageView };