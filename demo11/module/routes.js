const fs = require('fs');
const path = require('path');
const url = require('url');
let getMine = function (extname) {
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';
    }
}
exports.static =function (request,response,staticPath) {
    //获取网站传过来的地址
    // console.log(request.url);
    let pathname = url.parse(request.url).pathname;
    pathname= pathname=='/'?'/index.html':pathname;
    //可以获取后缀明的方法
    let extname = path.extname(pathname)
    if(pathname!='/favicon.ico'){
        console.log(pathname);
        fs.readFile('./'+staticPath+pathname,(err,data)=>{
            // if(err){
            //     // console.log('404页面');
            //     response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
            // response.end('页面不存在');
            //     return
            // }
            if(!err){
                let mime =getMine(extname)
            response.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'});
            response.end(data);
            }
            
        })
    }

 
}