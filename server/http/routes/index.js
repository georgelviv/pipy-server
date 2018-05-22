const getTimeDiff = require('../../helpers').getTimeDiff;

const setupRoutes = (app, { sendToWs }) => {

  app.get('/iot', (req, res) => {

    const beforeRequestTime = new Date();
    sendToWs('get_dht_sensor_data')
      .then(data => {
        data.webServerLatency = getTimeDiff(beforeRequestTime);
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  });

};

module.exports = setupRoutes;