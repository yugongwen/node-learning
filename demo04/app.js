var md5 = require('md5');
const data = md5('123456');
var sd = require('silly-datetime');
// sd.format
console.log(new Date())
const newData =sd.format(new Date(),"YYYY-MM-DD")
console.log(newData);