//how to define regEx
let pattern ='pw'
let regExOne = new RegExp(pattern)

let flag ='gi'
let regExTwo = new RegExp(pattern, flag)
//regEx
let  regExThree = /pw/gi
const strToCheck ="pw is growing at a rapid speed and recently they are working on pwskills to create skills based pw content"
const result = regExThree.test(strToCheck)
console.log(result);
//----

//string
//match
const anotherResult = strToCheck.match(regExThree) 
console.log(anotherResult);

//replace
const  oneMoreResult = strToCheck.replace(regExThree, 'P-W')
console.log(oneMoreResult);

// const webUrl = "http://pwskills.com/hitesh%20choudhary"
// const useableUrl = webUrl.replace(/%20/, '-')
// console.log(useableUrl);

// const webUrl = "http://pwskills.com/hitesh%20choudhary"
// const useableUrl = webUrl.replace(/%\d0/, '-')
// console.log(useableUrl);

// const webUrl = "http://pwskills.com/hitesh%21choudhary"
//  const useableUrl = webUrl.replace(/%\d0/, '-')
//  console.log(useableUrl);

 const webUrl = "http://pwskills.com/hitesh%21choudhary"
 const useableUrl = webUrl.replace(/%\d\d/, '-')
console.log(useableUrl);




