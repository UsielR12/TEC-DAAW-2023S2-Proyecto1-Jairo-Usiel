const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const redButton = document.getElementById('redButton')
const blueButton = document.getElementById('blueButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleRedOption() {
    window.location.href = '/jungle-step2'
}

function handleBlueOption() {
    window.location.href = '/jungle-step3'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)

blueButton.addEventListener('click', handleBlueOption)
redButton.addEventListener('click', handleRedOption)