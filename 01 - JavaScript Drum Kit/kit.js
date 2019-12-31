// window.addEventListener('keydown', function (e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();

//     key.classList.add('playing')
// });

// Better to extracts out above into it's own function as below

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // grabs audio element into audio variable

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // grabs div element into key variable

    if (!audio) return; //Stops function running if no audio key attached

    audio.currentTime = 0; //resets playing time if hit again whilst playing

    audio.play(); // plays audio

    key.classList.add('playing') // adds class .playing on keydown
}

const keys = document.querySelectorAll('.key'); // grabs all .key elements into keys variable

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing') // if property name is not transform then remove class .playing
}

keys.forEach(
    key => key.addEventListener('transitionend', removeTransition)
) // listening for transitionend (css event that is fired) then runs the function removeTransition

window.addEventListener('keydown', playSound) // on event run function, much cleaner.

