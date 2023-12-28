import react from "react";

const Gadgets = [
  {
    brand: "boat",
    name: "Boat Wave",
    price: "1499",
    images: [
      "https://m.media-amazon.com/images/I/71EFWw+cOfL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61SDtm+PRLL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61boFMehVAL._SL1500_.jpg",
    ],
    category: "smartwatch",
  },
  {
    brand: "firebolt",
    name: "Firebolt Dagger Pro+",
    price: "2299",
    images: [
      "https://m.media-amazon.com/images/I/71sTY2XLBeL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81br81ZETjL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71uaVDlPxiL._SL1500_.jpg",
    ],
    category: "smartwarch",
  },
  {
    brand: "noise",
    name: "Noise Quad Call",
    price: "1299",
    images: [
      "https://m.media-amazon.com/images/I/61QMPHGyc2L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ppt3YjuiL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61L+niokQKL._SL1500_.jpg",
    ],
    category: "smartwatch",
  },
  {
    brand: "boat",
    name: "Boat Extend Call",
    price: "2499",
    images: [
      "https://m.media-amazon.com/images/I/61txwzKR2bL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/811Xj6ATOKL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/7159CKouEsL._SL1500_.jpg",
    ],
    category: "smartwatch",
  },
  {
    brand: "firebolt",
    name: "FireBolt Ninja Call pro+",
    price: "1499",
    images: [
      "https://m.media-amazon.com/images/I/61ZrPtiuqSL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/619YgJNb7OL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61KXVMzolgL._SL1500_.jpg",
    ],
    category: "smartwatch",
  },
  {
    brand: "boat",
    name: "Boat Lunar",
    price: "3499",
    images: [
      "https://m.media-amazon.com/images/I/61BSW83s47L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/611-vtJTP+L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71hr+0miAHL._SL1500_.jpg",
    ],
    category: "smartwatch",
  },
  {
    brand: "firebolt",
    name: "FireBolt Pheniox Pro ",
    price: "1199",
    images: [
      "https://m.media-amazon.com/images/I/61GwfK83hjL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61eauBY3YEL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u05p+zyyL._SL1500_.jpg",
    ],
    category: "smartwatch",
  },
  {
    brand: "boat",
    name: "Boat Wave Elevate",
    price: "2299",
    images: [
      "https://m.media-amazon.com/images/I/71cWsNcJI0L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/715sxJv-7mL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71bF2Lw7yFL._SL1500_.jpg",
    ],
    category: "smartwatch",
  },

  {
    brand: "Noise",
    name: "Noise Buds v12",
    price: "1399",
    images: [
      "https://m.media-amazon.com/images/I/51O-ZSlD6eL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61ldbddBSfL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61VpfL5d5RL._SL1500_.jpg",
    ],
    category: "earphones",
  },
  {
    brand: "boat",
    name: "Boat Extend Call",
    price: "1899",
    images: [
      "https://m.media-amazon.com/images/I/71EFWw+cOfL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61SDtm+PRLL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61boFMehVAL._SL1500_.jpg",
    ],
    category: "smartwatch",
  },
  {
    brand: "noise",
    name: "Noise Colorfit Pulse",
    price: "1499",
    images: [
      "https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ET3egVxVL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61q+hKZQuLL._SL1500_.jpg",
    ],
    category: "smartwarch",
  },
  {
    brand: "Noise",
    name: "Noise Buds VS141",
    price: "1799",
    images: [
      "https://m.media-amazon.com/images/I/51+e7yrgPpL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/610oyib+oGL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/7149tNu34SL._SL1500_.jpg",
    ],
    category: "earphones",
  },
  {
    brand: "boat",
    name: "Boat Bassheads",
    price: "399",
    images: [
      "https://m.media-amazon.com/images/I/719elVA3FvL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/616ZjT2IBvL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61ev3M9LmQL._SL1500_.jpg",
    ],
    category: "earphones",
  },
  {
    brand: "firebolt",
    name: "FireBolt Quest",
    price: "1599",
    images: [
      "https://m.media-amazon.com/images/I/71e0zvnGfGL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61swN33Op0L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71KnBYsH2TL._SL1500_.jpg",
    ],
    category: "smartwatch",
  },
  {
    brand: "boat",
    name: "Boat Rockerz",
    price: "1099",
    images: [
      "https://m.media-amazon.com/images/I/61BjtRZNCML._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61ktXGoAnWL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/617z+fqS+gL._SL1500_.jpg",
    ],
    category: "earphones",
  },
  {
    brand: "firebolt",
    name: "Firebolt Staineless steel 2.0",
    price: "2399",
    images: [
      "https://m.media-amazon.com/images/I/61dvV0PDeUL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ci4gSZ0-L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71T7TqLjg7L._SL1500_.jpg",
    ],
    category: "smartwarch",
  },
  {
    brand: "firebolt",
    name: "FireBolt Pheniox",
    price: "1399",
    images: [
      "https://m.media-amazon.com/images/I/71QBKlOMCAL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71tY8w8g9OL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71+IFNuqgQL._SL1500_.jpg",
    ],
    category: "smartwarch",
  },
  {
    brand: "noise",
    name: "Noise Colorfit 2",
    price: "3399",
    images: [
      "https://m.media-amazon.com/images/I/71hUqNCL-zL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71+UtHmERqL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Y8ARMGxbL._SL1500_.jpg",
    ],
    category: "smartwarch",
  },
  {
    brand: "fastrack",
    name: "Fastrack 2.0",
    price: "2599",
    images: [
      "https://m.media-amazon.com/images/I/613-tICaGQL._SL1080_.jpg",
      "https://m.media-amazon.com/images/I/71BlkyWYupL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/712xBKJZgHL._SL1500_.jpg",
    ],
    category: "smartwarch",
  },
  {
    brand: "boat",
    name: "Boat Rockerz 551",
    price: "3999",
    images: [
      "https://m.media-amazon.com/images/I/61WFLydWqpL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/612QkoZnjYL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61qajOfnAnL._SL1500_.jpg",
    ],
    category: "earphones",
  },
  {
    brand: "boat",
    name: "Boat Nirvana 211",
    price: "1299",
    images: [
      "https://m.media-amazon.com/images/I/61NDPRXm9XL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/613fg2+emBL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61Nnq4sVenL._SL1500_.jpg",
    ],
    category: "earphones",
  },
];

export default Gadgets;
