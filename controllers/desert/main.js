const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

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