const inputBox = document.querySelector("#input-box");
const btn = document.querySelector("#btn");

const copyBtn = document.querySelector ("#img1");

const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "@#$%&*";
const allChars = upperCase + lowerCase + number + symbol;

// function createPassword (){
//     let password = "";
//     password += upperCase [Math.floor (Math.random()*upperCase.length)];
//     password += lowerCase [Math.floor (Math.random()*lowerCase.length)];
//     password += number [Math.floor (Math.random()*number.length)];
//     password += symbol [Math.floor (Math.random()*symbol.length)];

//     while (length >= password.length){
//         password += allChars [Math.floor (Math.random()*allChars.length)];
//     }
//     inputBox.value = password;
// }
function copyPassword (){
    inputBox.select();
    document.execCommand("copy");
}

function createPassword (length){
    let password = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVW123456789XYZabcdefghijklmnopq@#$%&*rstuvwxyz";

    for (let i=0; i<length; i++){
        const randomNo = Math.floor(Math.random() * characters.length);
        password = password + characters.charAt (randomNo);
    }
    inputBox.value = password;
}

btn.addEventListener ("click", ()=>{
    createPassword(12);
});

copyBtn.addEventListener ("click", ()=>{
    copyPassword();
});