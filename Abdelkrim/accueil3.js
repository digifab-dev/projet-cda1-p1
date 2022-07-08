const container = document.querySelector('.container');
const ete = document.querySelector('.ete');
const hiver = document.querySelector('.hiver');

hiver.addEventListener('mouseover',function (e)  {
    container.classList.add('activ');
    console.log('test');
})
hiver.addEventListener('mouseleave', () => {
    container.classList.remove('activ');
})