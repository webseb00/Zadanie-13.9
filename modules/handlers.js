var fs = require('fs');
var formidable = require('formidable');

exports.upload = function(request, response) {
	console.log('Rozpoczynam obsługę zapytania upload!');
	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files) {
		fs.renameSync(files.upload.path, 'test.png');
  		fs.readFile('templates/upload.html', function(err, html) {
  			response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	  		response.write(html)
	        response.end();
  		});
  		
	});
}

exports.welcome = function(request, response) {
	console.log('Rozpoczynam obsługę żądania welcome');
	fs.readFile('templates/index.html', function(err, html) {
		response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		response.write(html);
		response.end();
	});
}

exports.cssIndex = function(request, response) {
	console.log('Obsługa stylów css');
	fs.readFile('css/index.css', function(err, css) {
		response.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
		response.write(css);
		response.end();
	});
}

exports.show = function(request, response) {
	fs.readFile('test.png', 'binary', function(err, file) {
		response.writeHead(200, {'Content-Type': 'image/png'});
		response.write(file, 'binary');
		response.end();
	});
}

exports.error = function(request, response) {
	console.log('Nie wiem co robic.');
	response.write('Error 404 ;-(');
	response.end();
}