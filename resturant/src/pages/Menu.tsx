import { useState } from "react";

import MenuList from "../components/MenuList";

// Import all images
import bruschettaImg from "../images/Bruschetta.png";
import caesarSaladImg from "../images/Caesar Salad.png";
import chickenNoodleSoupImg from "../images/Chicken Noodle Soup.png";
import chickenParmesanImg from "../images/Chicken Parmesan.png";
import classicBurgerImg from "../images/Classic Burger.png";
import fishAndChipsImg from "../images/Fish and Chips.png";
import greekSaladImg from "../images/Greek Salad.png";

import grilledChickenImg from "../images/Grilled Chicken.png";
import grilledSalmonImg from "../images/Grilled Salmon.png";
import pastaAlfredoImg from "../images/Pasta Alfredo.png";

import spaghettiBologneseImg from "../images/Spaghetti Bolognese.png";
import springRollImg from "../images/Spring Roll.png";
import steakImg from "../images/Steak.png";
import tomatoSoupImg from "../images/Tomato Soup.png";
import CategoryFilter from "../components/CategoryFilter.";
import "../styles/global.css";

const menuItems = [
  // Appetizers
  {
    name: "Bruschetta",
    description: "Toasted bread topped with tomatoes, basil, and mozzarella",
    price: 6.99,
    image: bruschettaImg,
    category: "Appetizers",
  },
  {
    name: "Spring Rolls",
    description:
      "Crispy rolls filled with vegetables and served with dipping sauce",
    price: 5.99,
    image: springRollImg,
    category: "Appetizers",
  },

  // Salads
  {
    name: "Caesar Salad",
    description:
      "Fresh romaine lettuce with crispy croutons and grated parmesan cheese",
    price: 7.99,
    image: caesarSaladImg,
    category: "Salads",
  },
  {
    name: "Greek Salad",
    description: "Cucumbers, tomatoes, olives, and feta cheese",
    price: 8.99,
    image: greekSaladImg,
    category: "Salads",
  },

  // Soups
  {
    name: "Tomato Soup",
    description: "Creamy tomato soup with a hint of basil",
    price: 4.99,
    image: tomatoSoupImg,
    category: "Soups",
  },
  {
    name: "Chicken Noodle Soup",
    description: "Classic chicken noodle soup with vegetables",
    price: 5.99,
    image: chickenNoodleSoupImg,
    category: "Soups",
  },

  // Pasta
  {
    name: "Pasta Alfredo",
    description: "Creamy alfredo pasta with parmesan",
    price: 10.99,
    image: pastaAlfredoImg,
    category: "Pasta",
  },
  {
    name: "Spaghetti Bolognese",
    description: "Spaghetti with rich meat sauce",
    price: 11.99,
    image: spaghettiBologneseImg,
    category: "Pasta",
  },

  // Fish
  {
    name: "Grilled Salmon",
    description: "Freshly grilled salmon with lemon butter",
    price: 15.99,
    image: grilledSalmonImg,
    category: "Fish",
  },
  {
    name: "Fish and Chips",
    description: "Crispy battered fish with fries",
    price: 12.99,
    image: fishAndChipsImg,
    category: "Fish",
  },

  // Poultry
  {
    name: "Grilled Chicken",
    description: "Perfectly grilled chicken with sides",
    price: 12.99,
    image: grilledChickenImg,
    category: "Poultry",
  },
  {
    name: "Chicken Parmesan",
    description: "Breaded chicken topped with marinara and cheese",
    price: 13.99,
    image: chickenParmesanImg,
    category: "Poultry",
  },

  // Beef
  {
    name: "Classic Burger",
    description: "Juicy beef patty with fresh toppings",
    price: 8.99,
    image: classicBurgerImg,
    category: "Beef",
  },
  {
    name: "Steak",
    description: "Grilled steak with mashed potatoes",
    price: 25.69,
    image: steakImg,
    category: "Beef",
  },

  // Desserts
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3",
    category: "Desserts",
  },
  {
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1542124948-dc391252a940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Desserts",
  },
  {
    name: "New York Cheesecake",
    description: "Rich and creamy cheesecake with berry compote and a hint of cinnamon",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3",
    category: "Desserts",
  },

  // Drinks
  {
    name: "Fresh Lemonade",
    description: "Freshly squeezed lemonade with mint",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Drinks",
  },
  {
    name: "Iced Tea",
    description: "House-made iced tea with optional lemon",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-4.0.3",
    category: "Drinks",
  },
  {
    name: "Smoothies",
    description: "Choice of strawberry, mango, or mixed berry",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3",
    category: "Drinks",
  },
  {
    name: "Italian Soda",
    description: "Sparkling water with your choice of flavored syrup",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1558642891-54be180ea339?ixlib=rb-4.0.3",
    category: "Drinks",
  },
];

const categories = [
  "All",
  "Appetizers",
  "Salads",
  "Soups",
  "Pasta",
  "Fish",
  "Poultry",
  "Beef",
  "Desserts",
  "Drinks",
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🍽️ Our Menu</h1>

      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

      {/* Menu List */}
      <div className="row">
        <MenuList
          items={
            selectedCategory === "All"
              ? menuItems
              : menuItems.filter((item) => item.category === selectedCategory)
          }
        />
      </div>
    </div>
  );
};

export default Menu;
