const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const fish1Button = document.getElementById('fish1Button')
const fish2Button = document.getElementById('fish2Button')
const fish3Button = document.getElementById('fish3Button')


function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleFish1Option() {
    const newPoints = parseInt(points) - 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
}

function handleFish2Option() {
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
}

function handleFish3Option() {
    const newPoints = parseInt(points) + 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)
fish1Button.addEventListener('click', handleFish1Option)
fish2Button.addEventListener('click', handleFish2Option)
fish3Button.addEventListener('click', handleFish3Option)