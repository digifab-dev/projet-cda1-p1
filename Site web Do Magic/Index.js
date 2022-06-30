var balls = document.getElementsByClassName("ball");
document.onmousemove = function (event) {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    
 for (var i=0; i<2;i++){
balls[i].style.left = x ;
balls[i].style.top = y;
balls[i].style.transform = "translate(-"+x+",-"+y+")";
 }}


 var queen = document.querySelector(".dame_books");
 var carte = document.querySelector(".content_card_queen");

 queen.addEventListener('click', function (e) {
    var rect = e.target.getBoundingClientRect()
    if (rect.left !=0 && rect.top != 0){
        setTimeout(() => {
        carte.classList.add('active');
            
        }, 1000);
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
            
        }, 1000);
        carte2.setAttribute("style",'left:'+(rect.left)+'px;top:'+(rect.top)+'px;')
    }
 });




 var jack = document.querySelector(".valley_blog");
 var carte2 = document.querySelector(".content_card_jack");

king.addEventListener('click', function (e) {
    var rect = e.target.getBoundingClientRect()
    if (rect.left !=0 && rect.top != 0){
        setTimeout(() => {
        carte2.classList.add('active');
            
        }, 1000);
        carte3.setAttribute("style",'left:'+(rect.left)+'px;top:'+(rect.top)+'px;')
    }
 });
