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
 * Gets references to HTML elements related to walking and jumping stones options.
 * @type {HTMLElement}
 */
const walkButton = document.getElementById('walkButton')
const jumpStonesButton = document.getElementById('jumpStonesButton')
const walkOption = document.getElementById('walkOption')
const jumpStonesOption = document.getElementById('jumpStonesOption')
const closeWalk = document.getElementById('closeWalk')
const closeJumpStones = document.getElementById('closeJumpStones')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the walking option.
 */
function handleWalkOption() {
    walkOption.classList.add('show')
}

/**
 * Handles the jumping stones option.
 */
function handleJumpStonesOption() {
    jumpStonesOption.classList.add('show')
}

/**
 * Event listener for closing the walking option.
 */
closeWalk.addEventListener('click', () => {
    walkOption.classList.remove('show')
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step4'
})

/**
 * Event listener for closing the jumping stones option.
 */
closeJumpStones.addEventListener('click', () => {
    jumpStonesOption.classList.remove('show')
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step4'
})

/**
 * Event listener for the 'DOMContentLoaded' event, runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument)

/**
 * Event listeners for handling button clicks.
 */
walkButton.addEventListener('click', handleWalkOption)
jumpStonesButton.addEventListener('click', handleJumpStonesOption)
