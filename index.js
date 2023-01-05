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

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
let mobileBasketTrue = false;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
const auxiliary = document.querySelector(".auxiliary");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const menu = document.querySelector(".menu");
const menuMobileNav = document.querySelector(".menu__mobile_nav");
const modal = document.querySelector(".modal");
const main = document.querySelector(".main");
const menu__h2 = document.querySelector(".menu__h2");
const burger = document.querySelector(".burgerMenu");
const mobileBasketSticky = document.querySelector(".mobileBasket_sticky");
const toBasket = document.querySelector(".add__order");
const mobileBasket = document.querySelector(".mobileBasket");
const buttonAdd = document.querySelectorAll(".card__button");
const cardCount = document.querySelectorAll(".card__button_count");
const footerCopyright = document.querySelector(".footer__copyright");
const buttonsCount = document.querySelectorAll(".button__count");
const btnCloseModal = document.querySelector(".modal__close");
const btnCloseMobileBasket = document.querySelector(".mobileBasket__close");
const modalFooter = document.querySelector(".modal__footer");
const toppingLabels = document.querySelectorAll(".topping__label");
const asideModal = document.querySelector(".asideModal");
const mobileBasketHeaderPrice = document.querySelector(
  ".mobileBasket__header_totalPrice"
);
const mobileBasketHeader = document.querySelector(".mobileBasket__header");
const mobileBasketFooter = document.querySelector(".mobileBasket__footer");
const mobileBasketOpen = document.querySelector(".mobileBasket_open");
const asideMenuUl = document.querySelector(".asideMenu__ul");
const mobileBasketHeaderImg = document.querySelector(
  ".mobileBasket__header_img"
);
const mobileBasketHeaderWr = document.querySelector(".mobileBasket__header_wr");
//--------------------  Плюс/минус в меню-------------------//

function countPlus(count) {
  return function () {
    if (count.value < 999) {
      count.value++;
    }
  };
}

function countMinus(count) {
  return function () {
    if (count.value > 0) {
      count.value--;
    }
  };
}

for (let buttonCount of buttonsCount) {
  let minus = buttonCount.querySelector(".count_minus");
  let plus = buttonCount.querySelector(".count_plus");
  let count = buttonCount.querySelector(".input_text");
  minus.addEventListener("click", countMinus(count));
  plus.addEventListener("click", countPlus(count));
}

//----------------------Вызов бургер-меню-----------------//
/*burger.addEventListener("click", () => {
  console.log("here");
  document.querySelector(".mobile").classList.toggle("hidden");
})*/

/*----------------------------многоточие в конце строки-----------------*/

function truncateNames() {
  let cards = document.querySelectorAll(".card");
  for (let n = 0; n < cards.length; n++) {
    let card = cards[n];
    let cardName = card.querySelector(".card__desc_name");
    let text = cardName.innerText;
    let initialValue = card.getAttribute("data-initial_value");
    if (!initialValue) {
      card.setAttribute("data-initial_value", text);
    } else {
      text = initialValue;
      cardName.innerText = text;
    }
    let maxI = 1000;
    let i = 0;
    while (card.scrollHeight > card.offsetHeight) {
      if (i > maxI) {
        //на всякий случай
        break;
      }
      i++;
      text = text.substr(0, text.length - 1);
      cardName.innerText = text + "...";
    }
  }
}
setTimeout(() => {
  truncateNames();
});
addEventListener("resize", truncateNames);
addEventListener("DOMContentLoaded", truncateNames);
const divBlock = document.querySelector(".block");
/*---------------------Modal window-------------------------------------*/
var timerId = null;
const imgsClick = document.querySelectorAll(".menu__card");
for (let imgClick of imgsClick) {
  imgClick.addEventListener("click", (e) => {
    clearTimeout(timerId);
    let currentCard = e.currentTarget.closest(".list_item");
    console.log(currentCard);
    let currentBtnAdd = currentCard.querySelector(".card__button");
    let currentBtnCount = currentCard.querySelector(".card__button_count");
    currentBtnAdd.style.display = "none";
    currentBtnCount.style.display = "flex";
    modal.style.display = "flex";    
    divBlock.style.display = "block";
    if (window.innerWidth < 1400) {
      mobileBasket.style.display = "flex";
      mobileBasketSticky.style.position = "fixed";
      footer.style.paddingBottom = "60px";
      mobileBasketSticky.style.display = "block";
      btnCloseMobileBasket.style.display = "none";
      mobileBasketSticky.style.bottom = "60px";
      //mobileBasketSticky.style.top = "calc((var(--vh, 1vh) * 100) - 60px)";
      mobileBasketHeaderWr.style.width = "100%";
      mobileBasketHeaderImg.style.display = "none";
      console.log(mobileBasketSticky.getBoundingClientRect().top);
      mobileBasketTrue = true;
    }
    if (window.innerWidth < 800) {
      btnCloseModal.style.display = "block";
      modal.style.animation = "modal 0.7s forwards";
      auxiliary.style.display = "block";
      btnCloseModal.style.animation = "modal 0.7s forwards";
      modal.style.overflow = "auto";
      modalFooter.style.display = "flex";
    } else {
      modal.style.animation = "zoom 0.7s forwards";
      //btnCloseModal.style.animationDelay = "0.7s";
      setTimeout(() => {
        btnCloseModal.style.display = "block";
        modalFooter.style.display = "flex";
        btnCloseModal.style.animation = "zoom 0.3s forwards";
        modalFooter.style.animation = "zoom 0.3s forwards";
      }, 400);
      //

      //document.querySelector(".asideMenu__ul").style.position = "fixed";
      //document.querySelector(".asideMenu__ul").style.top = ;
    }

    main.style.overflow = "hidden";
    menu.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  });
}
/*----------------------Close modal window------------------------*/

