const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const waterButton = document.getElementById('waterButton')
const cocacolaButton = document.getElementById('cocacolaButton')
const poisonButton = document.getElementById('poisonButton')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleWaterOption() {
    const newPoints = parseInt(points) + 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
}

function handleCocacolaOption() {
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
}

function handlePoisonOption() {
    const newPoints = parseInt(points) - 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)


waterButton.addEventListener('click', handleWaterOption)
cocacolaButton.addEventListener('click', handleCocacolaOption)
poisonButton.addEventListener('click', handlePoisonOption)