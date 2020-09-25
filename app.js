var http = require('http');
const url = require('url');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(request.url);
  if(!request.url =='/favicon.ico'){

  }
  response.end('Hello World133');
}).listen(8081);//端口

console.log('Server running at http://127.0.0.1:8081/');