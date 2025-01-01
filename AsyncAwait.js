 // function createPromise(){
 //    return new Promise(function exec(resolve,reject){
 //        //your code goes here
 //         setTimeout(function f(){
 //             console.log("time out 2");
 //             resolve("ayushi");
 //             },300);
        

//     });
// }
// async function consume(){

//     console.log("inside function");
//     const response= await createPromise();
//     console.log("response is",response);
    
// }
// consume();


// error handling

function createPromise(){
    return new Promise(function exec(resolve,reject){
        //your code goes here
        setTimeout(function f(){
            console.log("time out 2");
            reject("ayushi");
            },300);
        

    });
}
async function consume(){
try{
    console.log("inside function");
    const response= await createPromise();
    console.log("response is",response);
}catch(err) {
    console.log("handled",err);
    
} 
}
consume();
