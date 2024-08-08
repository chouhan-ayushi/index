console.log("hii");
// Assignment operator
let nameOf = "hitesh"
console.log(nameOf);

//Arithmetic operators
let englishMarks=55
let hindiMarks=66
total=englishMarks+hindiMarks
console.log("TotalMarks:",total );

console.log(5/2);
console.log(5%2);
console.log(5 ** 4);

//comparison
let ramMarks=55
let ayushiMarks=66
console.log(ramMarks==ayushiMarks);

let shyamMarks=55
let aayushiMarks="55"
console.log(shyamMarks==aayushiMarks);

let raamMarks=55
let ayuushiMarks=66
console.log(raamMarks!=ayuushiMarks);

let value1=true
let value2=true
let value3=false
console.log(value1&&value3);

let isLoggedin=true
let cardDetails=false
console.log(isLoggedin&&cardDetails);

let gmailAccount=true
let emailAccount=false
console.log(gmailAccount|| emailAccount);

let age=36
if (age>=35){
    console.log("You are allowed");  
}

// let marks=33
// if (marks>=35){
//     console.log("You are allowed");  
// }
// else{
//     console.log("you are not allowed");
    
// }

let signal="red";
if (signal=="red"){
    console.log("red=>stop");
    
}
else if (signal=="yellow"){
    console.log("yellow=>go slow");
    
}
 else{
    console.log("Green=>go fast");
    
}

let user="Admin";
switch(user){
    case "Admin":
    console.log("he is Admin");
    break;
    case "Student":
        console.log("he is student");
        break;
        case "faculty":
        console.log("he is faculty");
        break; 
        default:
            console.log("i am default");
             
}

// for(let i= 0; i<6; i++){
// console.log(i);
// }

// let i=0;
// while (i<=5) {
//     console.log(i);
//     i++
    
// }

// let i=0;
// do{
// console.log("hello world");
// i++;
// } while(i>5);

// Ternary op /Ternary condition
//condition ? true:false

 isLoggedin=true;
isLoggedin?console.log("home page"):console.log(LoginPage);

