const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const creepButton = document.getElementById('creepButton')
const cutButton = document.getElementById('cutButton')
const creepOption = document.getElementById('creepOption')
const cutOption = document.getElementById('cutOption')
const closeCreep = document.getElementById('closeCreep')
const closeCut = document.getElementById('closeCut')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleCreepOption() {
    creepOption.classList.add('show')
}

function handleCutOption() {
    cutOption.classList.add('show')
}

closeCreep.addEventListener('click', () => {
    creepOption.classList.remove('show')
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step4'
});

closeCut.addEventListener('click', () => {
    cutOption.classList.remove('show')
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step4'
});



document.addEventListener("DOMContentLoaded", onLoadDocument)


creepButton.addEventListener('click', handleCreepOption)
cutButton.addEventListener('click', handleCutOption)