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
    window.location.href = '/finishAdventure'
}

function handleFish2Option() {
    window.location.href = '/finishAdventure'
}

function handleFish3Option() {
    window.location.href = '/finishAdventure'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)
fish1Button.addEventListener('click', handleFish1Option)
fish2Button.addEventListener('click', handleFish2Option)
fish3Button.addEventListener('click', handleFish3Option)