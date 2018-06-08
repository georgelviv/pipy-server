const getTimeDiff = require('../../helpers').getTimeDiff;

const setupRoutes = (app, { sendToWs }) => {

  app.get('/iot', (req, res) => {

    const beforeRequestTime = new Date();
    console.log('GET /iot');
    sendToWs('get_dht_sensor_data')
      .then(data => {
        data.webServerLatency = getTimeDiff(beforeRequestTime);
        res.send({ type: 'json', data });
      })
      .catch(error => {
        res.send({ type: 'error', error });
      });
  });

};

module.exports = setupRoutes;