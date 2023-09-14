const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const knifeButton = document.getElementById('knifeButton')
const stickButton = document.getElementById('stickButton')
const jumpButton = document.getElementById('jumpButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleKnifeOption() {
    window.location.href = '/desert-step1'
}

function handleStickOption() {
    window.location.href = '/desert-step1'
}

function handleJumpOption() {
    window.location.href = '/desert-step1'
}

document.addEventListener("DOMContentLoaded", onLoadDocument)

knifeButton.addEventListener('click', handleKnifeOption)
stickButton.addEventListener('click', handleStickOption)
jumpButton.addEventListener('click', handleJumpOption)