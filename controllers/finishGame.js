/**
 * Retrieves the 'points' and 'nickname' from local storage.
 * @type {string}
 */
const points = localStorage.getItem('points');
const nickname = localStorage.getItem('nickname');
const info = `${points} pts | ${nickname}`;

/**
 * Gets a reference to the HTML element with the ID 'challengeInfo'.
 * @type {HTMLElement}
 */
const challengeInfo = document.getElementById("challengeInfo");

/**
 * Gets references to HTML elements related to the end of the game.
 * @type {HTMLElement}
 */
const endOfGameMessage = document.getElementById('endOfGameMessage');
const finalScore = document.getElementById('finalScore');
const endOfGameImage = document.getElementById('endOfGameImage');

/**
 * Handles the end of the game for the desert scenario.
 */
function handleEndOfGameDesert() {
    if (points < 100) {
        endOfGameMessage.innerHTML = "Sorry! You didn't survive the desert";
        finalScore.innerHTML = points;
        endOfGameImage.src = "/images/scenarios/desert/DieDesert.jpg";
    } else if (points >= 100 && points < 200) {
        endOfGameMessage.innerHTML = "Congratulations! You survived the desert";
        finalScore.innerHTML = points;
        endOfGameImage.src = "/images/scenarios/desert/SurviveDesert.jpg";
    } else {
        endOfGameMessage.innerHTML = "Congratulations! You became the desert king";
        finalScore.innerHTML = points;
        endOfGameImage.src = "/images/scenarios/desert/ConquerDesert.jpg";
    }
}

/**
 * Handles the end of the game for the sea scenario.
 */
function handleEndOfGameSea() {
    if (points < 100) {
        endOfGameMessage.innerHTML = "Sorry! You didn't survive the sea";
        finalScore.innerHTML = points;
        endOfGameImage.src = "/images/scenarios/sea/DieSea.jpg";
    } else if (points >= 100 && points < 200) {
        endOfGameMessage.innerHTML = "Congratulations! You survived the sea";
        finalScore.innerHTML = points;
        endOfGameImage.src = "/images/scenarios/sea/SurviveSea.jpg";
    } else {
        endOfGameMessage.innerHTML = "Congratulations! You became the sea king";
        finalScore.innerHTML = points;
        endOfGameImage.src = "/images/scenarios/sea/ConquerSea.jpg";
    }
}

/**
 * Handles the end of the game for the jungle scenario.
 */
function handleEndOfGameJungle() {
    if (points < 100) {
        endOfGameMessage.innerHTML = "Sorry! You didn't survive the jungle";
        finalScore.innerHTML = points;
        endOfGameImage.src = "/images/scenarios/jungle/DieJungle.jpg";
    } else if (points >= 100 && points < 200) {
        endOfGameMessage.innerHTML = "Congratulations! You survived the jungle";
        finalScore.innerHTML = points;
        endOfGameImage.src = "/images/scenarios/jungle/SurviveJungle.jpg";
    } else {
        endOfGameMessage.innerHTML = "Congratulations! You became the jungle king";
        finalScore.innerHTML = points;
        endOfGameImage.src = "/images/scenarios/jungle/ConquerJungle.jpg";
    }
}

/**
 * Handles the end of the game based on the selected scenario.
 */
function handleEndOfGame() {
    const scenario = localStorage.getItem('scenario');
    if (scenario === 'desert') {
        handleEndOfGameDesert();
    } else if (scenario === 'sea') {
        handleEndOfGameSea();
    } else {
        handleEndOfGameJungle();
    }
}

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info and handles the end of the game.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info;
    handleEndOfGame();
}

/**
 * Listens for the 'DOMContentLoaded' event and runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument);
