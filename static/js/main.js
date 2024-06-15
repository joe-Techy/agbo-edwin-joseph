function startIntro() {
    const introMessage = 'We Are Tech 😊';
    const introElement = document.getElementById('intro-message');
    let index = 0;

    function typeNextCharacter() {
        if (index < introMessage.length) {
            introElement.textContent += introMessage.charAt(index);
            index++;
            setTimeout(typeNextCharacter, 200); // Adjust typing speed here
        } else {
            setTimeout(showMainContent, 1000); // Show main content after delay
        }
    }

    typeNextCharacter();
}

function showMainContent() {
    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    playWelcomeMessage();
}

function playWelcomeMessage() {
    const message = new SpeechSynthesisUtterance('Welcome to Agbo Edwin Joseph Homepage.');
    window.speechSynthesis.speak(message);
}
