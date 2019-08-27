document.addEventListener('DOMContentLoaded', function () {
    //function expression to select all elements
    const selectElement = (s) => document.querySelector(s);
    selectElement('.open').addEventListener('click', () => {
        selectElement('.nav-list').classList.add('active');
    })

    selectElement('.close').addEventListener('click', () => {
        selectElement('.nav-list').classList.remove('active');
    })


    //our banner image parallax effect
    let parallax = document.querySelector('#parallax');
    window.addEventListener('scroll', function(){
      let offset = window.pageYOffset;
      console.log(offset);
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    })

    //CHANGING MY NAVBAR BACKGROUND COLOR ONSCROLL
    const navbar = document.querySelector('.nav')

window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 50 ) {
    navbar.classList.add('active')
  } else if (navbar.classList.contains('active')) {
    navbar.classList.remove('active')
  } else {
    navbar.classList.remove('active')
  }
})


let carouselSlide =document.querySelector('.carousel-slide');
let carouselImage = document.querySelectorAll('.carousel-slide img');


let prevBtn =document.querySelector('#prevBtn');
let nextBtn = document.querySelector('#nextBtn');

let counter = 1;
let size = carouselImage[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselImage.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter ++;
    console.log(counter)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter --;
    console.log(counter)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionand',()=>{
if(carouselImage[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImage.length -1;
    carouselSlide.style.transform = 'translateX(0' + (-size *counter) + 'px)';
}

if(carouselImage[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImage.length - counter;
    carouselSlide.style.transform = 'translateX(0' + (-size *counter) + 'px)';
}
})




})