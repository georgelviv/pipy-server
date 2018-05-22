const setupRoutes = (app, { sendToWs }) => {

  app.get('/iot', (req, res) => {

    sendToWs('get_dht_sensor_data')
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      });
  });

};

module.exports = setupRoutes;