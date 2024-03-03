const user= {
    userName : 'Ikra',
    price : 1212,

    welcomeMassage : function LoginName(){
        
        console.log(`${this.userName} , Wellcome to the world`);
        console.log(this)
    }
}

// user.welcomeMassage()
// user.userName = 'Shahid'
// user.welcomeMassage()

// function chai(){
//     const name = 'SBakra'
//     console.log(this.name)
// }
// chai()


// const arr= (num1, num2)=>  {return num1 + num2}

// console.log(arr(2, 5))


// function say(){
//     return this.name
// }

// const tell= ()=>{
//     return this.name
// }

// const person={
//     name : 'Shahid',
//     age :22,
//     say,
//     tell,
// }
// console.log(person.say())
// console.log(person.tell());


// function login(user){
//     return  user
// }
// const condi= login('shahid')

// if(condi==='shahid'){
//     console.log(`wellcome ${condi}`)
// }
// else{
//     console.log('Program is not execute')
// }


// const obj = {
//     username : 'chai',
//     pessword : 1222,

//     register : function admin(){
//         console.log(`Wellcome ${this.username} `)
//     }
// }

// obj.register()
// obj.username = 'shahid';
// obj.register()


function anwer(){
    console.log(`Well come ${this.username}`);
}

const tanver=()=>{
    console.log(`well come ${this.username2}`);
}

const Obj2={
    username : 'Buddi',
    username2 : 'Tanveer',
    anwer,
    tanver,
}
Obj2.anwer()
Obj2.tanver()
