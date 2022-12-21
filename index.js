
   
window.addEventListener(" load resize",()=> {
  document.querySelector(".mobileBasket").style.height = (window.innerHeight-5) +"px"; })

let menu = document.querySelector(".menu");

menu.addEventListener('scroll', function(e) {
    console.log(e.target);
    document.querySelector('.menu__mobile_nav').style.backgroundColor = "rgb(255, 255, 255, 0.7)";
  });

let count = document.querySelector(".input_text");
console.log(count);
let minus = document.getElementById("left");
let plus = document.getElementById("right");
minus.addEventListener("click", () => {
  console.log(count.value);
  if (count.value > 1) {count.value--};
});
plus.addEventListener("click", () => {
  if (count.value < 999) {count.value++};
});