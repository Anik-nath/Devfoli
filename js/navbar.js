let myMenu = document.getElementById('myMenu');
let listItem = document.querySelectorAll('li');
let form = document.querySelector('form');
let sendbtn = document.getElementById('sendbtn');


listItem.forEach(function(li){
    li.addEventListener('click',function(){
        myMenu.querySelector('.active').classList.remove('active');
        li.classList.add('active');
    })
});

sendbtn.addEventListener('click',function(e){
    e.preventDefault();
})

let about = document.getElementById('about');
let progressBar = document.querySelectorAll('.progress-bar')

function showProgress(){
    progressBar.forEach(function(bar){
        const value = bar.dataset.progress;
        bar.style.opacity = 1;
        bar.style.width = `${value}%` ;
    });
}
function hideProgress(){
    progressBar.forEach(function(p){
        p.style.opacity = 0;
        p.style.width = 0;
    });
}
window.addEventListener('scroll',function(){
    const sectionPos = about.getBoundingClientRect().top;
    const screenPos = window.innerHeight/2;

    if(sectionPos < screenPos){
        showProgress();
    }
    else{
       hideProgress();
    }
});