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
 * Gets references to HTML elements related to creeping and cutting options.
 * @type {HTMLElement}
 */
const creepButton = document.getElementById('creepButton')
const cutButton = document.getElementById('cutButton')
const creepOption = document.getElementById('creepOption')
const cutOption = document.getElementById('cutOption')
const closeCreep = document.getElementById('closeCreep')
const closeCut = document.getElementById('closeCut')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the creeping option.
 */
function handleCreepOption() {
    creepOption.classList.add('show')
}

/**
 * Handles the cutting option.
 */
function handleCutOption() {
    cutOption.classList.add('show')
}

/**
 * Event listener for closing the creeping option.
 */
closeCreep.addEventListener('click', () => {
    creepOption.classList.remove('show')
    const newPoints = parseInt(points) + 30
    localStorage.setItem('points', newPoints)
    window.location.href = '/desert-step4'
})

/**
 * Event listener for closing the cutting option.
 */
closeCut.addEventListener('click', () => {
    cutOption.classList.remove('show')
    const newPoints = parseInt(points) - 5
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
creepButton.addEventListener('click', handleCreepOption)
cutButton.addEventListener('click', handleCutOption)