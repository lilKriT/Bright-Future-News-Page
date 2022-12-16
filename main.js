import "./style.css";

// Opening and closing the menu
const mobileMenu = document.querySelector("#mobileMenu");
const openMobileMenu = document.querySelector("#openMobileMenu");
const closeMobileMenu = document.querySelector("#closeMobileMenu");

openMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("visible");
  mobileMenu.classList.remove("invisible");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("invisible");
  mobileMenu.classList.remove("visible");
});

// Shrinking the navbar
const header = document.querySelector("header > nav");
document.addEventListener("scroll", (e) => {
  let pixelsFromTop = Math.round(window.scrollY);
  console.log(pixelsFromTop);
  if (pixelsFromTop > 50) {
    header.classList.remove("mt-12");
    header.classList.add("mt-2");
  } else {
    header.classList.remove("mt-2");
    header.classList.add("mt-12");
  }
});

// document.querySelector("#app").innerHTML = `
//   <div>
//   Home
//   New
//   Popular
//   Trending
//   Categories

//   The Bright Future of Web 3.0?

//   We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
//   But is it really fulfilling its promise?

//   Read more

//   New

//   Hydrogen VS Electric Cars
//   Will hydrogen-fueled cars ever catch up to EVs?

//   The Downsides of AI Artistry
//   What are the possible adverse effects of on-demand AI image generation?

//   Is VC Funding Drying Up?
//   Private funding by VC firms is down 50% YOY. We take a look at what that means.

//   01
//   Reviving Retro PCs
//   What happens when old PCs are given modern upgrades?

//   02
//   Top 10 Laptops of 2022
//   Our best picks for various needs and budgets.

//   03
//   The Growth of Gaming
//   How the pandemic has sparked fresh opportunities.
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));
