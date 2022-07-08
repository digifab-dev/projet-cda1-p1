// ...EYES TRICK ...
var balls = document.getElementsByClassName("ball");
document.onmousemove = function (event) {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    
 for (var i=0; i<2;i++){
balls[i].style.left = x ;
balls[i].style.top = y;
balls[i].style.transform = "translate(-"+x+",-"+y+")";
 }}

// ... .. DOS DE CARTE .. .. .. 
 var queen = document.querySelector(".dame_books");
 var carte = document.querySelector(".content_card_queen");

 queen.addEventListener('click', function (e) {
    var rect = e.target.getBoundingClientRect()
    if (rect.left !=0 && rect.top != 0){
        setTimeout(() => {
        carte.classList.add('active');
            
        }, 400);
        carte.setAttribute("style",'left:'+(rect.left + 20)+'px;top:'+(rect.top+ 13)+'px;')
    }
 });

 var king = document.querySelector(".roi_tips");
 var carte2 = document.querySelector(".content_card_king");

king.addEventListener('click', function (e) {
    var rect = e.target.getBoundingClientRect()
    if (rect.left !=0 && rect.top != 0){
        setTimeout(() => {
        carte2.classList.add('active');
            
        }, 300);
        carte2.setAttribute("style",'left:'+(rect.left)+'px;top:'+(rect.top)+'px;')
    }
 });




 var jack = document.querySelector(".valley_blog");
 var carte3 = document.querySelector(".content_card_jack");

jack.addEventListener('click', function (e) {
    var rect = e.target.getBoundingClientRect()
    if (rect.left !=0 && rect.top != 0){
        setTimeout(() => {
        carte3.classList.add('active');
            
        }, 800);
        carte3.setAttribute("style",'left:'+(rect.left)+'px;top:'+(rect.top)+'px;')
    }
 });



 var ace = document.querySelector(".ace_quotes");
 var carte4 = document.querySelector(".content_card_ace");

ace.addEventListener('click', function (e) {
    var rect = e.target.getBoundingClientRect()
    if (rect.left !=0 && rect.top != 0){
        setTimeout(() => {
        carte4.classList.add('active');
            
        }, 800);
        carte4.setAttribute("style",'left:'+(rect.left)+'px;top:'+(rect.top)+'px;')
    }
 });




 var exit = document.querySelector('.exit');
 exit.addEventListener('click',function(){
    carte2.classList.remove('active')

 })
 var exitjack = document.querySelector('.exit-jack');
 exitjack.addEventListener('click',function(){
    carte3.classList.remove('active')

 })
 var exitqueen = document.querySelector('.exit-queen');
 exitqueen.addEventListener('click',function(){
    carte.classList.remove('active')

 })
 var exitace = document.querySelector('.exit-ace');
 exitace.addEventListener('click',function(){
    carte4.classList.remove('active')

 })


// BLOG 

let vid = document.querySelector('.vid');
let videos = document.querySelector('.videos');
let items = document.querySelector('.items');
let articles = document.querySelector('.articles');

vid.addEventListener('click',() => { 
    articles.style.display = 'none';
    videos.style.display = 'flex';
});
items.addEventListener('click',() => { 
    videos.style.display = 'none';
    articles.style.display = 'flex';
});


// .