function closeModal() {
  divBlock.style.display = "none";
  btnCloseModal.style.display = "none";
  modalFooter.style.display = "none";
  auxiliary.style.display = "none";
  modal.style.overflow = "unset";
  menu.style.overflow = "unset";
  main.style.overflow = "unset";
  document.body.style.overflow = "unset";
  //modalFooter.style.display = "none";
  if (window.innerWidth < 800) {
    modal.style.animation = "modalBack 0.7s forwards";
    btnCloseModal.style.animation = "modalBack 0.7s forwards";
    header.style.position = "sticky";
    menuMobileNav.style.position = "sticky";
  } else if (window.innerWidth < 1400) {
    asideMenuUl.style.position = "sticky";
    header.style.top = 0;
    header.style.position = "sticky";
    modal.style.animation = "zoomBack 0.7s forwards";
  } else {
    modal.style.animation = "zoomBack 0.7s forwards";
    asideMenuUl.style.position = "sticky";
  }
  timerId = setTimeout(() => {
    modal.style.display = "none";
  }, 800);
}

const modalsCloses = document.querySelectorAll(".modal__close");
for (let modalClose of modalsCloses) {
  modalClose.addEventListener("click", () => {
    closeModal();
  });
}
/*-----------------------Add topping---------------------------------*/
const btnModalOrder = document.querySelector(".modal__order_button");
btnModalOrder.addEventListener("click", () => {
  closeModal();
});

/*-------------------------Open mobile basket-------------------------------*/
function openMobileBasketFunc() {
  document.body.style.overflow = "hidden";
  mobileBasket.style.display = "flex";
  mobileBasketHeaderPrice.style.display = "none";
  btnCloseMobileBasket.style.display = "block";
  mobileBasketSticky.style.position = "unset";
  mobileBasketOpen.style.animation = "mobileBasket 0.7s forwards";
  mobileBasketFooter.style.animation = "mobileBasket 0.7s forwards";
  //mobileBasketSticky.style.top = 0;
  mobileBasketHeaderImg.style.display = "block";
  mobileBasketFooter.style.position = "fixed";
  mobileBasketFooter.style.bottom = 0;
  mobileBasketFooter.style.right = 0;
  if (window.innerWidth > 800) {

    mobileBasketHeaderWr.style.width = "50%";
  }
  mobileBasketOpen.style.position = "fixed";
  mobileBasketOpen.style.top = 0;

  openMobileBasket.removeEventListener("click", openMobileBasketFunc);
  btnCloseMobileBasket.addEventListener("click", (e) => {
    console.log(e.target);
    closeMobileBasketFunc();
  });
}

function closeMobileBasketFunc() {
  document.body.style.overflow = "unset";
  // mobileBasket.style.display = "none";
  mobileBasketHeaderPrice.style.display = "block";
  mobileBasketHeaderImg.style.display = "none";
  mobileBasketHeaderWr.style.width = "100%";
  btnCloseMobileBasket.style.display = "none";
  mobileBasketSticky.style.position = "fixed";
  mobileBasketOpen.style.top = "unset";
  mobileBasketOpen.style.animation = "closeMobileBasket 0.7s linear";
  mobileBasketFooter.style.animation = "closeMobileBasketFooter 0.7s linear";
  mobileBasketSticky.style.top = "unset";
  setTimeout(() => {
    mobileBasketOpen.style.position = "unset";
    mobileBasketFooter.style.position = "unset";
    openMobileBasket.addEventListener("click", openMobileBasketFunc);
  }, 690);
}

const openMobileBasket = document.querySelector(".mobileBasket__header");
openMobileBasket.addEventListener("click", openMobileBasketFunc);

/*------------------------Close mobile basket----------------------------*/
btnCloseMobileBasket.addEventListener("click", (e) => {
  closeMobileBasketFunc;
});

