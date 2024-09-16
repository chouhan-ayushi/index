try{
let x=undefined;
console.log(x[1]);

}catch(err){
console.log("error handling in catch",err);

}finally{
   console.log("finally always get executed");
    
}
console.log("end");
//-----

try{
console.log("hello");
console.log(a);
console.log("ending try");

}catch{
console.log("handled");

}finally{
console.log("finally");

}
console.log("end");
