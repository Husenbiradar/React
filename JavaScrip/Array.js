// const marvel_H= ["Hulk", "SpiderMan", "IronMan" ]
// const DC_H= ["upperMan", "Flash", "EquaMan"]

// marvel_H.push(DC_H)
// const allHero=marvel_H.concat(DC_H)


// const newHero= [...marvel_H, ...DC_H]
// console.log(newHero)


// const num= [1, 2, 3, 4, [12, 4, 55, 2], 22, 6, 4,[1, 2,3,[2, 3, 4]]]
// const realNo= num.flat(Infinity)
// console.log(realNo)


// const Marvel=["SpiderMan", "IronMan", "Hokai", "Banner"]
// const Dc=["SupperMan", "Flash", "BatMan", "Equaman"]

// const all = Marvel.concat(Dc)
// const all= [...Marvel, ...Dc]
// console.log(all)


// const promisOne = new Promise(function(resolve, reject ){
//     setTimeout(()=>{
//         console.log("Async Promise task complet ")
//         resolve()
//     },3000)
// })
// promisOne.then(()=>{
//     console.log("Promise Resolved")
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Promis Two ")
//         resolve()
//     },2000)
// }).then(function(){
//     console.log('Promise Rsolve throw')
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({UserName : "Shahid", Password : "12234"})
//     },1000)
// }).then(function(user){
//     console.log(user.Password, user)
// })



// const Promi= new Promise(function(resolve, reject){
//    setTimeout(function(){
//     const Error= false;    
//     if(!Error){
//         resolve({UserName :'Shafeek', Pasword : "123"})
//     }else{
//         reject("Somthing is Error")
//     }
//    },1000) 
// })
// Promi.then(function(user){
//     console.log(user)
//     return user.UserName
// }).then(function(MyName){
//     console.log(MyName)
// }).catch(function(err){
//     console.log(err)
// })



// const PromisFive =new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         const Err= false
        
//         if(!Err){
//             resolve({name : "Shahid", Password : "1234"})
//         }
//         else{
//             reject("Error : Somthing is wrong")
//         }
//     },1000)

// })

//  ******** Then Catch Finall Method **********

// PromisFive.then(function(user){
//     console.log(user)
//     return user.name
// }).then(function(myname){
//     console.log(myname)
// }).catch(function(err){
//     console.log(err)
// }).finally(()=>{
//     console.log("The Promis is ieder Resolvd or Reject ")
// })



//  ******** Async Method **********
// async function PromiseRecounsumeing(){
//     try {
//         const Resold= await PromisFive
//         console.log(Resold.Password)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// PromiseRecounsumeing()

async function GetAllUser(){
    try{
        const Response= await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await Response.json()
            console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
GetAllUser()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Fetching Proccess Sucsser or Error")
// })

const ass=  fetch('https://jsonplaceholder.typicode.com/users')
.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
})