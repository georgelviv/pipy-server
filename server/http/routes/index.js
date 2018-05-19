const setupRoutes = (app) => {
  app.get('/iot', (req, res) => {
    res.send({ d: 'aaa' });
  });
};

module.exports = setupRoutes;