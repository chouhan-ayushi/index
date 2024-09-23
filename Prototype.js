// let myHeros=["thor","spiderman"]
// let dcHeros=["batman","flash","superman"]

// let heropower={
//     thor:"hammer",
//     spiderman:"sling",
   
//     getSpidermanPower:function () {
//         console.log('Spidy power is ${this.spiderman}');
        
//     }
// }
// Object.prototype.hitesh=function(){
//     console.log('Hitesh is present in all object');
    
// }
// console.log(myHeros.hitesh());
// console.log(heropower.hitesh());

// Array.prototype.heyHitesh=function(){
//     console.log('Hitesh says hi');
    
// }
// console.log(myHeros.heyHitesh());
// //console.log(heropower.heyHitesh());

// //inheritance

// const User={
//     name:"ayushi",
//     email:"top@gmail.com"
// }
// const Teacher={
// makeVideos:true
// }
// const TeachingSupport={
//     isAvailable:false
// }
// const TAAssistant={
//     makeAssignment:"JS Assignment",
//     fulltime:true,
//     __proto__:TeachingSupport
// }

// Teacher.__proto__=User
// Object.setPrototypeOf(TeachingSupport,Teacher)

// console.log(TAAssistant.isAvailable);

// //-----

String.prototype.truelength=function(){
    console.log("True length is ${this.trim().truelength}");
    
}
"hitesh      " .truelength()
"anurag        " .truelength()