/// CONTROLS DESTINATION PAGE EVENT HANDLERS.

const planetNav = document.querySelector("#planet-nav");
const moon = document.querySelector("#moon");
const mars = document.querySelector("#mars");
const europa = document.querySelector("#europa");
const titan = document.querySelector("#titan");

const planetIMG = document.querySelector("#planets");
const planetName = document.querySelector("#planet-name");
const planetInfo = document.querySelector("#planet-info");
const planetDistance = document.querySelector("#planet-distance");
const travelTime = document.querySelector("#planet-time");
const headerHamBurger = document.querySelector(".header__nav--hamburger");
const mobileNav = document.querySelector(".mobile-nav");

headerHamBurger.addEventListener("click", (e) => {
  mobileNav.classList.toggle("mobile-nav--active");
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile-nav__item")) {
    mobileNav.classList.remove("mobile-nav--active");
  }
});

planetNav.addEventListener("click", (e) => {
  console.log(e.target.id);

  const planetFunction = (name, info, distance, time) => {
    planetName.textContent = name;
    planetInfo.textContent = info;
    planetDistance.textContent = distance;
    travelTime.textContent = time;
  };

  if (e.target.id === "moon") {
    planetIMG.src = "assets/destination/image-moon.png";

    planetFunction(
      "moon",
      `See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
      "384,400 KM",
      "3 days"
    );
  } else if (e.target.id === "mars") {
    planetIMG.src = "assets/destination/image-mars.png";

    planetFunction(
      "mars",
      `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!`,
      "225 MIL. KM",
      "9 Months"
    );
  } else if (e.target.id === "europa") {
    planetIMG.src = "assets/destination/image-europa.png";

    planetFunction(
      "europa",
      `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
      "628 MIL. KM",
      "3 years"
    );
  } else {
    planetIMG.src = "assets/destination/image-titan.png";

    planetFunction(
      "titan",
      `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
      "1.6 BIL. KM",
      "7 years"
    );
  }
});
