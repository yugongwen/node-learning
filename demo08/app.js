 const fs = require('fs');
//  var str = '';
//  for ( var i=0;i<500;i++){
//      str +='猜猜我是谁4321\n'
//  };
//  var  writeStream = fs.createWriteStream('./data/output.txt');
//  writeStream.write(str);
//  writeStream.end();
//  writeStream.on('finish',()=>{
//      console.log('写入完成');
//     //  writeStream.write('写入完成');
//  })
const readStream = fs.createReadStream('./aaa.png');
const writeStream = fs.createWriteStream('./data/bbb.png');
readStream.pipe(writeStream);
