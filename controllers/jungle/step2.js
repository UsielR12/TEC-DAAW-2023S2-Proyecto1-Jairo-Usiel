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
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
}

function handleEvangelizeOption() {
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)

fightButton.addEventListener('click', handleFightOption)
evangelizeButton.addEventListener('click', handleEvangelizeOption)