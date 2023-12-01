import React, { useState, useEffect } from 'react';
import Burger from './Burger';

const MenuPage = () => {
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        fetch('http://localhost/burgerApi/api.php')
        .then(response => response.json())
        .then(data => setBurgers(data))
        .catch(e => console.log('Error fetching burgers:', e.message));
    }, []);

    return (
        <div>
            <h1 className="menu-title">Menu</h1>
            <div>
                {burgers.map(burger => (
                    <Burger key={burger.ID} name={burger.Name} description={burger.Description} price={burger.Price} />
                ))}
            </div>
        </div>
    );
};

export default MenuPage;
