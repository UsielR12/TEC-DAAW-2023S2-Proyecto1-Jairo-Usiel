const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const boatButton = document.getElementById('boatButton')
const jetSkiButton = document.getElementById('jetSkiButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleBoatOption() {
    window.location.href = '/sea-step2'
}

function handleJetSkiOption() {
    window.location.href = '/sea-step2'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)
boatButton.addEventListener('click', handleBoatOption)
jetSkiButton.addEventListener('click', handleJetSkiOption)