/**
 * Retrieves a reference to the HTML element with the ID 'nicknameTextbox'.
 * @type {HTMLInputElement}
 */
const nicknameTextbox = document.getElementById('nicknameTextbox');

/**
 * Retrieves a reference to the HTML element with the ID 'startButton'.
 * @type {HTMLButtonElement}
 */
const startButton = document.getElementById('startButton');

/**
 * Retrieves a reference to the HTML element with the ID 'instructionButton'.
 * @type {HTMLButtonElement}
 */
const instructionButton = document.getElementById('instructionButton');

/**
 * Handles the click event on the start button.
 * Stores the content of the nickname textbox in local storage,
 * sets an initial score of 100, and redirects to '/firstStage'.
 */
startButton.addEventListener('click', function() {
    const textboxContent = nicknameTextbox.value
    localStorage.setItem('nickname', textboxContent)
    localStorage.setItem('points', 100)
    window.location.href = '/firstStage'
})

/**
 * Handles the click event on the instruction button.
 * Redirects to the '/instructions' page.
 */
instructionButton.addEventListener('click', function() {
    window.location.href = '/instructions'
});
