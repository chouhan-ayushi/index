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

//shopping cart
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
//some
//sort