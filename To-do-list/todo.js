let ul = document.querySelector("ul");
let input = document.querySelector("input");
let addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    if(input.value != "") {
        item.appendChild(delbtn);
        ul.appendChild(item); 
        input.value = "";
    }
});


ul.addEventListener("click", function(event) {                     //  Event delegation = handling child events using a parent element.
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    };
});












// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns) {
//     delbtn.addEventListener("click", function() {                     // this works only with existing
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// };