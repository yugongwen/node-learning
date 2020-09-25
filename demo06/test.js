function getData(resolve,reject){
    setTimeout(function(){
        var name = 'zhangsansana11';
        resolve(name)
    },1000);
}
// getData(function(aaa){
//     console.log(aaa);
// })
var p = new Promise(getData)
p.then(function(data){
    console.log(data);
})