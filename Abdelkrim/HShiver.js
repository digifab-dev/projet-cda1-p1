const video = document.getElementById('myVideo');

const setPlaySpeed = (element, speed) => {
    element.playbackRate = speed;
}

setPlaySpeed(video, 0.8);



const lieu = document.querySelector('.lieu');
const touch = document.getElementById('touch');
lieu.addEventListener('mouseleave', () => {
    touch.checked=false;
})


const quoi = document.querySelector('.quoi');
const touch2 = document.getElementById('touch2');
quoi.addEventListener('mouseleave', () => {
    touch2.checked=false;
})