const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",

    createProxyMiddleware({
      target: "https://culture.seogwipo.go.kr",

      changeOrigin: true,
    })
  );
};
