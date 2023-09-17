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
 * Gets references to HTML elements related to wishes and points options.
 * @type {HTMLElement}
 */
const wishesButton = document.getElementById('wishesButton')
const pointsButton = document.getElementById('pointsButton')
const wishesOption = document.getElementById('wishesOption')
const pointsOption = document.getElementById('pointsOption')
const closeWishes = document.getElementById('closeWishes')
const closePoints = document.getElementById('closePoints')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the display of the wishes option.
 */
function handleWishesOption() {
    wishesOption.classList.add('show')
}

/**
 * Handles the display of the points option.
 */
function handlePointsOption() {
    pointsOption.classList.add('show')
}

/**
 * Event listener for closing the wishes option.
 */
closeWishes.addEventListener('click', () => {
    wishesOption.classList.remove('show')
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
})

/**
 * Event listener for closing the points option.
 */
closePoints.addEventListener('click', () => {
    pointsOption.classList.remove('show')
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
})

/**
 * Event listener for the 'DOMContentLoaded' event, runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument)

/**
 * Event listeners for handling button clicks.
 */
wishesButton.addEventListener('click', handleWishesOption)
pointsButton.addEventListener('click', handlePointsOption)