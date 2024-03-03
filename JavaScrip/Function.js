// function addNumber (num1, num2){
//     // let result= num1 + num2
   
//     return num1 + num2
// }
// const asq = addNumber(2, 4)

// console.log("Rejult : " ,asq)



function LoginName(usename = "sameer"){
    if (!usename) {
        console.log("Please enter the user name");
        return
    }
    return `${usename} is my Name`
}
console.log(LoginName("Shahid")); 
 
