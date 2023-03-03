console.log(`
Требования к функционалу
1. При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50
    - При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20
    - Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +5
    - Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10
2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50
    - При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25
    - Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25
3. В разделе contacts реализован select с выбором городов +25
    - В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15
    - При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10

    Итого: 100
`);

const burgerBtnOpen = document.querySelector(".burger");
const navigationMobile = document.querySelector(".navigation");
const opacity = document.querySelector(".opacity");
const navigationLink = document.querySelectorAll(".navigation__link");
const hold = document.body;

function BurgerMenu() {
  navigationMobile.classList.toggle("show");
  burgerBtnOpen.classList.toggle("burger__active");
  opacity.classList.toggle("opacity-active");
  hold.classList.toggle("hold");
}

burgerBtnOpen.addEventListener("click", () => {
  BurgerMenu();
});

navigationLink.forEach((a) => {
  a.addEventListener("click", () => {
    BurgerMenu();
  });
});

opacity.addEventListener("click", () => {
  BurgerMenu();
});

// const buttonOpenPrices = document.querySelector(".list__button");
// const listItem = document.querySelector(".list__item"); //list__item-active
// const windowPricesActive = document.querySelector(".accordion"); // accordion-active - add need

// const priceList = document.querySelector(".list"); // obertka
// const listBlocks = document.querySelectorAll(".list__block"); // li

// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
// const windowActive = () => {
//   listItem.classList.add("active");
//   buttonOpenPrices.classList.add("active");
//   windowPricesActive.classList.add("active");
// };

// const windowNotActive = () => {
//   listItem.classList.remove("active");
//   buttonOpenPrices.classList.remove("active");  console.log("its ok")
//   windowPricesActive.classList.remove("active");
// };

// priceList.addEventListener("click", (e) => {
//   const button = e.target.closest(".list__item");
//   // console.log("button: ", button);

//   if (button) {
//     const item = button.closest(".list__block");
//     // console.log("item: ", item);

//     listBlocks.forEach((blockItem) => {
//       console.log(blockItem);
//       const openWindow = blockItem.querySelector(".list__accordion.accordion");
//       console.log(openWindow);
//       if (item === blockItem) {
//         blockItem.classList.contains("active");
//         listItem.classList.remove("active");
//         buttonOpenPrices.classList.remove("active");
//         windowPricesActive.classList.remove("active");
//       } else {
//         listItem.classList.add("active");
//         buttonOpenPrices.classList.add("active");
//         windowPricesActive.classList.add("active");
//       }
//     });
//   }
// });

const buttonOpenPrices = document.querySelector(".list__button");
const listItem = document.querySelector(".list__item"); //list__item-active
const windowPricesActive = document.querySelector(".accordion"); // accordion-active - add need
const priceList = document.querySelector(".list"); // obertka
const listBlocks = document.querySelectorAll(".list__block"); // li
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const basics = document.querySelector(".basics");
const standart = document.querySelector(".standart");
const procare = document.querySelector(".procare");
const basicsButton = document.querySelector(".basics__button");
const standartButton = document.querySelector(".standart__button");
const procareButton = document.querySelector(".procare__button");
const basicsAccordion = document.querySelector(".basics__accordion");
const standartAccordion = document.querySelector(".standart__accordion");
const procareAccordion = document.querySelector(".procare__accordion");

const basicstWin = () => {
  basics.classList.remove("active");
  basicsButton.classList.remove("active");
  basicsAccordion.classList.remove("active");
  basics.classList.remove("active");
};

const standartWin = () => {
  standart.classList.remove("active");
  standartButton.classList.remove("active");
  standartAccordion.classList.remove("active");
  standart.classList.remove("active");
};

const procareWin = () => {
  procareButton.classList.remove("active");
  procareAccordion.classList.remove("active");
  procare.classList.remove("active");
};

one.addEventListener("click", () => {
  standartWin();
  procareWin();

  basics.classList.toggle("active");
  basicsButton.classList.toggle("active");
  basicsAccordion.classList.toggle("active");

  one.querySelector(".accordion__order").addEventListener("click", (button) => {
    button.stopPropagation();
  });
});

two.addEventListener("click", () => {
  basicstWin();
  procareWin();

  standart.classList.toggle("active");
  standartButton.classList.toggle("active");
  standartAccordion.classList.toggle("active");

  two.querySelector(".accordion__order").addEventListener("click", (button) => {
    button.stopPropagation();
  });
});

