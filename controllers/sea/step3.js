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
 * Gets references to HTML elements related to fish options.
 * @type {HTMLElement}
 */
const fish1Button = document.getElementById('fish1Button')
const fish2Button = document.getElementById('fish2Button')
const fish3Button = document.getElementById('fish3Button')
const fish1Option = document.getElementById('fish1Option')
const fish2Option = document.getElementById('fish2Option')
const fish3Option = document.getElementById('fish3Option')
const closeFish1 = document.getElementById('closeFish1')
const closeFish2 = document.getElementById('closeFish2')
const closeFish3 = document.getElementById('closeFish3')

/**
 * Function that runs when the document is loaded.
 * Sets the challenge info.
 */
function onLoadDocument() {
    challengeInfo.innerHTML = info
}

/**
 * Handles the display of the first fish option.
 */
function handleFish1Option() {
    fish1Option.classList.add('show')
}

/**
 * Handles the display of the second fish option.
 */
function handleFish2Option() {
    fish2Option.classList.add('show')
}

/**
 * Handles the display of the third fish option.
 */
function handleFish3Option() {
    fish3Option.classList.add('show')
}

/**
 * Event listener for closing the first fish option.
 */
closeFish1.addEventListener('click', () => {
    fish1Option.classList.remove('show')
    const newPoints = parseInt(points) - 100
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
})

/**
 * Event listener for closing the second fish option.
 */
closeFish2.addEventListener('click', () => {
    fish2Option.classList.remove('show')
    const newPoints = parseInt(points) + 50
    localStorage.setItem('points', newPoints)
    window.location.href = '/finishAdventure'
})

/**
 * Event listener for closing the third fish option.
 */
closeFish3.addEventListener('click', () => {
    fish3Option.classList.remove('show')
    const newPoints = parseInt(points) + 100
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
fish1Button.addEventListener('click', handleFish1Option)
fish2Button.addEventListener('click', handleFish2Option)
fish3Button.addEventListener('click', handleFish3Option)