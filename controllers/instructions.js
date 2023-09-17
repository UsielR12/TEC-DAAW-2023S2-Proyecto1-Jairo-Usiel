/**
 * Retrieves a reference to the HTML element with the ID 'returnButton'.
 * @type {HTMLButtonElement}
 */
const returnButton = document.getElementById('returnButton')

/**
 * Handles the click event on the return button.
 * Redirects to the root page ('/').
 */
returnButton.addEventListener('click', function() {
    window.location.href = '/'
});
