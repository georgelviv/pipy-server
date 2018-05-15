import { GET_DHT_SENSOR_DATA } from './iotDataActions';

const iotDataStore = {
  dhtSensor: null
};

const iotDataReducer = (prevState = iotDataStore, action) => {
  switch (action.name) {
    case GET_DHT_SENSOR_DATA:
      return Object.assign({}, prevState, {
        dhtSensor: "data"
      });
    default:
      return prevState;
  } 
};

export { iotDataStore, iotDataReducer };