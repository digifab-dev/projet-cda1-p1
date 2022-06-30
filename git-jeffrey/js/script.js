// Comportement NavBar lors du scroll

const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {
    console.log(window );
    if(window.scrollY > 1000){

        navigation.classList.add('anim_nav');
    } else if(window.scrollY < 964) {
        navigation.classList.remove('anim_nav');
        isScroled = false;
    }
})


// Bouton retour en haut

const btn = document.querySelector('.btn_top')

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
    })
})