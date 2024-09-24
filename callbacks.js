
// synchronous callback-line by line code execution// function h(x,fn){
//     //h-hof
//     //fn-callback
//     console.log(x*x);
//     fn();
    
// }
// h(10,function(){
//     console.log("done with callback");
    
// })



function h(x,fn){
    //h-hof
    //fn-callback
    console.log(x*x*x);
    fn(x*x);
    
}
h(9,exec)
function exec(n){
    console.log("squared value is",n);
    
}
// asynchronous callback

// console.log("start");
// setTimeout(function f(){
// console.log("time out");

// },3000);
// console.log("end");

console.log("start");
setTimeout(function f(){
console.log("time out 1");

},1000);
setTimeout(function f(){
    console.log("time out 2");
    
    },300);
console.log("end");
for(let i=0; i<1000000000; i++){}
