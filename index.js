let input
const meter = 3.281 //feet
const liter = 0.264 //gallon
const kilogram = 2.204 // pound

let btnEl = document.getElementById("btn")

btnEl.addEventListener("click", function(){
  input = document.getElementById("input").value
  convert()
})

function convert() {

let length = document.getElementById("length")
length.innerHTML = `${input} meters = ${(meter * input).toFixed(3)} feet | ${input} feet = ${(input / meter).toFixed(3)} meters`

let volume = document.getElementById("volume")
volume.innerHTML = `${input} liters = ${(liter * input).toFixed(3)} gallons | ${input} gallons = ${(input / liter).toFixed(3)} liters`

let mass = document.getElementById("mass")
mass.innerHTML = `${input} kilos = ${(kilogram * input).toFixed(3)} pounds | ${input} pounds = ${(input / kilogram).toFixed(3)} kilos`


}