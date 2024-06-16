document.addEventListener('DOMContentLoaded', function () {
    const introMessage = document.getElementById('intro-message');
    const clickSound = document.getElementById('click-sound');
    const introContainer = document.getElementById('intro');

    function showIntroMessage() {
        const words = introMessage.textContent.split(' ');
        introMessage.textContent = '';
        introMessage.classList.remove('hidden');
        let i = 0;

        function showWord() {
            if (i < words.length) {
                introMessage.textContent += words[i] + ' ';
                clickSound.play();
                i++;
                setTimeout(showWord, 500); // Adjust timing as needed
            } else {
                setTimeout(() => {
                    introContainer.classList.add('hidden');
                }, 1000); // Adjust timing as needed
            }
        }

        showWord();
    }

    showIntroMessage();
});

function playWelcomeMessage() {
    const message = new SpeechSynthesisUtterance('Welcome to Agbo Edwin Joseph Homepage.');
    window.speechSynthesis.speak(message);
}

function showTools() {
    window.location.href = 'https://www.speedtest.net';
}

function showBagChart() {
    alert('Bag Chart coming soon!');
}

function showManager() {
    alert('Manager tools coming soon!');
}
