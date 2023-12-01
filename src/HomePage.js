import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import abeburgerImage from './abeburger.jpg'; 


const HomePage = () => {
    const navigate = useNavigate();

    const handleOrderNowClick = () => {
        navigate('/menu'); // This will navigate to the MenuPage when the button is clicked
    };
    
    return (
        <div className="homePage">
            <div className="heroSection">
                <h1>Welcome to Abe's Burger Shop!</h1>
                <p>Discover our delicious burgers!</p>
                <button className="orderNowButton" onClick={handleOrderNowClick}>Order Now</button>
            </div>

            <div className="aboutSection">
                <h2>Meet Chef Abe</h2>
                <p>At the heart of Abe's Burger Shop is our esteemed Chef Abe, whose passion for cooking has transformed the Dearborn culinary scene. Opening in January 2023, Abe's Burger Shop is the culmination of Chef Abe's journey, marked by a relentless pursuit of perfection and a dedication to quality.</p>
                <p>From the age of five, Chef Abe was enchanted by the magic of flavors and the joy of creating dishes that bring people together. His philosophy is simple: use only the freshest local ingredients, treat them with respect, and combine them in a way that delights all five senses.</p>
                <img src={abeburgerImage} alt="Chef Abe" />
                <p>Chef Abe's signature burgers are more than just a meal; they're a celebration of community, a nod to culinary innovation, and most importantly, a tribute to the timeless art of burger-making. Join us and taste the difference that passion and expertise bring to the table.</p>
            </div>


            <div className="testimonialSection">
                <h2>What Our Customers Say</h2>
                <blockquote>"Absolutely the best burgers I've ever had! The secret sauce is amazing." - Jane Doe</blockquote>
                <blockquote>"Great atmosphere and friendly staff. A must-visit for burger lovers." - John Smith</blockquote>
            </div>

            <div className="specialOfferSection">
                <h2>Special Offers</h2>
                <p>Get a free drink with every burger this weekend!</p>
            </div>
        </div>
    );
};

export default HomePage;
