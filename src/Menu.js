import React from 'react';

// lets access the items array in order to iterate over the list of its properties...
const Menu = ({items}) => {
  return <div className="section-center">

    {/* let's iterate over the "items" array */}
    {/* menuItem represents each object in the array */}
    {items.map((menuItem) =>{
      
      {/*  we'll destructure the menuItem object...*/}
      const {id, title, img, desc, price} = menuItem;

      // now we will return an article with the individual properties displayed...
      return <article key={id} className="menu-item">
        <img src={img} alt={title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">{price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    })}
  </div>
};

export default Menu;
