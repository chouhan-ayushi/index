// function createPromise(){
//     return new Promise(function exec(resolve,reject){
//         //your code goes here
//         setTimeout(function f(){
//             console.log("time out 2");
//             resolve("ayushi");
//             },300);
        

//     });
// }
// console.log("start");
// let x=createPromise();
// console.log("got a new promise");
// //registration
// x.then(function f(){
//     console.log("promise done");
//     //micro task queue
// });
// console.log("end");

// for(i=0;i<100000000;i++){
//     //some code
// }

function createPromise(){
    return new Promise(function exec(resolve,reject){
        //your code goes here
        setTimeout(function f(){
            console.log("time out 2");
            reject("ayushi");
            },300);
        

    });
}
console.log("start");
let x=createPromise();
console.log("got a new promise");
//registration
x.then(function f(value){
    console.log("promise done",value);
    //micro task queue
}).catch(function g(value){
    console.log("handled",value);
    
}).finally(function fn(){
    console.log("finally");
    
})
console.log("end");

for(i=0;i<100000000;i++){
    //some code
}