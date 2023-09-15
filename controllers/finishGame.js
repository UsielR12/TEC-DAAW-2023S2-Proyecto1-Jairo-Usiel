const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

const challengeInfo = document.getElementById("challengeInfo")

const endOfGameMessage = document.getElementById('endOfGameMessage')
const finalScore = document.getElementById('finalScore')
const endOfGameImage = document.getElementById('endOfGameImage')

function handleEndOfGameDesert() {
    if (points < 100) {
        endOfGameMessage.innerHTML = "¡Lo sentimos! No lograste sobrevivir al desierto"
        finalScore.innerHTML = points
        endOfGameImage.src = "/images/scenarios/desert/DieDesert.jpg"
    } else if(points >= 100 && points < 200) {
        endOfGameMessage.innerHTML = "¡Felicidades! Lograste sobrevivir al desierto"
        finalScore.innerHTML = points
        endOfGameImage.src = "/images/scenarios/desert/SurviveDesert.jpg"
    } else {
        endOfGameMessage.innerHTML = "¡Felicidades! Te coronaste como el rey del desierto"
        finalScore.innerHTML = points
        endOfGameImage.src = "/images/scenarios/desert/ConquerDesert.jpg"
    }
}

function handleEndOfGameSea() {
    if (points < 100) {
        endOfGameMessage.innerHTML = "¡Lo sentimos! No lograste sobrevivir al mar"
        finalScore.innerHTML = points
        endOfGameImage.src = "/images/scenarios/sea/DieSea.jpg"
    }
    else if(points >= 100 && points < 200) {
        endOfGameMessage.innerHTML = "¡Felicidades! Lograste sobrevivir al mar"
        finalScore.innerHTML = points
        endOfGameImage.src = "/images/scenarios/sea/SurviveSea.jpg"
    } else {
        endOfGameMessage.innerHTML = "¡Felicidades! Te coronaste como el rey del mar"
        finalScore.innerHTML = points
        endOfGameImage.src = "/images/scenarios/sea/ConquerSea.jpg"
    }
}

function handleEndOfGameJungle() {
    if (points < 100) {
        endOfGameMessage.innerHTML = "¡Lo sentimos! No lograste sobrevivir a la jungla"
        finalScore.innerHTML = points
        endOfGameImage.src = "/images/scenarios/jungle/DieJungle.jpg"
    }
    else if(points >= 100 && points < 200) {
        endOfGameMessage.innerHTML = "¡Felicidades! Lograste sobrevivir a la jungla"
        finalScore.innerHTML = points
        endOfGameImage.src = "/images/scenarios/jungle/SurviveJungle.jpg"
    } else {
        endOfGameMessage.innerHTML = "¡Felicidades! Te coronaste como el rey de la jungla"
        finalScore.innerHTML = points
        endOfGameImage.src = "/images/scenarios/jungle/ConquerJungle.jpg"
    }
}

function handleEndOfGame() {
    const scenario = localStorage.getItem('scenario')
    if (scenario === 'desert') {
        handleEndOfGameDesert()
    } else if (scenario === 'sea') {
        handleEndOfGameSea()
    } else {
        handleEndOfGameJungle()
    }
}

function onLoadDocument() {
    challengeInfo.innerHTML = info
    handleEndOfGame()
}

document.addEventListener("DOMContentLoaded", onLoadDocument)