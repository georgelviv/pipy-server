import React, { Component } from 'react';
import { BasicConsumer, iotDataStoreSelector, GET_DHT_SENSOR_DATA } from 'common';
import { DashboardPageView } from './DashboardPageView';

const mapStoreToProps = (store) => {
  return {
    dhtSensor: iotDataStoreSelector(store).dhtSensor
  }
};

const mapDispatchToProps = (dispatch) => {
  return  {
    getDHTSenorData: () => {
      dispatch({
        name: GET_DHT_SENSOR_DATA
      });
    }
  }
};

class DashboardPage extends Component {

  render() {
    return (
      <BasicConsumer>
        {
          (context) => {
            const props = {...mapStoreToProps(context.store), ...mapDispatchToProps(context.dispatch)};
            console.log(props);
            return (
              <DashboardPageView  {...props} />
            );
          }
        }
      </BasicConsumer>
      
    );
  };
}

export { DashboardPage };