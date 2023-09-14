const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const creepButton = document.getElementById('creepButton')
const cutButton = document.getElementById('cutButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleCreepOption() {
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step4'
}

function handleCutOption() {
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step4'
}



document.addEventListener("DOMContentLoaded", onLoadDocument)


creepButton.addEventListener('click', handleCreepOption)
cutButton.addEventListener('click', handleCutOption)