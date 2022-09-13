let countEl = document.getElementById("count-el");
let saveEl =document.getElementById("save-el")

console.log(countEl)
console.log(saveEl)

let count = 0;

function add(){
    count = count + 1;
    countEl.innerHTML = count
}
function save(){
   
 let countStr = count + " - "
 saveEl.textContent = saveEl.textContent + countStr;
 count = 0;
 countEl.textContent = 0
 

}
