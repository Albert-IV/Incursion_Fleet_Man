var connect = require('connect'),
		_ = require('underscore'),
		router = require('dispatch');


var app = connect();



var server = connect(
	connect.logger('dev'),
	connect.responseTime(),
	connect.staticCache(),
	connect.bodyParser(),
	connect.query(),
	connect.static( __dirname + '/public' ),
	connect.favicon('fav.ico'),
	router({
		"/": function(req, res, next) {
			respond( req, res, next );
		}
	})
);

app.listen.apply(server, [8900])
