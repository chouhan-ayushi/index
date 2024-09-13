let arr =[2,4,6]
//foreach
arr.forEach(function(element,index,arr){
    console.log(index, element,arr);
    
})

arr.forEach((element,index,arr)=>{
console.log("arrow:",index, element,arr);

})

const heros=["naagraj","sanidhya","Druva"]

heros.forEach((el)=>{console.log(el.toUpperCase());
})
//map
arr.map(function(element,index,arr) {
    console.log(element,index,arr);
    
})
heros.map((h)=>{console.log(h.toUpperCase());
})
//filter
console.log(heros);
const herosWithRaj=heros.filter((h)=>{
    return h.endsWith('raj')
})
console.log(herosWithRaj);

//shopping cart//reduce
const cartBill=[22,45,34,33,80]
const sumOfCartBill=cartBill.reduce((prev,curr)=>prev+curr,0)
console.log(sumOfCartBill);

//every
const gameScore =[200,300,310,250,150]
//check if all values are numbers
console.log(typeof gameScore[1]);

const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
console.log("check: ", gameScoreCheck);

// const gameScore =[200,300,310,250,150,"jii"]

//  console.log(typeof gameScore[1]);

//  const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
//  console.log("check: ", gameScoreCheck);

// const gameScore =[200,300,310,250,150,"5"]

//  console.log(typeof gameScore[1]);

//  const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
//  console.log("check: ", gameScoreCheck);


//find score above 200(find)

const above200 =gameScore.find((score)=>score>200)
console.log(above200);

//findIndex
const array1 = [5, 12, 8, 130, 44,16];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));

//some
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));

//sort
const months = ['March', 'Jan', 'Feb', 'Dec','April'];
months.sort();
console.log(months);


const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
