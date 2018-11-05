const proxy = require('http-proxy-middleware');

module.exports = function(app) {
<<<<<<< HEAD
  app.use(proxy('/Service', { 
  	target: 'http://m.mtime.cn/',
  	host:'http://m.mtime.cn',
  	changeOrigin:true
  	}));
};
=======
	app.use(proxy('/Service', { 
		target: 'http://m.mtime.cn',
		host:"m.mtime.cn",
		changeOrigin:true
	}));
	app.use(proxy('/api', { 
		target: 'https://ticket-m.mtime.cn',
		host:"ticket-m.mtime.cn",
		changeOrigin:true
	}));
};

>>>>>>> fba8cb4ea3d0b30f243acfd77035dbe740406523
