$(document).ready(function () {
  $(window).scroll(function () { 
    if (this.scrollY> 20) {
      $('nav').addClass("sticky");
    } else {
      $('nav').removeClass("sticky");
    }  
  });  
});

// typing effect animation script

var typed = new Typed(".typing",{
  strings: ["Developer","Designer","Styler","Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed2 = new Typed(".typing-2",{
  strings: ["Developer","Designer","Styler","Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


const navSlide = () => {
  const slide = document.querySelector('.lines');
  const navLinks = document.querySelector('.navlinks');
  const navbars = document.querySelector('.navbars');
  const menubtn = document.querySelector('.menu-btn');
  const menubtn1 = document.querySelector('.menu-btn1');
  const menubtn2 = document.querySelector('.menu-btn2');
  const menubtn3 = document.querySelector('.menu-btn3');


  slide.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-active');

    slide.classList.toggle('toggle');

    navbars.classList.toggle('navbg');
  });
  menubtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-active');
    navbars.classList.toggle('navbg');
    slide.classList.toggle('toggle');
  });
  menubtn1.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-active');
    navbars.classList.toggle('navbg');
    slide.classList.toggle('toggle');
  });
  menubtn2.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-active');
    navbars.classList.toggle('navbg');
    slide.classList.toggle('toggle');
  });
  menubtn3.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-active');
    navbars.classList.toggle('navbg');
    slide.classList.toggle('toggle');
  });
}

navSlide();

// const navslideback(){
//   const menubtn = document.querySelector('.menu-btn');

//   menubtn.addEventListener('click', )
// }; 

// navslideback();