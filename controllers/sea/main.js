const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const swimButton = document.getElementById('swimButton')
const catchButton = document.getElementById('catchButton')
const submarineButton = document.getElementById('submarineButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleSwimOption() {
    const newPoints = parseInt(points) + 20
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step1'
}

function handleCatchOption() {
    const newPoints = parseInt(points) - 10
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step1'
}

function handleSubmarineOption() {
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step1'
}

document.addEventListener("DOMContentLoaded", onLoadDocument)
swimButton.addEventListener('click', handleSwimOption)
catchButton.addEventListener('click', handleCatchOption)
submarineButton.addEventListener('click', handleSubmarineOption)