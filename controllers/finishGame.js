const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

document.addEventListener("DOMContentLoaded", onLoadDocument)