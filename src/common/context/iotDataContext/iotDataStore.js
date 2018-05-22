import { 
  GET_DHT_SENSOR_DATA_REQUEST_ACTION,
  GET_DHT_SENSOR_DATA_RESPONSE_ACTION
} from './iotDataActions';

import {
  IOT_DATA_IDLE_STATUS, 
  IOT_DATA_LOADING_STATUS, 
  IOT_DATA_FETCHED_STATUS 
} from './iotDataConstants';

import { getTimeDiff } from 'common';

const iotDataStore = {
  sensorsDataList: [],
  sensorStatus: IOT_DATA_IDLE_STATUS
};

const handleNewSensorData = (actionData) => {
  return Object.assign({}, actionData, {
    latency: {
      total: actionData.webClientLatency, 
      webLatency: actionData.webClientLatency - actionData.webServerLatency, // From web client to web serer
      brokerLatency: actionData.webServerLatency - actionData.messageLatency, // From web server to broker
      sdnLatency: actionData.messageLatency - actionData.data.bluetoothLatency,
      bluetoothLatency: actionData.data.bluetoothLatency - actionData.data.data.sensorReadLatancy,
      sensorReadLatancy: actionData.data.data.sensorReadLatancy
    }
  });
};

const iotDataReducer = (prevState = iotDataStore, action) => {
  switch (action.name) {
    case GET_DHT_SENSOR_DATA_REQUEST_ACTION:
      return Object.assign({}, prevState, {
        sensorStatus: IOT_DATA_LOADING_STATUS
      });
    case GET_DHT_SENSOR_DATA_RESPONSE_ACTION:
      return Object.assign({}, prevState, {
        sensorsDataList: [...prevState.sensorsDataList, handleNewSensorData(action.data)],
        sensorStatus: IOT_DATA_IDLE_STATUS
      });
    default:
      return prevState;
  } 
};

export { iotDataStore, iotDataReducer };