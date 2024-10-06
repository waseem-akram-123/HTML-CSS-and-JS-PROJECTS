// let input = document.querySelector ("#input-box");
// const btn =  document.querySelector ("#btn");

// function calcAge (){

//     let birthDate = new Date (input.value);
//     let d1 = birthDate.getDate();
//     let m1 = birthDate.getMonth()+1;
//     let y1 = birthDate.getFullYear();

//     let today = new Date();
//     let d2 = birthDate.getDate();
//     let m2 = birthDate.getMonth()+1;;
//     let y2 = birthDate.getFullYear();

//     let d3, m3, y3;

//     y3 = y2 - y1;
//     // m3 = m2 - m1;;
//     // d3 = d2 - d1;

//     if (m2 >= m1){
//         m3 = m2 -  m1;
//     }
//     else {
//         y3--;
//         m3 = 12 + m2 - m1;
//     }
//     if (d2 >= d1){
//         d3 = d2 - d1;
//     }
//     else {
//         m3--;
//         d3 = getDaysInMonth (y1, m1) + d2 - d1;
//     }
//     if (m3 < 0){
//         m3 = 11;
//         y3--;
//     }
//     console.log (y3,m3,d3);
// }
// function getDaysInMonth (year, month){
//     return new Date (year, month, 0).getDate();
// }


// btn.addEventlistner ("click", ()=>{
//     calcAge();
// });

let input = document.querySelector ("#input-box");
let display = document.querySelector (".display")

function calcAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    // If today's date is before the birthdate this year, subtract one year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    // let d = age.getDate();
    // let m = age.getMonth()+1;
    // let y = age.getFullYear();
    // console.log (d, m ,y);

    console.log(age);
    
    let p = document.createElement ("p");
    p.innerHTML = `Your age is : ${age}`;
    display.append (p);

}
