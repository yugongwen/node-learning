 const fs = require('fs');
//  fs.stat("./package.json",(err,data)=>{
//      if(err){
//          console.log(err);
//          return
//      }
//      console.log(`是文件：${data.isFile()}`);
//      console.log(`是目录：${data.isDirectory()}`);
//  })

//  fs.mkdir('./css',(err)=>{
//      if(err){
//          console.log(err)
//      }
//      console.log("创建成功")
//  })
// fs.writeFile('./html/index.html',"你好node.js，哈哈哈",(err)=>{
//     if(err){
//         console.log(er);
//         return
//     }
//     console.log('创建写入文件成功')
// });
// fs.appendFile('./css/base.css','body{color:red}',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('appendFile 成功')
// })
// fs.readFile('./html/index.html',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data.toString())
// })
// fs.readdir('./html',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// fs.rename('./css/index.css','./html/index.css',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('重命名成功')
// })
// fs.rmdir('./,.css',(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('成功了')
// })
// console.log(new Date());
// console.log(typeof this);