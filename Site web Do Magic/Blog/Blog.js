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


