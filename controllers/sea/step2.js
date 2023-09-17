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
 * Gets references to HTML elements related to surround and return options.
 * @type {HTMLElement}
 */
const surroundButton = document.getElementById('surroundButton')
const returnButton = document.getElementById('returnButton')
const surroundOption = document.getElementById('surroundOption')
const returnOption = document.getElementById('returnOption')
const closeSurround = document.getElementById('closeSurround')
const closeReturn = document.getElementById('closeReturn')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the display of the surround option.
 */
function handleSurroundOption() {
    surroundOption.classList.add('show')
}

/**
 * Handles the display of the return option.
 */
function handleReturnOption() {
    returnOption.classList.add('show')
}

/**
 * Event listener for closing the surround option.
 */
closeSurround.addEventListener('click', () => {
    surroundOption.classList.remove('show')
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step3'
})

/**
 * Event listener for closing the return option.
 */
closeReturn.addEventListener('click', () => {
    returnOption.classList.remove('show')
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step3'
})

/**
 * Event listener for the 'DOMContentLoaded' event, runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument)

/**
 * Event listeners for handling button clicks.
 */
surroundButton.addEventListener('click', handleSurroundOption)
returnButton.addEventListener('click', handleReturnOption)