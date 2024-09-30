//Array Methods
// let a=["hii","ayushi",2,4,5];
// console.log(a);

// let b=new Array("hii",3,4,5);
// console.log(b);

// console.log(a[1]);

// a[2]=0;
// console.log(a);

// console.log(a[14]);

//Array methods
let arr =[2,4,5,6,7,8];
arr.push(1);
console.log(arr);

arr.pop();
console.log(arr);

let a =[2,4,5,6,7,8];
a.shift();
console.log(a);
let f=a.shift();
console.log(f);

a.unshift(10);
console.log(a);

let c =[2,4,5,6,7,8];
let d =[23,44,54,34];
let e=c.concat(d);
console.log(e);
let s=e.join("**");
console.log(s);

e.reverse();
console.log(e);

console.log(e.indexOf(44));


let arr1=[2,4,7,5,6,9];
console.log(arr1.slice(1,5));

let arr2=[3,5,4,6,7,89,6];
arr2.splice(2,0,69);
console.log(arr2);

let arr3=[3,5,4,6,7,89,66];
arr3.splice(2,3,69);
console.log(arr3);

let arr4=[3,5,4,6,7,89,66];
arr4.splice(2,3,69,66,67);
console.log(arr4);




