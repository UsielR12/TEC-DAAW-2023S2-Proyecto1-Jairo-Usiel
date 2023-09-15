const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const desertButton = document.getElementById('desertButton')
const seaButton = document.getElementById('seaButton')
const jungleButton = document.getElementById('jungleButton')
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('close')

desertButton.addEventListener('click', () => {
    modal_container.classList.add('show')
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
    window.location.href = '/desert'
});



function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleDesertOption() {
    modal_container.classList.add('show')
    localStorage.setItem('scenario', 'desert')
    window.location.href = '/desert'
}

function handleSeaOption() {
    localStorage.setItem('scenario', 'sea')
    window.location.href = '/sea'
}

function handleJungleOption() {
    localStorage.setItem('scenario', 'jungle')
    window.location.href = '/jungle'
}

document.addEventListener("DOMContentLoaded", onLoadDocument)

desertButton.addEventListener('click', handleDesertOption)
seaButton.addEventListener('click', handleSeaOption)
jungleButton.addEventListener('click', handleJungleOption)