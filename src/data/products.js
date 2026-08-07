// WHEY
import classic from "../assets/products/whey/classic.webp";
import choco from "../assets/products/whey/choco.webp";
import strawberry from "../assets/products/whey/strawberry.webp";
import blueberry from "../assets/products/whey/blueberry.webp";
import butterscotch from "../assets/products/whey/butterscotch.webp";
import caramel from "../assets/products/whey/caramel.webp";
import cookiesCreme from "../assets/products/whey/cookies-creme.webp";
import hazelnut from "../assets/products/whey/hazelnut.webp";

// PROTEIN BARS
import biscoffBar from "../assets/products/bars/biscoff.webp";
import blueberryBar from "../assets/products/bars/blueberry.webp";
import butterscotchBar from "../assets/products/bars/butterscotch.webp";
import cookiesCremeBar from "../assets/products/bars/cookies-creme.webp";
import doubleChocoBar from "../assets/products/bars/double-choco.webp";
import mangoBar from "../assets/products/bars/mango.webp";
import strawberryBar from "../assets/products/bars/strawberry.webp";
import vanillaAlmondBar from "../assets/products/bars/vanilla-almond.webp";

// PROTEIN CHIPS
import creamOnion from "../assets/products/chips/cream-onion.webp";
import periPeri from "../assets/products/chips/peri-peri.webp";
import salted from "../assets/products/chips/salted.webp";
import sweetSour from "../assets/products/chips/sweet-sour.webp";
export const products = [

  // ====================== WHEY ======================

{
  id: 1,
  slug: "classic-whey",
  name: "Classic Whey Protein",
  category: "Whey",
  flavor: "Classic",
  image: classic,

  price: 2499,

  rating: 4.9,
  reviews: 248,

  weight: "1 kg",
  servings: "30 Servings",
  protein: "25g",
  calories: "122 kcal",

  description:
    "A smooth, clean and versatile flavour with a light, creamy finish that pairs perfectly with every shake.",

  featured: true,
  bestseller: true,
  isNew: false,
  inStock: true
},

{
  id: 2,
  slug: "chocolate-whey",
  name: "Chocolate Whey Protein",
  category: "Whey",
  flavor: "Chocolate",
  image: choco,

  price: 2499,

  rating: 4.9,
  reviews: 312,

  weight: "1 kg",
  servings: "30 Servings",
  protein: "25g",
  calories: "122 kcal",

  description:
    "Rich cocoa notes blended into a velvety, indulgent chocolate shake with a satisfyingly smooth finish.",

  featured: true,
  bestseller: true,
  isNew: false,
  inStock: true
},

{
  id: 3,
  slug: "strawberry-whey",
  name: "Strawberry Whey Protein",
  category: "Whey",
  flavor: "Strawberry",
  image: strawberry,

  price: 2499,

  rating: 4.8,
  reviews: 186,

  weight: "1 kg",
  servings: "30 Servings",
  protein: "25g",
  calories: "122 kcal",

  description:
    "Sweet, juicy strawberry flavour with a refreshing fruity aroma and a creamy milkshake-like texture.",

  featured: true,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 4,
  slug: "blueberry-whey",
  name: "Blueberry Whey Protein",
  category: "Whey",
  flavor: "Blueberry",
  image: blueberry,

  price: 2499,

  rating: 4.8,
  reviews: 154,

  weight: "1 kg",
  servings: "30 Servings",
  protein: "25g",
  calories: "122 kcal",

  description:
    "A vibrant blueberry flavour with subtle berry sweetness, balanced by a smooth and creamy finish.",

  featured: true,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 5,
  slug: "butterscotch-whey",
  name: "Butterscotch Whey Protein",
  category: "Whey",
  flavor: "Butterscotch",
  image: butterscotch,

  price: 2499,

  rating: 4.7,
  reviews: 132,

  weight: "1 kg",
  servings: "30 Servings",
  protein: "25g",
  calories: "122 kcal",

  description:
    "Creamy butterscotch flavour layered with buttery caramel notes and a rich dessert-inspired finish.",

  featured: false,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 6,
  slug: "caramel-whey",
  name: "Caramel Whey Protein",
  category: "Whey",
  flavor: "Caramel",
  image: caramel,

  price: 2499,

  rating: 4.8,
  reviews: 141,

  weight: "1 kg",
  servings: "30 Servings",
  protein: "25g",
  calories: "122 kcal",

  description:
    "Silky caramel sweetness with toasted sugar notes for a luxuriously smooth and satisfying shake.",

  featured: false,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 7,
  slug: "cookies-creme-whey",
  name: "Cookies Creme Whey Protein",
  category: "Whey",
  flavor: "Cookies Creme",
  image: cookiesCreme,

  price: 2499,

  rating: 4.8,
  reviews: 169,

  weight: "1 kg",
  servings: "30 Servings",
  protein: "25g",
  calories: "122 kcal",

  description:
    "Classic cookies and crème flavour with chocolate cookie notes wrapped in a smooth vanilla cream finish.",

  featured: false,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 8,
  slug: "hazelnut-whey",
  name: "Hazelnut Whey Protein",
  category: "Whey",
  flavor: "Hazelnut",
  image: hazelnut,

  price: 2499,

  rating: 4.9,
  reviews: 97,

  weight: "1 kg",
  servings: "30 Servings",
  protein: "25g",
  calories: "122 kcal",

  description:
    "Roasted hazelnut flavour with warm nutty notes and a luxuriously creamy finish in every sip.",

  featured: false,
  bestseller: false,
  isNew: true,
  inStock: true
},
  // ====================== PROTEIN BARS ======================

{
  id: 9,
  slug: "biscoff-protein-bar",
  name: "Biscoff Protein Bar",
  category: "Bars",
  flavor: "Biscoff",
  image: biscoffBar,

  price: 149,

  rating: 4.9,
  reviews: 218,

  weight: "60 g",
  servings: "1 Bar",
  protein: "20g",
  calories: "210 kcal",

  description:
    "Rich caramelised biscuit flavour with a soft centre, delicate crunch and a perfectly balanced sweetness.",

  featured: true,
  bestseller: true,
  isNew: false,
  inStock: true
},

{
  id: 10,
  slug: "blueberry-protein-bar",
  name: "Blueberry Protein Bar",
  category: "Bars",
  flavor: "Blueberry",
  image: blueberryBar,

  price: 149,

  rating: 4.7,
  reviews: 126,

  weight: "60 g",
  servings: "1 Bar",
  protein: "20g",
  calories: "210 kcal",

  description:
    "Bursting with sweet blueberry flavour, wrapped in a soft, chewy texture with a smooth finish.",

  featured: true,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 11,
  slug: "butterscotch-protein-bar",
  name: "Butterscotch Protein Bar",
  category: "Bars",
  flavor: "Butterscotch",
  image: butterscotchBar,

  price: 149,

  rating: 4.8,
  reviews: 139,

  weight: "60 g",
  servings: "1 Bar",
  protein: "20g",
  calories: "210 kcal",

  description:
    "Smooth buttery butterscotch flavour with rich caramel notes and an irresistibly chewy bite.",

  featured: true,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 12,
  slug: "cookies-creme-protein-bar",
  name: "Cookies Creme Protein Bar",
  category: "Bars",
  flavor: "Cookies Creme",
  image: cookiesCremeBar,

  price: 149,

  rating: 4.8,
  reviews: 152,

  weight: "60 g",
  servings: "1 Bar",
  protein: "20g",
  calories: "210 kcal",

  description:
    "Chocolate cookie pieces blended with smooth vanilla cream for a rich cookies and crème experience.",

  featured: false,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 13,
  slug: "double-chocolate-protein-bar",
  name: "Double Chocolate Protein Bar",
  category: "Bars",
  flavor: "Double Chocolate",
  image: doubleChocoBar,

  price: 149,

  rating: 4.9,
  reviews: 247,

  weight: "60 g",
  servings: "1 Bar",
  protein: "20g",
  calories: "210 kcal",

  description:
    "Deep chocolate flavour layered with rich cocoa notes and a decadent fudgy centre in every bite.",

  featured: true,
  bestseller: true,
  isNew: false,
  inStock: true
},

{
  id: 14,
  slug: "mango-protein-bar",
  name: "Mango Protein Bar",
  category: "Bars",
  flavor: "Mango",
  image: mangoBar,

  price: 149,

  rating: 4.6,
  reviews: 96,

  weight: "60 g",
  servings: "1 Bar",
  protein: "20g",
  calories: "210 kcal",

  description:
    "Bright tropical mango flavour with juicy fruit notes and a naturally smooth, chewy texture.",

  featured: false,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 15,
  slug: "strawberry-protein-bar",
  name: "Strawberry Protein Bar",
  category: "Bars",
  flavor: "Strawberry",
  image: strawberryBar,

  price: 149,

  rating: 4.7,
  reviews: 118,

  weight: "60 g",
  servings: "1 Bar",
  protein: "20g",
  calories: "210 kcal",

  description:
    "Sweet strawberry flavour with creamy milkshake notes and a satisfyingly soft bite.",

  featured: false,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 16,
  slug: "vanilla-almond-protein-bar",
  name: "Vanilla Almond Protein Bar",
  category: "Bars",
  flavor: "Vanilla Almond",
  image: vanillaAlmondBar,

  price: 149,

  rating: 4.8,
  reviews: 91,

  weight: "60 g",
  servings: "1 Bar",
  protein: "20g",
  calories: "210 kcal",

  description:
    "Smooth Madagascan vanilla flavour complemented by lightly roasted almond notes and a creamy finish.",

  featured: false,
  bestseller: false,
  isNew: true,
  inStock: true
},
// ====================== PROTEIN CHIPS ======================

{
  id: 17,
  slug: "cream-onion-protein-chips",
  name: "Cream & Onion Protein Chips",
  category: "Chips",
  flavor: "Cream & Onion",
  image: creamOnion,

  price: 99,

  rating: 4.8,
  reviews: 164,

  weight: "40 g",
  servings: "1 Pack",
  protein: "10g",
  calories: "140 kcal",

  description:
    "A perfectly balanced blend of creamy herbs and savoury onion with a light, crispy crunch in every bite.",

  featured: true,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 18,
  slug: "peri-peri-protein-chips",
  name: "Peri Peri Protein Chips",
  category: "Chips",
  flavor: "Peri Peri",
  image: periPeri,

  price: 99,

  rating: 4.9,
  reviews: 256,

  weight: "40 g",
  servings: "1 Pack",
  protein: "10g",
  calories: "140 kcal",

  description:
    "Bold peri peri seasoning with smoky spices, vibrant heat and an irresistibly crispy finish.",

  featured: true,
  bestseller: true,
  isNew: false,
  inStock: true
},

{
  id: 19,
  slug: "salted-protein-chips",
  name: "Salted Protein Chips",
  category: "Chips",
  flavor: "Salted",
  image: salted,

  price: 99,

  rating: 4.7,
  reviews: 118,

  weight: "40 g",
  servings: "1 Pack",
  protein: "10g",
  calories: "140 kcal",

  description:
    "Classic lightly salted flavour that lets the crisp texture shine with every satisfying bite.",

  featured: true,
  bestseller: false,
  isNew: false,
  inStock: true
},

{
  id: 20,
  slug: "sweet-sour-protein-chips",
  name: "Sweet & Sour Protein Chips",
  category: "Chips",
  flavor: "Sweet & Sour",
  image: sweetSour,

  price: 99,

  rating: 4.8,
  reviews: 104,

  weight: "40 g",
  servings: "1 Pack",
  protein: "10g",
  calories: "140 kcal",

  description:
    "Tangy sweet and sour seasoning layered with subtle sweetness and a perfectly crunchy bite.",

  featured: false,
  bestseller: false,
  isNew: true,
  inStock: true
},

];