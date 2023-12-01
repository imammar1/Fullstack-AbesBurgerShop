// Burger.js
import React from 'react';

const Burger = ({ name, description, price }) => {
    return (
        <div className="burger">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    );
};

export default Burger;
