const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const quicksandButton = document.getElementById('quicksandButton')
const catusButton = document.getElementById('catusButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleQuicksandOption() {
    window.location.href = '/desert-step2'
}

function handleCatusOption() {
    window.location.href = '/desert-step3'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)

quicksandButton.addEventListener('click', handleQuicksandOption)
catusButton.addEventListener('click', handleCatusOption)