three.addEventListener("click", () => {
  basicstWin();
  standartWin();

  procare.classList.toggle("active");
  procareButton.classList.toggle("active");
  procareAccordion.classList.toggle("active");

  three
    .querySelector(".accordion__order")
    .addEventListener("click", (button) => {
      button.stopPropagation();
    });
});

//

//

//

const listCity = [
  {
    city: "Canandaigua, NY",
    telephone: "+1 585 393 0001",
    address: "151 Charlotte Street",
  },
  {
    city: "New York City",
    telephone: "+1 212 465 0002",
    address: "9 East 91st Street",
  },
  {
    city: "Yonkers, NY",
    telephone: "+1 914 678 0003",
    address: "511 Warburton Ave",
  },
  {
    city: "Sherrill, NY",
    telephone: "+1 315 908 0004",
    address: "14 WEST Noyes BLVD",
  },
];

const townListGeneral = document.querySelector(".town");
const townListOpen = document.querySelector(".town__list"); // ul
const townBtn = document.querySelector(".town__open"); // div button open
const city = document.querySelectorAll(".town__item"); // li
const modalWindowCity = document.querySelector(".city"); // modal data
const dataWindowModal = document.querySelector(".city__block"); // data modal info
const titleSelectedCard = document.querySelector(".town__title");
// console.log(city);

townListGeneral.addEventListener("click", () => {
  townListGeneral.classList.toggle("active");
  townListOpen.classList.toggle("active");
  townBtn.classList.toggle("active");
});

city.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindowCity.classList.add("active");
    // const title = e.target;
    // console.log(title);

    // e.target === listCity[0]
    if (item.innerHTML === listCity[0].city) {
      selectionOffice(listCity[0]);
      titleSelectedCard.innerHTML = listCity[0].city;
      deleteActiveClass();
    } else if (item.innerHTML === listCity[1].city) {
      selectionOffice(listCity[1]);
      titleSelectedCard.innerHTML = listCity[1].city;
      deleteActiveClass();
    } else if (item.innerHTML === listCity[2].city) {
      selectionOffice(listCity[2]);
      titleSelectedCard.innerHTML = listCity[2].city;
      deleteActiveClass();
    } else if (item.innerHTML === listCity[3].city) {
      selectionOffice(listCity[3]);
      titleSelectedCard.innerHTML = listCity[3].city;
      deleteActiveClass();
    }
  });
});

function selectionOffice(listCity) {
  modalWindowCity.innerHTML = `
  <div class="city__general">
    <div class="city__block">
      <div class="city__title general">
        <p class="general__title city__title-general">City:</p>
        <p class="general__description city__title-name">${listCity.city}</p>
      </div>
      <div class="city__phone general">
        <p class="general__title city__phone-general">Phone:</p>
        <p class="general__description city__phone-number">${listCity.telephone}</p>
      </div>
      <div class="city__office general">
        <p class="general__title city__office-general">Office adress:</p>
        <p class="general__description city__office-adress">
        ${listCity.address}
        </p>
      </div>
    </div>

    <a class="city__button button" href="tel:${listCity.telephone}">
      Call us
    </a>
  </div>
`;
}

function deleteActiveClass() {
  townListGeneral.classList.add("active");
  townListOpen.classList.remove("active");
  townBtn.classList.remove("active");
}

document.body.addEventListener("click", (event) => {
  const buttonCall = event.target.closest(".city__button");
  if (!buttonCall) return;

  modalWindowCity.classList.remove("active");
  townListGeneral.classList.remove("active");
  titleSelectedCard.innerHTML = "City";
});

//

//

//

//

const gardenButton = document.querySelector(".garden");
const lawnButton = document.querySelector(".lawn");
const plantingButton = document.querySelector(".planting");

const activeClassLawn = document.querySelector(".lawnpicture");
const activeClassGardenOne = document.querySelector(".gardenone");
const activeClassGardenTwo = document.querySelector(".gardentwo");
const activeClassPlantingOne = document.querySelector(".plantingone");
const activeClassPlantingTwo = document.querySelector(".plantingtwo");
const activeClassPlantingThree = document.querySelector(".plantingthree");

let buttons;
const generalButtons = document.getElementById("buttons");
console.log();

