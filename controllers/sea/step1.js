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
 * Gets references to HTML elements related to boat and jet ski options.
 * @type {HTMLElement}
 */
const boatButton = document.getElementById('boatButton')
const jetSkiButton = document.getElementById('jetSkiButton')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the selection of the boat option.
 * Redirects to '/sea-step2'.
 */
function handleBoatOption() {
    window.location.href = '/sea-step2'
}

/**
 * Handles the selection of the jet ski option.
 * Redirects to '/sea-step2'.
 */
function handleJetSkiOption() {
    window.location.href = '/sea-step2'
}

/**
 * Event listener for the 'DOMContentLoaded' event, runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument)

/**
 * Event listeners for handling button clicks.
 */
boatButton.addEventListener('click', handleBoatOption)
jetSkiButton.addEventListener('click', handleJetSkiOption)