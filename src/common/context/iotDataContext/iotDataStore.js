import { 
  GET_DHT_SENSOR_DATA_REQUEST_ACTION,
  GET_DHT_SENSOR_DATA_RESPONSE_ACTION
} from './iotDataActions';

const iotDataStore = {
  dhtSensor: null,
  sensorStatus: 'idle'
};

const iotDataReducer = (prevState = iotDataStore, action) => {
  switch (action.name) {
    case GET_DHT_SENSOR_DATA_REQUEST_ACTION:
      return Object.assign({}, prevState, {
        sensorStatus: "loading"
      });
    case GET_DHT_SENSOR_DATA_RESPONSE_ACTION:
      return Object.assign({}, prevState, {
        dhtSensor: action.data,
        sensorStatus: "fetched"
      });
    default:
      return prevState;
  } 
};

export { iotDataStore, iotDataReducer };