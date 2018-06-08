module.exports = {
  SERVER_PORT: process.env.PORT || 3001,
  WS_SERVER_PORT: 8080,
  WS_SERVER_URL: process.env.WS_SERVER_URL || '192.168.10.240',
  WS_RECONNECT_TIMEOUT: 5000
};