const http = require('http');
const routes = require('./module/routes');
const url = require('url')
// let pathname = url.parse(req.url).pathname;
http.createServer((request,response)=>{
    //创建静态web服务
    routes.static(request,response,'static');
    let pathname = url.parse(request.url).pathname;
    if(pathname == '/login'){
        response.writeHead(200,{'content-Type':'text/html;charset ="utf-8"'});
        response.end("执行登录")
    }else if (pathname =='/register'){
        response.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
        response.end('执行注册')
    }else if (pathname =='/admin'){
        response.writeHead(200,{'Content-Type':"text/html;charset='uft-8'"});
        response.end('处理后的业务逻辑')
    }else{
        response.writeHead(400,{'Content-Type':"text/html;charset='uft-8'"});
        response.end('页面不存在')
    }
}
    
 
).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');