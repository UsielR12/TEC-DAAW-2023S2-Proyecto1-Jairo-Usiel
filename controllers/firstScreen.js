const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const desertButton = document.getElementById('desertButton')
const seaButton = document.getElementById('seaButton')
const jungleButton = document.getElementById('jungleButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleDesertOption() {
    window.location.href = '/desert'
}

function handleSeaOption() {
    window.location.href = '/sea'
}

function handleJungleOption() {
    window.location.href = '/jungle'
}

document.addEventListener("DOMContentLoaded", onLoadDocument)

desertButton.addEventListener('click', handleDesertOption)
seaButton.addEventListener('click', handleSeaOption)
jungleButton.addEventListener('click', handleJungleOption)