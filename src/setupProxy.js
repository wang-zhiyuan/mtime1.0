const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/Service', { 
  	target: 'http://m.mtime.cn/',
  	host:'http://m.mtime.cn',
  	changeOrigin:true
  	}));
};