const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")
const fish1Button = document.getElementById('fish1Button')
const fish2Button = document.getElementById('fish2Button')
const fish3Button = document.getElementById('fish3Button')
const fish1Option = document.getElementById('fish1Option')
const fish2Option = document.getElementById('fish2Option')
const fish3Option = document.getElementById('fish3Option')
const closeFish1 = document.getElementById('closeFish1')
const closeFish2 = document.getElementById('closeFish2')
const closeFish3 = document.getElementById('closeFish3')



function onLoadDocument() {
    challengeInfo.innerHTML = info
}

function handleFish1Option() {
    fish1Option.classList.add('show')
}

function handleFish2Option() {
    fish2Option.classList.add('show')
}

function handleFish3Option() {
    fish3Option.classList.add('show')
}

closeFish1.addEventListener('click', () => {
    fish1Option.classList.remove('show')
    const newPoints = parseInt(points) - 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
});

closeFish2.addEventListener('click', () => {
    fish2Option.classList.remove('show')
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
});

closeFish3.addEventListener('click', () => {
    fish3Option.classList.remove('show')
    const newPoints = parseInt(points) + 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
});



document.addEventListener("DOMContentLoaded", onLoadDocument)
fish1Button.addEventListener('click', handleFish1Option)
fish2Button.addEventListener('click', handleFish2Option)
fish3Button.addEventListener('click', handleFish3Option)