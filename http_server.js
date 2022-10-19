const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
/*const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end("welcome to Http server .");
})
server.listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}/`);
})*/

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.write("welcome to Http server .");
	res.end();
}).listen(port, hostname, () => {
	console.log(`server running at http://${hostname}:${port}/`);
})
