//Get the button:
// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// // function scrollFunction() {
// //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// //     mybutton.style.display = "block";
// //   } else {
// //     mybutton.style.display = "none";
// //   }
// // }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 1533; // For Safari
//   document.documentElement.scrollTop = 1533; // For Chrome, Firefox, IE and Opera
// }

// window.addEventListener('click', () => {
//     console.log(window.scrollY)
// })

let ingredients = document.querySelectorAll(".card");
ingredients.forEach(function (ingredient) {
  ingredient.addEventListener("click", function (e) {
    ingredient.classList.toggle("actif");
  });
});

let bouton = document.querySelector(".compose");
bouton.addEventListener("click", function (e) {
  document.querySelector(".scrollpane").classList.toggle("actif");
});
