
// const getFromise=()=>{
//     return new Promise((resolve,reject)=>{
//        console.log("hey I am Promise");
//     //    resolve("success")
//     reject("network error")
//     })
// }

// let data=getFromise()

// data.then((res)=>{
//     console.log(res);

// })

// data.catch((err)=>{
//     console.log(err);

// })

// Promise Chaining


// const asyncFunction = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("get data");
//           resolve("success")
//         },4000)
//     })
// }

// let p1=asyncFunction()
// console.log("data1 is loading....");

// p1.then((res)=>{
//    console.log(res);

//    console.log("data2 is loading....");
//    let p2=asyncFunction()
//    p2.then((res)=>{
//     console.log(res);
    
//    })
   
// })

// Async and Await

const asyncFunction = (dataId) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("get data",dataId);
          resolve("success")
        },2000)
    })
}

(async function getData(){
    console.log("data1 is loading...");
   await asyncFunction(1)
   console.log("data2 is loading...");
   await asyncFunction(2)
})()
