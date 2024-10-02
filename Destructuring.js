 const oneArray =[1,2,3,4]
const twoArray = [5,0,8]
const threeArray =oneArray.concat(twoArray)
const threeArray = [oneArray, twoArray]
console.log(threeArray);

//spread operator(spread the elements of an array)
const oneArray =[1,2,3,4]
const twoArray = [5,0,8]
const threeArray =[...oneArray, ...twoArray]
console.log(threeArray);

// jitne bhi parameters aaye unhe array me push karna
//part -1
// function manyArguments(){
//     let args =Array.from(arguments)
//     let finalArr =args.map(e=>e)
//     console.log(finalArr);
    
// }
// manyArguments(3,4,5)
// manyArguments(5,8,9,2)

// function manyArguments(){
//     let args =Array.from(arguments)
//     let finalArr =args.map(e=>e*3)
//     console.log(finalArr);
    
// }
// manyArguments(3,4,5)
// manyArguments(5,8,9,2)

//part-2
//rest operator
function manyArguments(...args){
    console.log(typeof args);
    
    let finalArr = args.map(e=>e)
    console.log(finalArr);
    
}
manyArguments(3,4,5)
 manyArguments(5,8,9,2)
//-----
 const prev  =["Ayushi","Sakshi"]
 const newPrev=["Saloni",...prev,"Sonal"]
 console.log(newPrev);
 //---
 const sitename="PWskills"
 console.log([...sitename]);
 //---
function pwskills(...values){
    return values
}
console.log(pwskills("hii","hello"));
