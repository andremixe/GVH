
   
/*window.addEventListener("load",()=> {
  console.log(window.innerHeight);
  console.log(window.visualViewport.height);
  console.log(window.height);

  document.querySelector(".mobileBasket").style.height = (window.innerHeight-5) +"px"; })
  window.onresize = ()=> {
    console.log(window.innerHeight+"px");
    console.log(window.visualViewport.height);
    document.querySelector(".mobileBasket").style.height = (window.innerHeight) +"px";
    console.log(window.innerHeight-357);
  document.querySelector(".mobileBasket__menu").style.height = (window.innerHeight-360) + "px" };
*/
  const menu = document.querySelector(".menu");
  const menu__h2 = document.querySelector(".menu__h2");
  const burger = document.querySelector(".burgerMenu");

  //--------------Добавление/снятие прозрачности у мобильного меню-------------------//

menu.addEventListener('scroll', function(e) {
    const h2top = menu__h2.getBoundingClientRect().top;
    if (h2top>=149) {
      document.querySelector('.menu__mobile_nav').style.backgroundColor = "white";
    }
    else {
      document.querySelector('.menu__mobile_nav').style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    }
  });
  




//--------------------  Плюс/минус в меню-------------------//
let count = document.querySelector(".input_text");
console.log(count);
let minus = document.getElementById("left");
let plus = document.getElementById("right");
minus.addEventListener("click", () => {
  if (count.value > 1) {count.value--};
});
plus.addEventListener("click", () => {
  if (count.value < 999) {count.value++};
});

//----------------------Вызов бургер-меню-----------------//
/*burger.addEventListener("click", () => {
  console.log("here");
  document.querySelector(".mobile").classList.toggle("hidden");
})*/

/*----------------------------многоточие в конце строки-----------------*/


        function truncateNames() {
            let t = document.querySelectorAll(".card");
           
            for (let n = 0; n < t.length; n++) {
              let initialValue = [];
              let text = document.querySelectorAll(".card__desc_name");
              text[n] = text[n].innerHTML;              
              initialValue[n] = t[n].getAttribute("data-initial_value");
            if (!initialValue[n]) {
                t[n].setAttribute("data-initial_value", text[n]);
            } else {
                text[n] = initialValue[n];
                document.querySelectorAll(".card__desc_name")[n].innerHTML = text[n];
               
            }
            let maxI = 1000;
            let i = 0;
            while (t[n].scrollHeight > t[n].offsetHeight) {
                if (i > maxI) { //на всякий случай
                    break
                }
                i++;
                text[n] = text[n].substr(0, text[n].length - 1);
                document.querySelectorAll(".card__desc_name")[n].innerHTML = text[n] + "...";
            }
          }
        }
        addEventListener('DOMContentLoaded', truncateNames);
        addEventListener('resize', truncateNames);
        

        /*---------------------Modal window-------------------------------------*/

        const imgsClick = document.querySelectorAll(".card__img");
        for (let imgClick of imgsClick) {
          imgClick.addEventListener("click", () => {
            document.querySelector(".modal").style.display = "flex";
            document.querySelector("header").style.filter = "blur(10px)";
            document.querySelector(".main").style.filter = "blur(10px)";            
            document.body.style.overflow = "hidden";
          });          
        }

        const modalsCloses = document.querySelectorAll(".modal__close");
        for (let modalClose of modalsCloses) {
          modalClose.addEventListener("click", () => {
            document.querySelector(".modal").style.display = "none";
            document.querySelector("header").style.filter = "none";
            document.querySelector(".main").style.filter = "none";
            document.body.style.overflow = "unset";
          });          
        }

        
        