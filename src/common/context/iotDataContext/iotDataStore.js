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
      broker: getTimeDiff(actionData.brokerDate),
      message: getTimeDiff(actionData.messageDate),
      sensor: getTimeDiff(actionData.data.date)
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