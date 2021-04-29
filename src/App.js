import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// this is going to filter the "categories" from the "items" array.
// we want to filter out only the unique categories, so we don't display duplicates..we just want one of each...
// Set only gets unique values
// we are setting a new array, where the first item is going to be "all", then we use the spread operator
// to get the other unique categories...
const allCategories = ['all', ...new Set (items.map((item) => item.category))];


function App() {

  // let's set up state values for the menu items and the categories....
  // the menuItems are set to the array we are getting from .data.js, which we call "items".
  const [menuItems, setMenuItems] = useState(items);

  // our state value for "categories" is going to be set to the "allCategories" array
  const [categories, setCategories] = useState(allCategories);


  // this sets up the functionality for the buttons on the menu
  // let's make a function called filerItems which looks for a string, which we will call "category"...
  const filterItems = (category) => {

    // if the category is set to "all", return the full array....
    if(category === 'all'){
      setMenuItems(items);
      return;
    }

    // we want to iterate of the "items" array and if the item category matches the "category" string we are passing in,
    // put that item category into a new array, which we will call "newItems"...
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      {/* categories is equal to our "categories" state value */}
      <Categories categories={categories} filterItems={filterItems}/>

      {/* let's pass in the menuItems state value to the Menu component... */}
      <Menu items = {menuItems}/>
    </section>
  </main>
}

export default App;
