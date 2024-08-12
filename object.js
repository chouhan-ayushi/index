// let obj={id:22, name:"jii",salary:30000};
// console.log(obj);

// let emp=new Object();
// emp.id=22;
// emp.name="hii";
// emp.salary=3000000;
// console.log(emp);

// function fun(i,n,s){
//     this.id=i;
//     this.name=n;
//     this.salary=s;
// }
// const e =new fun(106, "any", 55555);
// console.log(e);

// let fatch={id:22, name:"jii",salary:30000};
// //data fatch
// console.log(fatch.id);
// console.log(fatch['name']);

// //new key value pair assign
// fatch.additional=44444;

// //update
// fatch.id=13;
// fatch['name']='hiiiii';
// //delete
// delete fatch.id
// console.log(fatch);

//array methods
let emp={
    id:23,
    name:'ayushi',
    salary:3333,
}

let keys= Object.keys(emp);
console.log(keys);

let values= Object.values(emp);
console.log(values);

let entries=Object.entries(emp);
console.log(entries);

// Object.freeze(emp);//no updation no additional values no deletion
// emp.id=100;
// emp.address='indore'
// console.log(emp);

// Object.seal(emp);// updation allowed
// emp.id=100;
// emp.address='bhopal';
// console.log(emp);

let  a=Object.assign({x:23}, emp);
console.log(a);















