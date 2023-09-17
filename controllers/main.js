const nicknameTextbox = document.getElementById('nicknameTextbox')
const startButton = document.getElementById('startButton')
const instructionButton = document.getElementById('instructionButton')


startButton.addEventListener('click', function() {
    const textboxContent = nicknameTextbox.value
    localStorage.setItem('nickname', textboxContent)
    localStorage.setItem('points', 100)
    window.location.href = '/firstStage'
});

instructionButton.addEventListener('click', function() {
    window.location.href = '/instructions'
});





