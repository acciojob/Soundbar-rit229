//your JS code here. If required.
// script.js

// Select all buttons and the stop button
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

// Function to play sound
function playSound(soundFile) {
    // Stop the current audio if it's playing
    if (currentAudio) {
        currentAudio.pause();
    }
    // Create a new audio object
    currentAudio = new Audio(`sounds/${soundFile}`);
    currentAudio.play();
}

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        playSound(soundFile);
    });
});

// Stop button functionality
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset audio to start
    }
});