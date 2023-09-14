const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const walkButton = document.getElementById('walkButton')
const jumpStonesButton = document.getElementById('jumpStonesButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleWalkOption() {
    window.location.href = '/desert-step4'
}

function handleCJumpStonesOption() {
    window.location.href = '/desert-step4'
}



document.addEventListener("DOMContentLoaded", onLoadDocument)

walkButton.addEventListener('click', handleWalkOption)
jumpStonesButton.addEventListener('click', handleCJumpStonesOption)
