let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

const meterToFeet = 3.281 //feet
const literToGallon = 0.264 //gallon
const kilogramToPound = 2.204 // pound

convertBtn.addEventListener("click", function () {
  baseValue = inputEl.value
  console.log(baseValue)
  convert();
});

function convert() {
  lengthEl.innerHTML = `${baseValue} meters = ${(
    meterToFeet * baseValue
  ).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(
    3
  )} meters`

  volumeEl.innerHTML = `${baseValue} liters = ${(
    literToGallon * baseValue
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue / literToGallon
  ).toFixed(3)} liters`

  massEl.innerHTML = `${baseValue} kilos = ${(
    kilogramToPound * baseValue
  ).toFixed(3)} pounds | ${baseValue} pounds = ${(
    baseValue / kilogramToPound
  ).toFixed(3)} kilos`
}
