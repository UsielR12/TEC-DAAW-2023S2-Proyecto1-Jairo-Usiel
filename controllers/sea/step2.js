const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const surroundButton = document.getElementById('surroundButton')
const returnButton = document.getElementById('returnButton')
const surroundOption = document.getElementById('surroundOption')
const returnOption = document.getElementById('returnOption')
const closeSurround = document.getElementById('closeSurround')
const closeReturn = document.getElementById('closeReturn')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleSurroundOption() {
    surroundOption.classList.add('show')
}

function handleReturnOption() {
    returnOption.classList.add('show')
}

closeSurround.addEventListener('click', () => {
    surroundOption.classList.remove('show')
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step3'
});

closeReturn.addEventListener('click', () => {
    returnOption.classList.remove('show')
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step3'
});


document.addEventListener("DOMContentLoaded", onLoadDocument)
surroundButton.addEventListener('click', handleSurroundOption)
returnButton.addEventListener('click', handleReturnOption)