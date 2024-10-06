const notesContainer = document.querySelector (".notes-container");
const deleteBtn = document.querySelector ("#img3");
const createBtn = document.querySelector ("#btn");

let notes = document.querySelectorAll (".input-box");

createBtn.addEventListener ("click",()=>{
    let inputBox = document.createElement ("p");
    let img = document.createElement ("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    // inputBox.style.backgroundColor = "white";

    img.src = "delete.png";
    // img.height = "30px";
    // img.width = "30px";

    notesContainer.appendChild(inputBox);
});