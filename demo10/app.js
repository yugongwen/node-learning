const http = require('http');
const fs = require('fs');
//获取写好的方法
const common = require("./module/common");
const path = require('path');
const url = require('url');
// let pathname = url.parse(req.url).pathname;
http.createServer(function (request, response) {
    //获取网站传过来的地址
    // console.log(request.url);
    let pathname = url.parse(request.url).pathname;
    pathname= pathname=='/'?'/index.html':pathname;
    //可以获取后缀明的方法
    let extname = path.extname(pathname)
    if(pathname!='/favicon.ico'){
        console.log(pathname);
        fs.readFile('./static'+pathname,(err,data)=>{
            if(err){
                // console.log('404页面');
                response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
            response.end('页面不存在');
                return
            }
            let mime = common.getMine(extname)
            response.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'});
            response.end(data);
        })
    }

 
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');