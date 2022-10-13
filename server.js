const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
	//console.log(req);//output shows the request object
	console.log(req.url, req.method);
	// console.log('request made .');
	// res.end("pramit");

	//response object --->
	// res.setHeader('Content-Type', 'text/html');// set header content type .
	// res.write('<head><link rel="stylesheet" href="#"></head>');
	// res.write('<p>My name is pramit</p>')
	// res.write('<p>weelcome to my site</p>')
	// res.end();


	//Returning Html pages--->

	let path = './views/';
	switch (req.url) {
		case '/':
			path += 'index.html'
			break;
		case '/about':
			path += 'about.html'
			break;
		default:
			path += '404.html'
			break
	}
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			//res.write(data);
			res.end(data);
		}

	});

});
server.listen(8080, 'localhost', () => {
	console.log('listening for requests on port 8080')
})
