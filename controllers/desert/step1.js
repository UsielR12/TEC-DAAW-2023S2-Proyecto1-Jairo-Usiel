/**
 * Retrieves the 'points' and 'nickname' from local storage.
 * @type {string}
 */
const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')
const info = `${points} pts | ${nickname}`

/**
 * Gets a reference to the HTML element with the ID 'challengeInfo'.
 * @type {HTMLElement}
 */
const challengeInfo = document.getElementById("challengeInfo")

/**
 * Gets references to HTML elements related to quicksand and cactus options.
 * @type {HTMLElement}
 */
const quicksandButton = document.getElementById('quicksandButton')
const cactusButton = document.getElementById('cactusButton')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the quicksand option.
 * Redirects to '/desert-step2'.
 */
function handleQuicksandOption() {
    window.location.href = '/desert-step2'
}

/**
 * Handles the cactus option.
 * Redirects to '/desert-step3'.
 */
function handleCactusOption() {
    window.location.href = '/desert-step3'
}

/**
 * Event listener for the 'DOMContentLoaded' event, runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument)

/**
 * Event listeners for handling button clicks.
 */
quicksandButton.addEventListener('click', handleQuicksandOption)
cactusButton.addEventListener('click', handleCactusOption)