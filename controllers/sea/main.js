const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const swimButton = document.getElementById('swimButton')
const catchButton = document.getElementById('catchButton')
const submarineButton = document.getElementById('submarineButton')
const swimOption = document.getElementById('swimOption')
const catchOption = document.getElementById('catchOption')
const submarineOption = document.getElementById('submarineOption')
const closeSwim = document.getElementById('closeSwim')
const closeCatch = document.getElementById('closeCatch')
const closeSubmarine = document.getElementById('closeSubmarine')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleSwimOption() {
    swimOption.classList.add('show')
}

function handleCatchOption() {
    catchOption.classList.add('show')
}

function handleSubmarineOption() {
    submarineOption.classList.add('show')
}

closeSwim.addEventListener('click', () => {
    swimOption.classList.remove('show')
    const newPoints = parseInt(points) + 20
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step1'
});

closeCatch.addEventListener('click', () => {
    catchOption.classList.remove('show')
    const newPoints = parseInt(points) - 10
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step1'
});

closeSubmarine.addEventListener('click', () => {
    submarineOption.classList.remove('show')
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step1'
});

document.addEventListener("DOMContentLoaded", onLoadDocument)
swimButton.addEventListener('click', handleSwimOption)
catchButton.addEventListener('click', handleCatchOption)
submarineButton.addEventListener('click', handleSubmarineOption)