const nicknameTextbox = document.getElementById('nicknameTextbox')
const startButton = document.getElementById('startButton')

startButton.addEventListener('click', function() {
    const textboxContent = nicknameTextbox.value
    localStorage.setItem('nickname', textboxContent)
    localStorage.setItem('points', 0)
    window.location.href = '/firstStage'
})