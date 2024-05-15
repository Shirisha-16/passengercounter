let countEl=document.getElementById("count-el")
let count=0
console.log(countEl)
function increment(){
    count+=1
    countEl.textContent=count
}
let saveEl=document.getElementById("save-el")
console.log(saveEl)
function save(){
    let syn = count+"-"
    saveEl.innerText+=syn
    count=0
    countEl.innerText=count
}