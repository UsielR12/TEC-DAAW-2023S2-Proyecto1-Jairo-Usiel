const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const wishesButton = document.getElementById('wishesButton')
const pointsButton = document.getElementById('pointsButton')
const wishesOption = document.getElementById('wishesOption')
const pointsOption = document.getElementById('pointsOption')
const closeWishes = document.getElementById('closeWishes')
const closePoints = document.getElementById('closePoints')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleWishesOption() {
    wishesOption.classList.add('show')
}

function handlePointsOption() {
    pointsOption.classList.add('show')
}

closeWishes.addEventListener('click', () => {
    wishesOption.classList.remove('show')
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
});

closePoints.addEventListener('click', () => {
    pointsOption.classList.remove('show')
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
});


document.addEventListener("DOMContentLoaded", onLoadDocument)

wishesButton.addEventListener('click', handleWishesOption)
pointsButton.addEventListener('click', handlePointsOption)