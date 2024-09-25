let names =["ayushi","shivani","sonam","saloni","sonal"]
console.log(names);
console.log("the length of an array is",names.length);
console.log(names[0]);
console.log(names[names.length-1]);
//edit
names[4]="sonali";
console.log(names);

let nam=["Chauhan","thakur","Rajput"]
console.log(nam);
for(let i=0; i<= nam.length; i++){
    if(nam[i]== "chauhan"){
        nam[i]="chouhan";
    }
}
console.log(nam);
//----

let studentName= new Array("hello","hii","hey")
console.log(studentName);
studentName.push("hillo")
console.log(studentName);
