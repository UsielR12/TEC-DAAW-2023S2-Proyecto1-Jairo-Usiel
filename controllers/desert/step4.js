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
    window.location.href = '/finishAdventure'
}

function handleCocacolaOption() {
    window.location.href = '/finishAdventure'
}

function handlePoisonOption() {
    window.location.href = '/finishAdventure'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)


waterButton.addEventListener('click', handleWaterOption)
cocacolaButton.addEventListener('click', handleCocacolaOption)
poisonButton.addEventListener('click', handlePoisonOption)