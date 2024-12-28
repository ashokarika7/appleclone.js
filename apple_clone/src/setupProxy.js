const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.apple.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};
