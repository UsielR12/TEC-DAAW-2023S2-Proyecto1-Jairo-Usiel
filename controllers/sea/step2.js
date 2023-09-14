const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const surroundButton = document.getElementById('surroundButton')
const returnButton = document.getElementById('returnButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleSurroundOption() {
    window.location.href = '/sea-step3'
}

function handleReturnOption() {
    window.location.href = '/sea-step3'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)
surroundButton.addEventListener('click', handleSurroundOption)
returnButton.addEventListener('click', handleReturnOption)