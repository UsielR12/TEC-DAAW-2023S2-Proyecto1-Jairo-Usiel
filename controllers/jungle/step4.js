const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const option1Button = document.getElementById('option1Button')
const option2Button = document.getElementById('option2Button')
const option3Button = document.getElementById('option3Button')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleOption1Option() {
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
}

function handleOption2Option() {
    const newPoints = parseInt(points) + 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
}

function handleOption3Option() {
    const newPoints = parseInt(points) - 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
}


document.addEventListener("DOMContentLoaded", onLoadDocument)

option1Button.addEventListener('click', handleOption1Option)
option2Button.addEventListener('click', handleOption2Option)
option3Button.addEventListener('click', handleOption3Option)