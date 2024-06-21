// Create web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');
var qs = require('querystring');
var comments = [];

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	// console.log(pathname);
	// if pathname is '/'
	if (pathname === '/') {
		fs.readFile(path.join(__dirname, 'index.html'), function(err, data) {
			if (err) {
				res.writeHead(