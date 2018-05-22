import React from 'react';
import {
  IOT_DATA_IDLE_STATUS, 
  IOT_DATA_LOADING_STATUS, 
  IOT_DATA_FETCHED_STATUS 
} from 'common';
import './DashboardPageView.less';



const DashboardPageView = ({ sensorStatus, sensorsDataList, getDHTSenorData }) => {
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
          <th>Sensor read latecny (ms)</th>
          <th>Bluetooth latency (ms)</th>
          <th>SDN latecny (ms)</th>
          <th>WebSocket latecny (ms)</th>
          <th>Web latecny (ms)</th>
          <th>Total (ms)</th>
        </tr>
        </thead>
        <tbody>
          { sensorsDataList.map((el, index) => {
            const { 
              sensorReadLatancy,
              bluetoothLatency,
              sdnLatency,
              brokerLatency,
              webLatency,
              total
            } = el.latency;
            return (
              <tr key={ index }>
                <td>{ index + 1}</td>
                <td>{ el.data.data.temperature }</td>
                <td>{ el.data.data.humidity }</td>
                <td>{ sensorReadLatancy }</td>
                <td>{ bluetoothLatency  }</td>
                <td>{ sdnLatency }</td>
                <td>{ brokerLatency }</td>
                <td>{ webLatency }</td>
                <td>{ total }</td>
              </tr>
            );
          }) }
        </tbody> 
      </table>
    </div>
  );
}


export { DashboardPageView };