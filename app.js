const menu = [
  {
    id: 1,
    title: "Colosseum",
    category: "Travel",
    img: "img/travel/colosseum.jpeg",
    desc: `The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy. It is the largest ancient amphitheatre ever built. `,
  },
  {
    id: 2,
    title: "Fontana di Trevi",
    category: "Travel",
    img: "img/travel/fontana_di_trevi.jpeg",
    desc: `Fontana di Trevi is an 18th-century fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini and several others. `,
  },
  {
    id: 3,
    title: "Piazza Del Popolo",
    category: "Travel",
    img: "img/travel/piazza_del_popolo.jpeg",
    desc: `Piazza del Popolo is a large urban square in Rome. The name in modern Italian literally means "People's Square". `,
  },
  {
    id: 4,
    title: "Ravioli",
    category: "Food",
    img: "img/food/ravioli.jpeg",
    desc: `Ravioli are part of the Italian tradition, especially in northern Italy. A sheet of very thin, almost transparent pasta is rolled out by hand with a rolling pin or using a pasta machine and then stuffed. `,
  },
  {
    id: 5,
    title: "Tiramisu",
    category: "Dessert",
    img: "img/dessert/tiramisu.jpeg",
    desc: `Tiramisu is a coffee-flavoured Italian dessert. Pompi is one of the best place to eat Tiramisu in Italy! `,
  },
  {
    id: 6,
    title: "Ice Cream",
    category: "Dessert",
    img: "img/dessert/ice_cream.jpeg",
    desc: `Giolitti is a well-known café and pastry shop, and reportedly the oldest ice cream parlor in Rome, Italy. Perfect place to taste Italian ice cream! `,
  },
  {
    id: 7,
    title: "Spaghetti",
    category: "Food",
    img: "img/food/spaghetti.jpeg",
    desc: `Spaghetti is a staple food of traditional Italian cuisine. `,
  },
  {
    id: 8,
    title: "Croissant & Coffee",
    category: "Dessert",
    img: "img/dessert/croissant.jpeg",
    desc: `Croissants are named for their historical crescent shape. Perfect pair with Italian coffee :) `,
  },
];

const allButton = document.querySelector("#All");
const travelButton = document.querySelector("#Travel");
const foodButton = document.querySelector("#Food");
const dessertButton = document.querySelector("#Dessert");
const itemDOM = document.querySelector("#itemDiv");

allButton.addEventListener("click", allButtonOnClick);
travelButton.addEventListener("click", travelButtonOnClick);
foodButton.addEventListener("click", foodButtonOnClick);
dessertButton.addEventListener("click", dessertButtonOnClick);

function allButtonOnClick() {
  itemDOM.innerHTML = "";
  menu.map((e) => {
    let div = `
        <div class = "menu-items col-lg-6 col-sm-12">
        <img src = ${e.img} alt = ${e.title} class = "photo">
        <div class = "menu-info">
        <div class = "menu-title">
        <h4> ${e.title} </h4>
        </div>
        <div class = "menu-text"> ${e.desc}
        </div>
        </div>
        </div>
        `;
    itemDOM.innerHTML += div;
  });
}

function travelButtonOnClick() {
  itemDOM.innerHTML = "";
  menu.map((e) => {
    if (e.category === "Travel") {
      let div = `
          <div class = "menu-items col-lg-6 col-sm-12">
          <img src = ${e.img} alt = ${e.title} class = "photo">
          <div class = "menu-info">
          <div class = "menu-title">
          <h4> ${e.title} </h4>
          </div>
          <div class = "menu-text"> ${e.desc}
          </div>
          </div>
          </div>
          `;
      itemDOM.innerHTML += div;
    }
  });
}

function foodButtonOnClick() {
  itemDOM.innerHTML = "";
  menu.map((e) => {
    if (e.category === "Food") {
      let div = `
          <div class = "menu-items col-lg-6 col-sm-12">
          <img src = ${e.img} alt = ${e.title} class = "photo">
          <div class = "menu-info">
          <div class = "menu-title">
          <h4> ${e.title} </h4>
          </div>
          <div class = "menu-text"> ${e.desc}
          </div>
          </div>
          </div>
          `;
      itemDOM.innerHTML += div;
    }
  });
}

function dessertButtonOnClick() {
  itemDOM.innerHTML = "";
  menu.map((e) => {
    if (e.category === "Dessert") {
      let div = `
          <div class = "menu-items col-lg-6 col-sm-12">
          <img src = ${e.img} alt = ${e.title} class = "photo">
          <div class = "menu-info">
          <div class = "menu-title">
          <h4> ${e.title} </h4>
          </div>
          <div class = "menu-text"> ${e.desc}
          </div>
          </div>
          </div>
          `;
      itemDOM.innerHTML += div;
    }
  });
}

function firstPage() {
  itemDOM.innerHTML = "";
  menu.map((e) => {
    let div = `
      <div class="menu-items col-lg-6 col-sm-12">
          <img src=${e.img} alt=${e.title} class="photo">
            <div class="menu-info">
              <div class="menu-title">
                <h4>${e.title}</h4>
              </div>
              <div class="menu-text">
              ${e.desc}
              </div>
            </div>
        </div>
      `;
    itemDOM.innerHTML += div;
  });
}
firstPage();
