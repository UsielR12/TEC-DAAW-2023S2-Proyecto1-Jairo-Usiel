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
 * Gets references to HTML elements related to fight and evangelize options.
 * @type {HTMLElement}
 */
const fightButton = document.getElementById('fightButton')
const evangelizeButton = document.getElementById('evangelizeButton')
const fightOption = document.getElementById('fightOption')
const evangelizeOption = document.getElementById('evangelizeOption')
const closeFight = document.getElementById('closeFight')
const closeEvangelize = document.getElementById('closeEvangelize')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the display of the fight option.
 */
function handleFightOption() {
    fightOption.classList.add('show')
}

/**
 * Handles the display of the evangelize option.
 */
function handleEvangelizeOption() {
    evangelizeOption.classList.add('show')
}

/**
 * Event listener for closing the fight option.
 */
closeFight.addEventListener('click', () => {
    fightOption.classList.remove('show')
    const newPoints = parseInt(points) - 5
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step4'
})

/**
 * Event listener for closing the evangelize option.
 */
closeEvangelize.addEventListener('click', () => {
    evangelizeOption.classList.remove('show')
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
fightButton.addEventListener('click', handleFightOption)
evangelizeButton.addEventListener('click', handleEvangelizeOption)