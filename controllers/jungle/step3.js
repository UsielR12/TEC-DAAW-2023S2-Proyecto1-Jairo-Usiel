const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const wishesButton = document.getElementById('wishesButton')
const pointsButton = document.getElementById('pointsButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleWishesOption() {
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
}

function handlePointsOption() {
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)

wishesButton.addEventListener('click', handleWishesOption)
pointsButton.addEventListener('click', handlePointsOption)