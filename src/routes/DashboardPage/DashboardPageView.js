import React from 'react';
import {
  IOT_DATA_IDLE_STATUS, 
  IOT_DATA_LOADING_STATUS, 
  IOT_DATA_FETCHED_STATUS 
} from 'common';
import './DashboardPageView.less';



const DashboardPageView = ({ sensorStatus, sensorsDataList, getDHTSenorData }) => {
  console.log(sensorsDataList);
  const getDataBtn = sensorStatus === IOT_DATA_IDLE_STATUS 
    ? (<button className="btn btn-primary" onClick={ getDHTSenorData } >get data</button>) 
    : (<button className="btn btn-primary" onClick={ getDHTSenorData } disabled >get data</button>);

  return (
    <div className="dashboard-page">
      <div className="dashboard-page__navigation">
        { getDataBtn }
      </div>
      <table className="table table-striped">
        <thead>
        <tr>
          <th>#</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>Latency from broker (ms)</th>
          <th>Latency from receiver (ms)</th>
          <th>Latency from sensor (ms)</th>
        </tr>
        </thead>
        <tbody>
          { sensorsDataList.map((el, index) => {
            return (
              <tr key={ index }>
                <td>{ index + 1}</td>
                <td>{ el.data.data.temperature }</td>
                <td>{ el.data.data.humidity }</td>
                <td>{ el.latency.broker }</td>
                <td>{ el.latency.message }</td>
                <td>{ el.latency.sensor }</td>
              </tr>
            );
          }) }
        </tbody> 
      </table>
    </div>
  );
}

export { DashboardPageView };