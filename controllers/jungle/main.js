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
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step1'
}

function handleStickOption() {
    const newPoints = parseInt(points) + 20
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step1'
}

function handleJumpOption() {
    const newPoints = parseInt(points) - 10
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step1'
}

document.addEventListener("DOMContentLoaded", onLoadDocument)

knifeButton.addEventListener('click', handleKnifeOption)
stickButton.addEventListener('click', handleStickOption)
jumpButton.addEventListener('click', handleJumpOption)

