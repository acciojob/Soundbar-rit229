const sound1 = new Audio('sounds/sound1.mp3');
const sound2 = new Audio('sounds/sound2.mp3');

document.getElementById('sound1').addEventListener('click', () => {
    sound1.play();
});

document.getElementById('sound2').addEventListener('click', () => {
    sound2.play();
});

document.querySelector('.stop').addEventListener('click', () => {
    sound1.pause();
    sound2.pause();
    sound1.currentTime = 0;
    sound2.currentTime = 0;
});


