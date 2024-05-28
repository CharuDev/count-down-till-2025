// let a=[
//     ["john",20],
//     ["chii",78],
//     ["tui",90]
// ]

// a.forEach(element => {
//     element.forEach(val=>{
//         console.log(val)
//     })
// });

// for(let ar of a){
//     for(i of ar){
//         console.log(i)
//     }
// }


// copy and spread
// let arr1=["john","rohan","jou"];
// let arr2=[...arr1]
// arr1.push("berg")

// console.log(arr1);
// console.log(arr2)

// array desturcting

// let arr1=["john","rohan","jopi"];
// let[item1,item2,...item3]=arr1
// console.log(item1);
// console.log(item2);
// console.log(item3)

// objects

// let obj1={
//     name:"charu",
//     age:21,
//     fun:function(){
//         console.log("i am function")
//     }
// }
// // obj1.key="item"
// // obj1.fun()
// for(let i in obj1){
//     console.log(obj1[i])
// }

// object inside array
// let a =[
//     {user:1,name:"tate"},
//     {user:2,name:"shade"},
//     {user:3,name:"char"}
// ]
// // for(let i in a){
// //     console.log(a[i])
// // }
// let [item1,item2]=a;
// console.log(item1)

// function

// function fun(){
//     console.log("i am function1");
//     function fun2(){
//         console.log("i am fun2")
//     }
//     fun2()
// }
// fun()

// Lexial scope
// function fun(){
//     var a=1;
//     console.log("this si sfunction", a);
//     function fun2(){
//         console.log("this is function2",a);
//     }
//     fun2()
// }
// fun()

// debugger

// function fun(){
//     debugger;
//     for (let i=0;i<5;i++){
//         console.log(i)
//     }
// }
// fun()


// sets
// const arr=[10,20,30,40];
// console.log(arr)

//  const s= new Set([10,20,30]);//unique value
//  console.log(s);

//  length=0;
//  for(let ele of s){
//     length++;
//  }
//  console.log(length)

// map

// var map1=new Map([[1,"one"],
// ["fname","mickey"],
// ["whole",[0,5,6,7]]
// ])

// console.log(map1.get("fname"))

// this

// var obj1={
//     fname:"john",
//     age:34,
//     fun:function(){
//         console.log(this.fname)
//     }
// }
// obj1.fun()

// constructor
// function User(name){
//     this.name=name
// }
// let person = new User("jack")
// console.log(person.name)

// promise
// function fun(task){
//     return new Promise((resolve,reject)=>{
//         if(task){
//             resolve("completed")
//         }
//         else{
//             reject("no completed")
//         }
//     })
// }