gardenButton.addEventListener("click", () => {
  if (gardenButton.classList.contains("active")) {
    gardenButton.classList.remove("active");

    activeClassLawn.classList.remove("active");
    activeClassPlantingOne.classList.remove("active");
    activeClassPlantingTwo.classList.remove("active");
    activeClassPlantingThree.classList.remove("active");

    // activeClassGardenOne.classList.remove("active");
    // activeClassGardenTwo.classList.remove("active");
  } else {
    gardenButton.classList.add("active");
    // if ()

    activeClassLawn.classList.add("active");
    activeClassPlantingOne.classList.add("active");
    activeClassPlantingTwo.classList.add("active");
    activeClassPlantingThree.classList.add("active");

    // activeClassGardenOne.classList.add("active");
    // activeClassGardenTwo.classList.add("active");
  }

  if (
    lawnButton.classList.contains("active") &&
    plantingButton.classList.contains("active")
  ) {
    gardenButton.classList.remove("active");
    activeClassGardenOne.classList.add("active");
    activeClassGardenTwo.classList.add("active");
  }
});

lawnButton.addEventListener("click", () => {
  if (lawnButton.classList.contains("active")) {
    // activeClassLawn.classList.add("active");
    lawnButton.classList.remove("active");

    activeClassGardenOne.classList.remove("active");
    activeClassGardenTwo.classList.remove("active");
    activeClassPlantingOne.classList.remove("active");
    activeClassPlantingTwo.classList.remove("active");
    activeClassPlantingThree.classList.remove("active");
  } else {
    lawnButton.classList.add("active");
    if (
      // activeClassGardenOne.classList.contains("active") &&
      // activeClassGardenTwo.classList.contains("active") &&
      gardenButton.classList.contains("active")
    ) {
      activeClassGardenOne.classList.remove("active");
      activeClassGardenTwo.classList.remove("active");
    } else {
      activeClassGardenOne.classList.add("active");
      activeClassGardenTwo.classList.add("active");
      activeClassPlantingOne.classList.add("active");
      activeClassPlantingTwo.classList.add("active");
      activeClassPlantingThree.classList.add("active");
    }

    // if (
    //   activeClassGardenOne.classList.contains("active") &&
    //   activeClassGardenTwo.classList.contains("active") &&
    //   activeClassLawn.classList.contains("active")
    // ) {
    //   plantingButton.preventDefault();
    // }

    activeClassLawn.classList.remove("active");
  }
  if (
    gardenButton.classList.contains("active") &&
    plantingButton.classList.contains("active")
  ) {
    lawnButton.classList.remove("active");
    activeClassLawn.classList.add("active");
  }
});

plantingButton.addEventListener("click", () => {
  activeClassGardenOne.classList.add("active");
  activeClassGardenTwo.classList.add("active");
  activeClassLawn.classList.add("active");
  activeClassPlantingOne.classList.remove("active");
  activeClassPlantingTwo.classList.remove("active");
  activeClassPlantingThree.classList.remove("active");
  plantingButton.classList.toggle("active");

  if (
    gardenButton.classList.contains("active") &&
    lawnButton.classList.contains("active")
  ) {
    plantingButton.classList.remove("active");
    activeClassPlantingOne.classList.add("active");
    activeClassPlantingTwo.classList.add("active");
    activeClassPlantingThree.classList.add("active");
    activeClassGardenOne.classList.remove("active");
    activeClassGardenTwo.classList.remove("active");
    activeClassLawn.classList.remove("active");
  }
  if (
    plantingButton.classList.contains("active") &&
    gardenButton.classList.contains("active")
  ) {
    activeClassGardenOne.classList.remove("active");
    activeClassGardenTwo.classList.remove("active");
    activeClassLawn.classList.add("active");
    activeClassPlantingOne.classList.remove("active");
    activeClassPlantingTwo.classList.remove("active");
    activeClassPlantingThree.classList.remove("active");
  }
  // if (!plantingButton.classList.contains("active")) {
  //   activeClassGardenOne.classList.remove("active");
  //   activeClassGardenTwo.classList.remove("active");
  //   activeClassLawn.classList.remove("active");
  //   activeClassPlantingOne.classList.remove("active");
  //   activeClassPlantingTwo.classList.remove("active");
  //   activeClassPlantingThree.classList.remove("active");
  // }
});
