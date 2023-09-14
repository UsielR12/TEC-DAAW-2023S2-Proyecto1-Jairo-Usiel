const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const knifeButton = document.getElementById('knifeButton')
const stickButton = document.getElementById('stickButton')
const jumpButton = document.getElementById('jumpButton')
const knifeOption = document.getElementById('knifeOption')
const stickOption = document.getElementById('stickOption')
const jumpOption = document.getElementById('jumpOption')
const closeKnife = document.getElementById('closeKnife')
const closeStick = document.getElementById('closeStick')
const closeJump = document.getElementById('closeJump')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleKnifeOption() {
    knifeOption.classList.add('show')
}

function handleStickOption() {
    stickOption.classList.add('show')
}

function handleJumpOption() {
    jumpOption.classList.add('show')
}

closeKnife.addEventListener('click', () => {
    knifeOption.classList.remove('show')
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step1'
});

closeStick.addEventListener('click', () => {
    stickOption.classList.remove('show')
    const newPoints = parseInt(points) + 20
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step1'
});

closeJump.addEventListener('click', () => {
    jumpOption.classList.remove('show')
    const newPoints = parseInt(points) - 10
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step1'
});

document.addEventListener("DOMContentLoaded", onLoadDocument)

knifeButton.addEventListener('click', handleKnifeOption)
stickButton.addEventListener('click', handleStickOption)
jumpButton.addEventListener('click', handleJumpOption)