import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contactContainer">
            <h1>Contact Us</h1>
            <p>If you have any questions, comments, or just want to say hello, don't hesitate to reach out. We're here to help and always love hearing from our customers!</p>
            
            <div className="contactDetails">
                <p><strong>Phone:</strong> (313) 555-0123</p>
                <p><strong>Email:</strong> info@abesburgers.com</p>
                <p><strong>Address:</strong> 5901 Burger Lane, Dearborn, MI 48126</p>
            </div>

            <form className="contactForm">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your Name" />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your Email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message"></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;
