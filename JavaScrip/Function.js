// function addNumber (num1, num2){
//     // let result= num1 + num2
   
//     return num1 + num2
// }
// const asq = addNumber(2, 4)

// console.log("Rejult : " ,asq)



// function LoginName(usename = "sameer"){
//     if (!usename) {
//         console.log("Please enter the user name");
//         return
//     }
//     return `${usename} is my Name`
// }
// console.log(LoginName("Shahid")); 
 
// let x= new Number("1")
// let y= Number("1")

// console.log(typeof x)
// console.log(typeof y);

// const arr= [1, 2, 3, 4]
// const newAr=arr.reverse()
// console.log(newAr);

// Array.prototype.myRevers= function(){
//     let newArray= [];
//     for(let i=this.length-1; i>=0;  i--){
//         newArray.push(this[i]);
//     }
//     return newArray
// }

// let newArray= arr.myRevers()
// console.log(newArray);


// const Bakra= [1, 3, 5, 7,8, 10]

// Array.prototype.ReverMethod= function(){
//     const NavaArra= []
//     for(let i= this.length-1; i>=0 ; i--){
//         NavaArra.push(this[i])
//     }
//     return NavaArra
// }

// let Result= Bakra.ReverMethod()
// console.log(Result);


// let Color= ["Red", "Blue", "Black", "Orange"]
// let Fruirts= ["Apple", "Greps", "Banana", "Chikku"]

// console.log(Color.push(Fruirts));
// console.log(Color.concat(Fruirts));

// console.log(...Color, ...Fruirts);


// const Peromise1= new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve({name: "Shaid", Password : "1223"})
//     },1000)
// })
// Peromise1.then((e)=>{
//     console.log("Kya a Pahile ayega")
//     console.log(e.name);
// })
// -------------------------------------------------------------------------
//                         Promis Method
// -------------------------------------------------------------------------
// new Promise((resolve, reject)=>{
//     const err= false

//     if(!err){
//        setTimeout(()=>{
//         resolve({Username: 'Shahid', Gmail : 'shahidnadaf@2673'})
//        },2000)
//     }
//     else{
//         reject('Somthging is Wrong')
//     }
// }).then((e)=>{
//     console.log('Kya Juldi Pahile Run Ho Payega');
//     console.log(`UserName : ${e.Username} \nEmail : ${e.Gmail} \n \n`);
// }).catch((er)=>{
//     console.log(`Error : ${er}`);
// }).finally(()=>{
//     console.log("Finally Complete the Code");
// })

// async function GitHub(){
//     const data= await fetch('https://api.github.com/users/Shahidnadaf7348888')
//     const jaso=  data.json()
//     return jaso
// }
// GitHub().then((promise)=>{
//     console.log(promise);
// })
const Git2 = async ()=>{
    const data = await fetch('https://api.github.com/users/Shahidnadaf7348888')
   return data.json()   

}
Git2().then((e)=>{
    console.log(e.login);
}).catch((er)=>{
    console.log(`Error : ${er}`);
})