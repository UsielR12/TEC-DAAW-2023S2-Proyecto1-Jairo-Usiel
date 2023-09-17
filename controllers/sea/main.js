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
 * Gets references to HTML elements related to swim, catch, and submarine options.
 * @type {HTMLElement}
 */
const swimButton = document.getElementById('swimButton')
const catchButton = document.getElementById('catchButton')
const submarineButton = document.getElementById('submarineButton')
const swimOption = document.getElementById('swimOption')
const catchOption = document.getElementById('catchOption')
const submarineOption = document.getElementById('submarineOption')
const closeSwim = document.getElementById('closeSwim')
const closeCatch = document.getElementById('closeCatch')
const closeSubmarine = document.getElementById('closeSubmarine')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the display of the swim option.
 */
function handleSwimOption() {
    swimOption.classList.add('show')
}

/**
 * Handles the display of the catch option.
 */
function handleCatchOption() {
    catchOption.classList.add('show')
}

/**
 * Handles the display of the submarine option.
 */
function handleSubmarineOption() {
    submarineOption.classList.add('show')
}

/**
 * Event listener for closing the swim option.
 */
closeSwim.addEventListener('click', () => {
    swimOption.classList.remove('show')
    const newPoints = parseInt(points) + 20
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step1'
})

/**
 * Event listener for closing the catch option.
 */
closeCatch.addEventListener('click', () => {
    catchOption.classList.remove('show')
    const newPoints = parseInt(points) - 10
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step1'
})

/**
 * Event listener for closing the submarine option.
 */
closeSubmarine.addEventListener('click', () => {
    submarineOption.classList.remove('show')
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/sea-step1'
})

/**
 * Event listener for the 'DOMContentLoaded' event, runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument)

/**
 * Event listeners for handling button clicks.
 */
swimButton.addEventListener('click', handleSwimOption)
catchButton.addEventListener('click', handleCatchOption)
submarineButton.addEventListener('click', handleSubmarineOption)