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


// Apparition au scroll

function apparition() {
    var apparitions = document.querySelectorAll(".apparition");
  
    for (var i = 0; i < apparitions.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = apparitions[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        apparitions[i].classList.add("active");
      } else {
        apparitions[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", apparition);
  