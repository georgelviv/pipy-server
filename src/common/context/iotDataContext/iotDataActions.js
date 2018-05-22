import { getIOTData } from 'common';
 
const GET_DHT_SENSOR_DATA_REQUEST_ACTION = 'get dht sensor data';
const GET_DHT_SENSOR_DATA_RESPONSE_ACTION = 'received dht sensor data';


const getDHTSensorDataAction = (dispatch) => {
  dispatch({
    name: GET_DHT_SENSOR_DATA_REQUEST_ACTION
  });

  getIOTData().then(data => {
    dispatch({
      name: GET_DHT_SENSOR_DATA_RESPONSE_ACTION,
      data
    })
  });
};

export { 
  GET_DHT_SENSOR_DATA_REQUEST_ACTION,
  GET_DHT_SENSOR_DATA_RESPONSE_ACTION,
  getDHTSensorDataAction 
};