var http = require('http');
// function formatApi(api){
//     return 'http://baidu.com/'+api;
// }
const tools = require('./nodules/tools')
console.log(tools)
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var api = formatApi('api/plist');
  response.write(api);
  console.log(api);
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');