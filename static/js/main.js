document.addEventListener('DOMContentLoaded', function() {
    const introMessage = document.getElementById('intro-message');
    const introContainer = document.getElementById('intro-container');
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    const messages = ["We...", "Are...", "Tech"];
    let index = 0;

    function playClickSound() {
        const clickSound = new Audio('/static/sounds/click.mp3');
        clickSound.play();
    }

    function showMessage() {
        if (index < messages.length) {
            introMessage.textContent = messages[index];
            playClickSound();
            index++;
            setTimeout(showMessage, 1000); // 1 second delay between messages
        } else {
            introContainer.classList.add('hidden');
            header.classList.remove('hidden');
            main.classList.remove('hidden');
        }
    }

    showMessage();
});
