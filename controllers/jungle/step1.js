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
 * Gets references to HTML elements related to red and blue options.
 * @type {HTMLElement}
 */
const redButton = document.getElementById('redButton')
const blueButton = document.getElementById('blueButton')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the red option.
 * Redirects to '/jungle-step2'.
 */
function handleRedOption() {
    window.location.href = '/jungle-step2'
}

/**
 * Handles the blue option.
 * Redirects to '/jungle-step3'.
 */
function handleBlueOption() {
    window.location.href = '/jungle-step3'
}

/**
 * Event listener for the 'DOMContentLoaded' event, runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument)

/**
 * Event listeners for handling button clicks.
 */
blueButton.addEventListener('click', handleBlueOption)
redButton.addEventListener('click', handleRedOption)