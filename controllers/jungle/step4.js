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
 * Gets references to HTML elements related to option buttons and their corresponding options.
 * @type {HTMLElement}
 */
const option1Button = document.getElementById('option1Button')
const option2Button = document.getElementById('option2Button')
const option3Button = document.getElementById('option3Button')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const closeOption1 = document.getElementById('closeOption1')
const closeOption2 = document.getElementById('closeOption2')
const closeOption3 = document.getElementById('closeOption3')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the display of option 1.
 */
function handleOption1Option() {
    option1.classList.add('show')
}

/**
 * Handles the display of option 2.
 */
function handleOption2Option() {
    option2.classList.add('show')
}

/**
 * Handles the display of option 3.
 */
function handleOption3Option() {
    option3.classList.add('show')
}

/**
 * Event listener for closing option 1.
 */
closeOption1.addEventListener('click', () => {
    option1.classList.remove('show')
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
})

/**
 * Event listener for closing option 2.
 */
closeOption2.addEventListener('click', () => {
    option2.classList.remove('show')
    const newPoints = parseInt(points) + 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
})

/**
 * Event listener for closing option 3.
 */
closeOption3.addEventListener('click', () => {
    option3.classList.remove('show')
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
option1Button.addEventListener('click', handleOption1Option)
option2Button.addEventListener('click', handleOption2Option)
option3Button.addEventListener('click', handleOption3Option)