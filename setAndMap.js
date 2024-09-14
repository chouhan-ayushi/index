//set
let emptySet =new Set()
//console.log(emptySet.size);
 let myarray =[2,3,45,4,4,3]
 let newSet = new Set(myarray)
 console.log(newSet);
 
newSet.add(44)
//console.log(newSet);
console.log(newSet.has(9));
newSet.clear()
console.log(newSet);

//set difference
function setDifference(setA, setB){
  return new Set ([...setA].filter(el=>!setB.has(el)))
}


//map
let map = new map()
console.log(map.size);

let arr=[
    [1,"ayushi"]
    [2,"sakshi"]
    [3,"saloni"]
];
arr.map((arrayItem)=>map.set(arrayItem[0], arrayItem[1]))