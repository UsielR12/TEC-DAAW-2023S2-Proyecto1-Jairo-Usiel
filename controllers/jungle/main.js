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
 * Gets references to HTML elements related to knife, stick, and jump options.
 * @type {HTMLElement}
 */
const knifeButton = document.getElementById('knifeButton')
const stickButton = document.getElementById('stickButton')
const jumpButton = document.getElementById('jumpButton')
const knifeOption = document.getElementById('knifeOption')
const stickOption = document.getElementById('stickOption')
const jumpOption = document.getElementById('jumpOption')
const closeKnife = document.getElementById('closeKnife')
const closeStick = document.getElementById('closeStick')
const closeJump = document.getElementById('closeJump')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the display of the knife option.
 */
function handleKnifeOption() {
    knifeOption.classList.add('show')
}

/**
 * Handles the display of the stick option.
 */
function handleStickOption() {
    stickOption.classList.add('show')
}

/**
 * Handles the display of the jump option.
 */
function handleJumpOption() {
    jumpOption.classList.add('show')
}

/**
 * Event listener for closing the stick option.
 */
closeStick.addEventListener('click', () => {
    stickOption.classList.remove('show')
    const newPoints = parseInt(points) + 20
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step1'
})

/**
 * Event listener for closing the knife option.
 */
closeKnife.addEventListener('click', () => {
    knifeOption.classList.remove('show')
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step1'
})

/**
 * Event listener for closing the jump option.
 */
closeJump.addEventListener('click', () => {
    jumpOption.classList.remove('show')
    const newPoints = parseInt(points) - 10
    localStorage.setItem('points', newPoints)
    window.location.href = '/jungle-step1'
})

/**
 * Event listener for the 'DOMContentLoaded' event, runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument)

/**
 * Event listeners for handling button clicks.
 */
knifeButton.addEventListener('click', handleKnifeOption)
stickButton.addEventListener('click', handleStickOption)
jumpButton.addEventListener('click', handleJumpOption)