const powerTwo = (n) => {
    return n**2
}
 function powerCube(powerTwo, n){
    return powerTwo(n) * n
}
//console.log(powerCube(powerTwo,3));

function sayHello(){
    return () => {
        console.log("Hello Ayushi");
        
    }
}

let guessValue =sayHello()
console.log(guessValue);
//guessValue()

const higherOrder = n =>{
    const oneFun = m =>{
        const twoFun = p =>{
            return m+n+p
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(3)(4)(9));

const myNums = [3,4,3,2]

const sumArray = arr => {
let total= 0
arr.forEach(function(element) {
    total += element
});
return total
}
console.log(sumArray(myNums));


function oneMoreHello() {
    console.log("Hello Ayushi!!");
    
}
//setInterval(oneMoreHello,1000)
//setTimeout(oneMoreHello,2000)

function oneMoreHello() {
    console.log("Hello Ayushi!!",Math.random());
    
}
setInterval(oneMoreHello,1000)
