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
    window.location.href = '/desert-step4'
}

function handleCutOption() {
    window.location.href = '/desert-step4'
}



document.addEventListener("DOMContentLoaded", onLoadDocument)


creepButton.addEventListener('click', handleCreepOption)
cutButton.addEventListener('click', handleCutOption)