function showIntro() {
    const introText = document.getElementById('introText');
    const text = "We Are Tech 😊";
    let index = 0;
    const interval = setInterval(() => {
        introText.innerHTML += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('intro').style.display = 'none';
                document.getElementById('content').classList.remove('hidden');
                playWelcomeMessage();
            }, 1000); // delay before showing the main content
        }
    }, 500);
}

function playWelcomeMessage() {
    const message = new SpeechSynthesisUtterance('Welcome to Agbo Edwin Joseph Homepage.');
    window.speechSynthesis.speak(message);
}

function showBagChart() {
    alert('Bag Chart coming soon!');
}

function showManager() {
    alert('Manager tools coming soon!');
}
