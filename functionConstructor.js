function Product(n,p,r){
    this.name =n;
    this.price =p;
    this.rating =r;
   // return this;
   //return 10;
   //return{x:23}
}
const p= new Product ("macbook",100000,4)
console.log(p);
//this keyword in js diff than other language
//this keyword refers to the context from where we called

let x={
    p:Product
}
x.p("airpods",2000000,3)
console.log(x);
//----------
//  Product=(n,p,r)=>{
//     this.name =n;
//     this.price =p;
//     this.rating =r;

// }
// const p= new Product ("macbook",100000,4)
// console.log(p);
// the theory of this keyword pointing to calling context is not applicable with arrow function
//---------------
// let obj={
//     x:23,
//     function(){
//         console.log(this.x);
        
//     }
// }
// obj.function()//applicable

// let obj={
//     x:23,
//     function:()=>{
//         console.log(this.x);
        
//     }
// }
// obj.function()// not applicable


let obj={
    x:23,
    function(){
        y={
            gun:()=>{
            console.log(this.x);
            }
        }
      y.gun();
    }
}
obj.function();