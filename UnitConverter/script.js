const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const convertedLength = document.getElementById("converted-length")
const convertedVolume = document.getElementById("converted-volume")
const convertedMass = document.getElementById("converted-mass")

convertBtn.addEventListener("click", function() {
    convertLength()
    convertVolume()
    convertMass()
})


function convertLength() {
    convertedLength.innerHTML =
        `
            ${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters
        `
}

function convertVolume() {
    convertedVolume.innerHTML =
        `
            ${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters
        `
}

function convertMass() {
    convertedMass.innerHTML =
        `
            ${inputEl.value} kilograms = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilograms
        `
}