const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const option1Button = document.getElementById('option1Button')
const option2Button = document.getElementById('option2Button')
const option3Button = document.getElementById('option3Button')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const closeOption1 = document.getElementById('closeOption1')
const closeOption2 = document.getElementById('closeOption2')
const closeOption3 = document.getElementById('closeOption3')

function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleOption1Option() {
    option1.classList.add('show')
}

function handleOption2Option() {
    option2.classList.add('show')
}

function handleOption3Option() {
    option3.classList.add('show')
}

closeOption1.addEventListener('click', () => {
    option1.classList.remove('show')
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
});

closeOption2.addEventListener('click', () => {
    option2.classList.remove('show')
    const newPoints = parseInt(points) + 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
});

closeOption3.addEventListener('click', () => {
    option3.classList.remove('show')
    const newPoints = parseInt(points) - 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
});


document.addEventListener("DOMContentLoaded", onLoadDocument)

option1Button.addEventListener('click', handleOption1Option)
option2Button.addEventListener('click', handleOption2Option)
option3Button.addEventListener('click', handleOption3Option)