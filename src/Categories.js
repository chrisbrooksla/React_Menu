import React from 'react';


// let's pass in (destructure)the prop "categories" and "filterItems" that we defined in the <Categories/> component on App.js
const Categories = ({categories, filterItems}) => {
  return <div className="btn-container">
    {/* we map over the "categories" to return a button for each category in the "allCategories" array*/}
    {categories.map((category, index) =>{
      // we use the "filterItems" function we made in App.js to filter the categories when the buttons are clicked..
      return <button type="button" className="filter-btn" key={index} onClick={() => filterItems(category)}>
        {category}
      </button>
    })}
  </div>
};

export default Categories;
