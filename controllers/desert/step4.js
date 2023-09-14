const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const waterButton = document.getElementById('waterButton')
const cocacolaButton = document.getElementById('cocacolaButton')
const poisonButton = document.getElementById('poisonButton')
const waterOption = document.getElementById('waterOption')
const cocacolaOption = document.getElementById('cocacolaOption')
const poisonOption = document.getElementById('poisonOption')
const closeWater = document.getElementById('closeWater')
const closeCocacola = document.getElementById('closeCocacola')
const closePoison = document.getElementById('closePoison')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleWaterOption() {
    waterOption.classList.add('show')
}

function handleCocacolaOption() {
    cocacolaOption.classList.add('show')
}

function handlePoisonOption() {
    poisonOption.classList.add('show')
}

closeWater.addEventListener('click', () => {
    waterOption.classList.remove('show')
    const newPoints = parseInt(points) + 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
});

closeCocacola.addEventListener('click', () => {
    cocacolaOption.classList.remove('show')
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
});

closePoison.addEventListener('click', () => {
    poisonOption.classList.remove('show')
    const newPoints = parseInt(points) - 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
});


document.addEventListener("DOMContentLoaded", onLoadDocument)


waterButton.addEventListener('click', handleWaterOption)
cocacolaButton.addEventListener('click', handleCocacolaOption)
poisonButton.addEventListener('click', handlePoisonOption)