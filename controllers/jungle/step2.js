const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const fightButton = document.getElementById('fightButton')
const evangelizeButton = document.getElementById('evangelizeButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleFightOption() {
    window.location.href = '/jungle-step4'
}

function handleEvangelizeOption() {
    window.location.href = '/jungle-step4'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)

fightButton.addEventListener('click', handleFightOption)
evangelizeButton.addEventListener('click', handleEvangelizeOption)