

const input = document.querySelector ("#input");
const button = document.querySelector ("#btn");
const listContainer = document.querySelector (".list-container");

function addTask (){
    
    if (input.value === ""){
        alert ("you must add some task !");
    }
    else {
        let li = document.createElement ("li");
        li.innerHTML = input.value;
        listContainer.append (li);

        let span = document.createElement ("span");
        span.innerHTML = "\u00d7";
        li.append (span);

    }
    input.value = ""; // dint understood
}
listContainer.addEventListener ("click", function (e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle ("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
// button.addEventListener ("click", ()=>{
//     addTask (input.value);
// });
