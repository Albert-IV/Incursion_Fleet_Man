var connect = require('connect'),
		_ = require('underscore'),
		async = require('async'),
		router = require('dispatch');

var app = connect();

function respond(req, res, next) {
	res.end("<html><h1>Hello Capsuleers!</h1></html>")
}

var server = connect(
	connect.logger('dev'),
	connect.responseTime(),
	connect.staticCache(),
	connect.bodyParser(),
	connect.query(),
	connect.static( __dirname + '/public' ),
	connect.favicon('./public/fav.ico'),
	router({
		"/": function(req, res, next) {
			respond( req, res, next );
		}
	})
);

app.listen.apply(server, [8900])
