let Numb1 = 9
let Numb2 = 8
document.getElementById("nd1").textContent= Numb1

document.getElementById("nb2").textContent= Numb2

let  slt = document.getElementById("SmT")

function plus() {
let tl= Numb1 + Numb2 
slt.textContent="Sum: " + tl
}

function minus() {
let tl= Numb1 - Numb2 
slt.textContent="Sum: " + tl
}

function dive() {
let tl= Numb1 / Numb2 
slt.textContent="Sum: " + tl
}
function multi() {
let tl= Numb1 * Numb2 
slt.textContent="Sum: " + tl
}