/*--------------------------Resize windows------------------------------*/
/*addEventListener('DOMContentLoaded', () => {
  document.querySelector(".modal").style.height = (window.innerHeight-130) +"px";
});
window.addEventListener("load",()=> {
    document.querySelector(".modal").style.height = (window.innerHeight-130) +"px";
  window.onresize = ()=> {
        document.querySelector(".modal").style.height = (window.innerHeight-130) +"px";
    };
  })
*/

/*--------------------------Toggle button Add-------------------*/
/*
for (let i = 0; i < buttonAdd.length; i++) {
  buttonAdd[i].addEventListener("click", (e) => {
    if (window.innerWidth < 1400) {
      mobileBasket.style.display = "flex";
      mobileBasketSticky.style.position = "fixed";
      footer.style.paddingBottom = "60px";
      mobileBasketSticky.style.display = "block";
      btnCloseMobileBasket.style.display = "none";
      mobileBasketSticky.style.bottom = "60px";
      //mobileBasketSticky.style.top = "calc((var(--vh, 1vh) * 100) - 60px)";
      mobileBasketHeaderWr.style.width = "100%";
      mobileBasketHeaderImg.style.display = "none";
      console.log(mobileBasketSticky.getBoundingClientRect().top);
      mobileBasketTrue = true;
    } /*else if (window.innerWidth < 1400) {
      document.querySelector(".add__order_tablet").style.display = "flex";
    }*//*
    buttonAdd[i].style.display = "none";
    cardCount[i].style.display = "flex";
  });
}
*/
//-------------------------Choose topping------------------------------------//
for (let toppingLabel of toppingLabels) {
  toppingLabel.addEventListener("click", (e) => {
    console.log(e.currentTarget.closest(".topping__card"));
    let currentTopping = e.currentTarget.closest(".topping__card");
    let currentToppingCheck = currentTopping.querySelector(
      ".topping__check_img"
    );
    currentToppingCheck.classList.toggle("topping__check_active");
  });
}

//--------------------------Add to basket from modal window-------------------//
const btnAddOnModal = document.querySelector(".modal__order_button");
btnAddOnModal.addEventListener("click", () => {});

//-------------------------Open basket-----------------------------------------//
// const toBasket = document.querySelector(".add__order");

mobileBasket.addEventListener("click", () => {});

// document.querySelector(".add__order").style.display = "block";
// document.querySelector(".add__order_tablet").style.display = "flex";

//--------------Добавление/снятие прозрачности у мобильного меню-------------------//

window.addEventListener("scroll", function () {
  const menu_h2top = menu__h2.getBoundingClientRect().top;
  const footerCopTop = footerCopyright.getBoundingClientRect().top;
  const mobileBasketTop = mobileBasketSticky.getBoundingClientRect().top;
  console.log(footerCopTop);
  console.log(mobileBasketTop);
  if (menu_h2top >= 149) {
    menuMobileNav.style.backgroundColor = "white";
  } else {
    menuMobileNav.style.backgroundColor = "rgb(255, 255, 255, 0.7)";
  }
  if (mobileBasketTrue) {
    if (footerCopTop < mobileBasketTop) {
      footer.style.paddingBottom = "60px";
      // mobileBasketSticky.style.position = "sticky";
      //mobileBasket.style.top = "calc((var(--vh, 1vh) * 100) - 120px)";
      mobileBasketTrue = false;
    }
  }
});

/*--------------------------Choose delivery/takeaway--------------------------*/
const btnDelivery = document.querySelectorAll(".mobileBasket__delivery__item");
for (let t = 0; t < btnDelivery.length; t++) {
  btnDelivery[t].addEventListener("click", (e) => {
    let currentDelivery = e.currentTarget.closest(
      ".mobileBasket__delivery__item"
    );   
    currentDelivery.classList.add("basket__delivery_active");
    if (t === btnDelivery.length - 1) {
      btnDelivery[t - 1].classList.remove("basket__delivery_active");
    } else {
      btnDelivery[t + 1].classList.remove("basket__delivery_active");
    }
  });
}
const btnDeliverys = document.querySelectorAll(
  ".desktopBasket__delivery__item"
);
for (let t = 0; t < btnDeliverys.length; t++) {
  btnDeliverys[t].addEventListener("click", (e) => {
    let currentDeliverys = e.currentTarget.closest(
      ".desktopBasket__delivery__item"
    );
    currentDeliverys.classList.add("basket__delivery_active");
    if (t === btnDeliverys.length - 1) {
      btnDeliverys[t - 1].classList.remove("basket__delivery_active");
    } else {
      btnDeliverys[t + 1].classList.remove("basket__delivery_active");
    }
  });
}

/*---------------All parameters------------------------

totalCount  //Общее количество заказанных позиций*/
