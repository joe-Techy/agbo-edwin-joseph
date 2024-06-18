document.addEventListener('DOMContentLoaded', function() {
    const introMessage = document.getElementById('intro-message');
    const introContainer = document.getElementById('intro-container');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const words = ["We...", "Are...", "Tech..."];
    let wordIndex = 0;

    // Load the click sound
    const clickSound = new Audio('/static/sounds/click.mp3');

    function showNextWord() {
        if (wordIndex < words.length) {
            introMessage.textContent = words[wordIndex];
            clickSound.play(); // Play click sound
            wordIndex++;
            setTimeout(showNextWord, 1000); // Change word every second
        } else {
            introContainer.style.display = 'none';
            header.classList.remove('hidden');
            main.classList.remove('hidden');
        }
    }

    setTimeout(showNextWord, 1000); // Start after 1 second
});
