import React, { Component } from 'react';
import { BasicConsumer, iotDataStoreSelector, getDHTSensorDataAction } from 'common';
import { DashboardPageView } from './DashboardPageView';

const mapStoreToProps = (store) => {
  const iotData = iotDataStoreSelector(store);
  return {
    sensorStatus: iotData.sensorStatus,
    sensorsDataList: iotData.sensorsDataList
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