import React from 'react';
import {
  IOT_DATA_IDLE_STATUS, 
  IOT_DATA_LOADING_STATUS, 
  IOT_DATA_FETCHED_STATUS,
  IOT_DATA_FAILED_STATUS,
  SimpleTable,
  SimpleAlert
} from 'common';
import './DashboardPageView.less';
import { normalize } from 'path';


const normalizeSensorListData = (data) => {
  if (!data) return [];
  return data.map((row, index) => {
    return {
      '#': index,
      'Temperature':  row.data.data.temperature,
      'Humidity': row.data.data.humidity,
      'Sensor read latency (ms)': row.latency.sensorReadLatancy,
      'Bluetooth latency (ms)': row.latency.bluetoothLatency,
      'SDN latency (ms)': row.latency.sdnLatency,
      'WebSocket latency (ms)': row.latency.brokerLatency,
      'Web latency (ms)': row.latency.webLatency,
      'Total (ms)': row.latency.total
    }
  });
};


const DashboardPageView = ({ isFetching, sensorStatus, sensorsDataList, getDHTSenorData }) => {
  const getDataBtn = !isFetching 
    ? (<button className="btn btn-primary" onClick={ getDHTSenorData } >get data</button>) 
    : (<button className="btn btn-primary" onClick={ getDHTSenorData } disabled >get data</button>);

  const isAlertVisible = IOT_DATA_FAILED_STATUS === sensorStatus || isFetching;
  const alertMessage = IOT_DATA_FAILED_STATUS === sensorStatus 
    ? 'Something went wrong'
    : 'Loading data';
  const alertType = IOT_DATA_FAILED_STATUS === sensorStatus
    ? 'danger'
    : 'info';

  return (
    <div className="dashboard-page">
      <div>
        <SimpleAlert type={ alertType } isVisible={ isAlertVisible } message={ alertMessage } />
      </div>
      <div className="dashboard-page__navigation">
        { getDataBtn }
      </div>
      <div>
        <SimpleTable data={ normalizeSensorListData(sensorsDataList) } />
      </div>
    </div>
  );
}


export { DashboardPageView };