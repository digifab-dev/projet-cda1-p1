// ------------------------------------- JS - Dauof----------------------------------------
$(window).scroll(function () {
  if ($(this).scrollTop() > 150) $(".gotopbtn").addClass("active");
  else $(".gotopbtn").removeClass("active");
});
$(".gotopbtn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
});

// ------------------------------------- JS - Dauof ----------------------------------------
// changement de produits animation

var productImg = document.getElementById("productImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  productImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  productImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  productImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  productImg.src = smallimg[3].src;
};

// =========================

// var deadline = new Date("Mar 31, 2023 15:37:25").getTime();

// var x = setInterval(function () {
//   var now = new Date().getTime();
//   var t = deadline - now;
//   var days = Math.floor(t / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((t % (1000 * 60)) / 1000);
//   document.getElementById("day").innerHTML = days;
//   document.getElementById("hour").innerHTML = hours;
//   document.getElementById("minute").innerHTML = minutes;
//   document.getElementById("second").innerHTML = seconds;
//   if (t < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "TIME UP";
//     document.getElementById("day").innerHTML = "0";
//     document.getElementById("hour").innerHTML = "0";
//     document.getElementById("minute").innerHTML = "0";
//     document.getElementById("second").innerHTML = "0";
//   }
// }, 1000);
