import React, { Component } from 'react';
import { BasicConsumer, iotDataStoreSelector, getDHTSensorDataAction } from 'common';
import { DashboardPageView } from './DashboardPageView';

const mapStoreToProps = (store) => {
  return {
    dhtSensor: iotDataStoreSelector(store).dhtSensor
  }
};

const mapDispatchToProps = (dispatch) => {
  return  {
    getDHTSenorData: () => {
      getDHTSensorDataAction(dispatch);
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