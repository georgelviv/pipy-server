import { getIOTData } from 'common';
import { getTimeDiff } from 'common';

const GET_DHT_SENSOR_DATA_REQUEST_ACTION = 'get dht sensor data';
const GET_DHT_SENSOR_DATA_RESPONSE_ACTION = 'received dht sensor data';
const GET_DHT_SENSOR_DATA_ERROR_ACTION = 'error on dht sensor data receive';


const errorHandler = (dispatch, error) => {
  dispatch({
    name: GET_DHT_SENSOR_DATA_ERROR_ACTION,
    error
  });
};

const getDHTSensorDataAction = (dispatch) => {
  dispatch({
    name: GET_DHT_SENSOR_DATA_REQUEST_ACTION
  });

  const beforeRequestTime = new Date();

  getIOTData().then(data => {
    if (data.type === 'json') {
      data.data.webClientLatency = getTimeDiff(beforeRequestTime);
      dispatch({
        name: GET_DHT_SENSOR_DATA_RESPONSE_ACTION,
        data: data.data
      });
    } else {
      errorHandler(dispatch, data.error);
    }
  })
  .catch(error => {
    errorHandler(dispatch, data.error);
  });
};

export { 
  GET_DHT_SENSOR_DATA_REQUEST_ACTION,
  GET_DHT_SENSOR_DATA_RESPONSE_ACTION,
  GET_DHT_SENSOR_DATA_ERROR_ACTION,
  getDHTSensorDataAction 
};