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
 * Gets references to HTML elements related to water, Coca-Cola, and poison options.
 * @type {HTMLElement}
 */
const waterButton = document.getElementById('waterButton')
const cocacolaButton = document.getElementById('cocacolaButton')
const poisonButton = document.getElementById('poisonButton')
const waterOption = document.getElementById('waterOption')
const cocacolaOption = document.getElementById('cocacolaOption')
const poisonOption = document.getElementById('poisonOption')
const closeWater = document.getElementById('closeWater')
const closeCocacola = document.getElementById('closeCocacola')
const closePoison = document.getElementById('closePoison')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the water option.
 */
function handleWaterOption() {
    waterOption.classList.add('show')
}

/**
 * Handles the Coca-Cola option.
 */
function handleCocacolaOption() {
    cocacolaOption.classList.add('show')
}

/**
 * Handles the poison option.
 */
function handlePoisonOption() {
    poisonOption.classList.add('show')
}

/**
 * Event listener for closing the water option.
 */
closeWater.addEventListener('click', () => {
    waterOption.classList.remove('show')
    const newPoints = parseInt(points) + 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
})

/**
 * Event listener for closing the Coca-Cola option.
 */
closeCocacola.addEventListener('click', () => {
    cocacolaOption.classList.remove('show')
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
})

/**
 * Event listener for closing the poison option.
 */
closePoison.addEventListener('click', () => {
    poisonOption.classList.remove('show')
    const newPoints = parseInt(points) - 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
})

/**
 * Event listener for the 'DOMContentLoaded' event, runs onLoadDocument.
 */
document.addEventListener("DOMContentLoaded", onLoadDocument)

/**
 * Event listeners for handling button clicks.
 */
waterButton.addEventListener('click', handleWaterOption)
cocacolaButton.addEventListener('click', handleCocacolaOption)
poisonButton.addEventListener('click', handlePoisonOption)