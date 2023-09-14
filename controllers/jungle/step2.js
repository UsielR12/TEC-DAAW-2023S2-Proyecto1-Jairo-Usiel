const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const fightButton = document.getElementById('fightButton')
const evangelizeButton = document.getElementById('evangelizeButton')
const fightOption = document.getElementById('fightOption')
const evangelizeOption = document.getElementById('evangelizeOption')
const closeFight = document.getElementById('closeFight')
const closeEvangelize = document.getElementById('closeEvangelize')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleFightOption() {
    fightOption.classList.add('show')
}

function handleEvangelizeOption() {
    evangelizeOption.classList.add('show')
}

closeFight.addEventListener('click', () => {
    fightOption.classList.remove('show')
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
});

closeEvangelize.addEventListener('click', () => {
    evangelizeOption.classList.remove('show')
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
});



document.addEventListener("DOMContentLoaded", onLoadDocument)

fightButton.addEventListener('click', handleFightOption)
evangelizeButton.addEventListener('click', handleEvangelizeOption)