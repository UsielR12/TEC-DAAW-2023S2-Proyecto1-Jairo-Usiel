/**
 * Retrieves the score and nickname from local storage.
 * @type {string}
 */
const points = localStorage.getItem('points')
const nickname = localStorage.getItem('nickname')

/**
 * Combines the score and nickname to display information.
 * @type {string}
 */
const info = `${points} pts | ${nickname}`

/**
 * Gets a reference to the HTML element with the ID 'challengeInfo'.
 * @type {HTMLElement}
 */
const challengeInfo = document.getElementById("challengeInfo")

/**
 * Gets references to the desert, sea, and jungle buttons.
 * @type {HTMLButtonElement}
 */
const desertButton = document.getElementById('desertButton')
const seaButton = document.getElementById('seaButton')
const jungleButton = document.getElementById('jungleButton')

/**
 * Gets references to modal elements.
 * @type {HTMLElement}
 */
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('close')

/**
 * Function that runs when the document is loaded.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the desert option.
 */
function handleDesertOption() {
    localStorage.setItem('scenario', 'desert')
    window.location.href = '/desert'
}

/**
 * Handles the sea option.
 */
function handleSeaOption() {
    localStorage.setItem('scenario', 'sea')
    window.location.href = '/sea'
}

/**
 * Handles the jungle option.
 */
function handleJungleOption() {
    localStorage.setItem('scenario', 'jungle')
    window.location.href = '/jungle'
}

/**
 * Listens for the 'DOMContentLoaded' event and runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument)

/**
 * Listens for the 'click' event on the buttons and runs the corresponding functions.
 */
desertButton.addEventListener('click', handleDesertOption)
seaButton.addEventListener('click', handleSeaOption)
jungleButton.addEventListener('click', handleJungleOption)
