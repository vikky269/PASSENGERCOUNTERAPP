let countEl = document.getElementById("count-el")
let saveEl =  document.getElementById("save-el")

let count = 0


function increment(){
    count +=  1
    countEl.innerText = count   
}

function save(){
    let entries = count + " - "
    saveEl.textContent += " " + entries
    count = 0
    countEl.innerText = count
}

let firstname = "victor"
let lastname = "Amune"
let fullname = firstname + " " + lastname
console.log(fullname)

let Name = "linda"
let greeting = "Hi, there"
function greetlinda (){
    console.log(greeting +" " + Name)
}
greetlinda()

let myPoints = 3
function add3points(){
    myPoints += 3
}
function remove1point(){
    myPoints -=1
}
add3points()
add3points()
add3points()
remove1point()
remove1point()
console.log(myPoints)


let errorEl = document.getElementById("error")
function error(){
    errorEl.textContent = "Something went wrong, please try again"
}

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2