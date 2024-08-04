// let a;
// a = 20;
// console.log(typeof (a));

let man
man = {
    name:"siddhu",
    dob:"3112005"
}
// console.log(man.dob)
// console.log(man)
// console.log(man.name||"data found")
// console.log(man.name&&"data found")
//console.log(!!(man.name))
//  if(!man.name){
//      console.log(man.name)
//  }else(man.dob)
//  {
//     console.log(man.dob)
//  }
// let num=1
// switch(num)
// {
//     case 11:console.log(man.name)
//            break;
//     case 2:console.log(man.dob)       
//            break;
//     default:console.log("no data")       
// }
// let toggle={

// }
// let arr=[12,43,776,35,32]

// for(let i=0;i<5;i++){
//     console.log(arr[i])
// }
// for(let c in arr){
//     console.log(c)
// }
// for(let c of arr){
//     console.log(c,)
// }
// for(let c in arr){
//     console.log(c,arr[c])
// }
// let i=1
// while(i<5){
//     console.log(i)
//     i++
// }
var a="siddhu"
var b=25
// console.log(a + " " + b)
// console.log(a.indexOf("dhu"))
 //console.log(a.lastIndexOf("d"))
// console.log(a.length)
// console.log(a.slice(2,5))
// console.log(a.split('d'))
// console.log(typeof(b))
// var b = String(b)
// console.log(typeof(b))
// console.log(typeof(null))
// console.log(a.replace("si","SI"))
// console.log(Math.tan(1))
// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i])
// }
//let names = ["sidh","thin","thick"]
//let map = names?.map((val) => val+"club")
//names.unshift("becky")    ---------------------------
//names.shift()        ----------------------------
//let filter =names?.filter((val) => val === "")
 //console.log(map)

//arrray methods
//  names.push("harsh")
// console.log(names)
//  names.pop()
//  console.log(names)
//  console.log(names.join('-'))
//  console.log(names.indexOf("sidh"))
 //console.log(names.concat("raj","john","tom"))


//let array = [1,2,3,4,5,3,2,1]
//  let sum = array.reduce((acc,curr) => (acc + curr),0)
//  console.log(sum)
// console.log(array.reverse())
//  //let big = math.max[...array]
//  //console.log(big)
//  console.log(array.sort())



// let str = "siddhu"
//  for(i=str.length;i>=0;i--)
//  {
//      console.log(str[i])
//  }

const teams={
    name:'siddhu',
    branch:'aiml',
    college:'srkr',
    team:'ast'
}


// for (let x in teams){
//     console.log(x + ":" + teams[x])
// }

// for(let [key,val] of Object.entries(teams)){
//     console.log(key + ":" + val)
//     console.log(key + ":" + teams[key])

// }

// Object.keys(teams).forEach(val => {
//     console.log(val + ":" + teams[val])
// })

// Object.values(teams).forEach(val => {
//     console.log(val)
// })

// Object.keys(teams).forEach(car => {
//     console.log(car)
// })


console.log(sum())

function sum(){
    return 20+30
}

//anonymus fun
const fun = function(){
    return 2+21
}
console.log(fun())

//arrow
const add=()=>{return 21+22}
console.log(add())

//async fun
const Async=async()=>{return 20+30}
console.log(Async())


