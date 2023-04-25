import React from "react";

import './Menu.css';
import Accordion from "./Accordion";

import beer1 from "../images/beer1.jpg";
import beer2 from "../images/beer2.jpg";
import beer3 from "../images/beer3.jpg";
import beer4 from "../images/beer4.jpg";
import beer5 from "../images/beer5.jpg";
import beer6 from "../images/beer6.jpg";

const accordions = [
  {
    title: "Hoppy Haze",
    description1:
      "ABV: 5.0%",
    description2:
      "IBU: 15.1 ",
    description3: `A cloudy and smooth IPA with a bright and floral aroma, bursting with juicy tropical fruit flavors and a refreshing hop finish.`,
    image: beer1,
    imageDescription: "Hoppy Haze pic",
  },
  {
    title: "Sour Power",
    description1:
      "ABV: 4.0%",
    description2:
      "IBU: 16.1 . ",
    description3: `A tangy and fruity sour beer with a tart kick that wakes up your taste buds. A light and refreshing option for a summer day.`,
    image: beer2,
    imageDescription: "Sour Power pic",
  },
  {
    title: "Roasty Toasty",
    description1: "ABV: 5.0%",
    description2: "IBU: 19.1 ",
    description3:`A full-bodied, dark ale with a rich, toasty flavor profile. Notes of chocolate, coffee and caramel are complemented by a slight bitterness, making for a perfect winter brew.`,
    image: beer3,
    imageDescription: "Roasty Toasty pic",
  },
  {
    title: "Farmhouse Funk",
    description1: `ABV: 5.0%`,
    description2: `IBU: 13.1 `,
    description3: `"A spicy and complex saison with a dry and effervescent mouthfeel. Notes of pepper and clove give way to a funky, earthy finish.`,
    image: beer4,
    imageDescription: "Farmhouse Funk puc",
  },
  {
    title: "Bold and Beautiful",
    description1: `ABV: 5.0% `,
    description2: `IBU: 13.1`,
    description3: `A rich and robust imperial stout with deep roasted flavors of chocolate and espresso. A strong and warming beer, perfect for sipping by the fire on a cold winter night.`,
    image: beer5,
    imageDescription: "Bold and Beautiful pic",
  },
  {
    title: "Smooth Operator",
    description1: `ABV: 5.0%`,
    description2: `IBU: 11.1`,
    description3: `A creamy and velvety milk stout with a subtle sweetness. Hints of chocolate and coffee balance out the smoothness for a perfectly balanced, easy-drinking brew.`,
    image: beer6,
    imageDescription:
      "Smooth Operator pic",
  },
];

function Menu() {
  return (
    <div className="menu-page">
      <div className="menu-page__content">
        {accordions.map((accordion) => {
          return (
            <Accordion
              key={accordion.title}
              title={accordion.title}
              description1={accordion.description1}
              description2={accordion.description2}
              description3={accordion.description3}
              image={accordion.image}
              imagDescription={accordion.imageDescription}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;