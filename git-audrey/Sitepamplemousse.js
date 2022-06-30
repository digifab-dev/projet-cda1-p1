const percentLabel = document.querySelector("#percent");
const originalTitle = document.title;
const frise = document.querySelector(".frise");
let oldpercentage=0;
let translation = -1;
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);

  if (oldpercentage > scrollPercentRounded){
  console.log(scrollPercentRounded,translation,frise);

  translation ++;
  frise.setAttribute('style','transform:translateX('+translation+'%);') ;
  }
  oldpercentage = scrollPercentRounded;
});

  // for (scrollPercentRounded = 17; scrollPercentRounded < 40; scrollPercentRounded++) {

  // }
  //   }

// window.addEventListener("scroll", () => {
//   if(window.scrollY >= 800) {
//     frise.classList.add("scroll");
//     }
//    });

// while (scrollPercentRounded >= 17 && scrollPercentRounded <= 39) {
//  frise.style.transform = "translateX(100px)";
//  console.log(frise);
// }

// while (scrollPercentRounded >= 58 && scrollPercentRounded <= 80) {

// }

// let formulaireEnvoie =  document.querySelector('.envoie');
// formulaireEnvoie.addEventListener("click", function(e) {
//     formulaireEnvoie.innerHTML = '<div class="btnFinCT"><a class="btnFin envoie" href="#">Payer</a></div><div><p>Votre message à bien été envoyé</p></div>';
//   console.log(e);
//   });
//   console.log('.envoie');

//  Attention : pour entrer le chiffre du nombre de place : Attention O ou +
// Au clic sur le formulaire, ca ajoute une ligne en html disant : "Votre message a bien été envoyé."
// // Au clic : .loupe:hover > input {
//   width: 7vw;
//   padding-left: 8%;
// }
// Faire que le bouton recherche devienne valide.
// Demander à Kévin comment faire pour faire disparaitre le texte du formulaire du de la loupe quand on veut taper ou qu'on à taper.

// let titre = document.querySelector('h1');
// titre.innerHTML = '<h1>Pamplemousse</h1>';
// console.log(titre);
