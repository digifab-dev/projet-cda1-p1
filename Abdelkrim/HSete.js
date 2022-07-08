const video = document.getElementById('myVideo');
const touch = document.getElementById('touch');
const touch2 = document.getElementById('touch2');
const lieu = document.querySelector('.lieu');
const quoi = document.querySelector('.quoi');
const boudy = document.getElementsByTagName('body')

// quoi.addEventListener('mouseover',function (e)  {
//     touch.classList.add('activ');
//     console.log('test');
// })
// quoi.addEventListener('mouseleave', () => {
//     touch2.classList.remove('activ');
// })

// lieu.addEventListener('mouseover',function (e)  {
//     touch2.classList.add('activ');
//     console.log('test');
// })
lieu.addEventListener('mouseleave', () => {
    // touch.classList.remove('activ');
    touch.checked=false;
})

quoi.addEventListener('mouseleave', () => {
    // touch.classList.remove('activ');
    touch2.checked=false;
})