 const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
function main(){
    var path = './wwwroot';
    var dirArry =[];
    fs.readdir(path,async (err,data)=>{
        if(err){
            console.log(err);
            return
        }
        for (var i=0;i<data.length;i++){
            if (await isDir(path+'/'+data[i])){
                dirArry.push(data[i])
            }
        }
        console.log(dirArry)
    })
}
async function isDir(path){
    console.log(path)
  return new Promise((resolve,reject)=>{
    fs.stat(path,(error,stats)=>{
        if(error){
            console.log(error);
            return
        }
        console.log(stats.isDirectory())
        if (stats.isDirectory()){
            resolve(true) 
        }else{
            return resolve(false)
        }
    })
  })
}
main()