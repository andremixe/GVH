let menu = document.querySelector(".menu");

menu.addEventListener('scroll', function(e) {
    console.log(e.target);
    document.querySelector('.menu__mobile_nav').style.backgroundColor = "rgb(255, 255, 255, 0.7)";
  });