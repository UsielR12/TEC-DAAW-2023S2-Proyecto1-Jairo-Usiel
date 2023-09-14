const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const walkButton = document.getElementById('walkButton')
const jumpStonesButton = document.getElementById('jumpStonesButton')
const walkOption = document.getElementById('walkOption')
const jumpStonesOption = document.getElementById('jumpStonesOption')
const closeWalk = document.getElementById('closeWalk')
const closeJumpStones = document.getElementById('closeJumpStones')


function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleWalkOption() {
    walkOption.classList.add('show')
}

function handleCJumpStonesOption() {
    jumpStonesOption.classList.add('show')
}

closeWalk.addEventListener('click', () => {
    walkOption.classList.remove('show')
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step4'
});

closeJumpStones.addEventListener('click', () => {
    jumpStonesOption.classList.remove('show')
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step4'
});



document.addEventListener("DOMContentLoaded", onLoadDocument)

walkButton.addEventListener('click', handleWalkOption)
jumpStonesButton.addEventListener('click', handleCJumpStonesOption)
