// function geet(){
//     console.log("hi there");
//     console.log("I am ayushi");
    
// }
// function sqr(x) {// x- parameter
//   
//     return x*x;
// }

// geet();
// let a=sqr(8);// 8-argument
// console.log(a);

// function without parameter and return

// function Me() {
//     return "i am ayushi";
// }
// let b=Me();
// console.log(b);

// let c=b+ "chouhan";
// console.log(c);

// function with one parameter
// function hii(shanu){
//     console.log(shanu);
    
// }
// hii("hello there");
// hii("How are you");

//function with default parameter
// function hiiii(shanuuu="Hiiiiii"){
//     console.log(shanuuu);
    
// }
// hiiii("helloooooo there");
// hiiii();

// function add(x, y=34){
// return x+y;
// }
// console.log(add(1));

// function addd(x=6, y=34){
//     return x+y;
//     }
//     console.log(addd(1));
    
//     function adddd(x=6, y=34){
//         return x+y;
//         }
//         console.log(adddd(1,7));

// //array as an argument
// function sumOfTwoNumbers([num1,num2]){
//     return num1+num2;
// }
// let numbers=[10,40];
// let result=sumOfTwoNumbers(numbers);
// console.log(result);

// //function with an unlimited number of parameters
// function SumOfAllParameters(){
//     let sum=0;
//     for (var i=0; i< arguments.length; i++) sum += arguments[i];
//     return sum;
// }
// let resultt=SumOfAllParameters(2,4,3,5,6,7);
// console.log(resultt);

//Arrow function/fat arrow function
//one parameter and one single statement
//const square =(x) => x*x;

//multiple parameter and single return expression
//const SumOfTwoNumbers=(x,y) => x+y;

//multiple statement in function expression
//cons sum=(x,y)=>{
  //  console.log('Adding ${x} and ${y}');
    //return x+y;
//};

//Returning an object
//const sumAndDifference=(x,y)=>({sum; x+y, difference; x-y});

//calling a function
// let output1 = square(5);

//Anonymous function
// let x=function(){
//     console.log("hii");
    
// }
// x();

//immediately invoked function
(function fun(){
    console.log("named");
})();

(function (x){
    console.log(x*x);
})(5);
    
// Function expression= named, anonymous
// let x=function(){
//     console.log("hii");
    
// }
// x();anonymous expression

let x=function exp(){
    console.log("hii");
    
}
x();




