const { createProxyMiddleware } = require("http-proxy-middleware");
const { default: Axios } = require("axios");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
