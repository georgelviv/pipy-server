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
      'Temperature':  el.data.data.temperature,
      'Humidity': el.data.data.humidity,
      'Sensor read latency (ms)': el.latency.sensorReadLatancy,
      'Bluetooth latency (ms)': el.latency.bluetoothLatency,
      'SDN latency (ms)': el.latency.sdnLatency,
      'WebSocket latency (ms)': el.latency.brokerLatency,
      'Web latency (ms)': el.latency.webLatency,
      'Total (ms)': el.latency.total
    }
  });
};


const DashboardPageView = ({ isFetching, sensorStatus, sensorsDataList, getDHTSenorData }) => {
  const getDataBtn = !isFetching 
    ? (<button className="btn btn-primary" onClick={ getDHTSenorData } >get data</button>) 
    : (<button className="btn btn-primary" onClick={ getDHTSenorData } disabled >get data</button>);

  const isAlertVisible = IOT_DATA_FAILED_STATUS === sensorStatus;

  return (
    <div className="dashboard-page">
      <div>
        <SimpleAlert isVisible={ isAlertVisible } message={ 'Something went wrong' } />
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