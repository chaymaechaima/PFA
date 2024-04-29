import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css'


const Header = () => {
    //   let img1 = require('../pics/user.ico');

    const getNumberOfItemsInLocalStorage = () => {
        const items = JSON.parse(localStorage.getItem("cartItems")) || [];
        return items.length;
    };

    const [numberOfItems, setNumberOfItems] = useState(0);

    const updateNumberOfItems = () => {
        const count = getNumberOfItemsInLocalStorage();
        setNumberOfItems(count);
    };

    useEffect(() => {
       
        updateNumberOfItems();

    }, []);
    let logo = require('../pics/logo.png')
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img id="logo" src={logo}></img>

                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li id='element' class="nav-item active mr-5 ml-5">
                            <a class="nav-link"><Link id='link' to="/" className='header-link'>A propos</Link></a>
                        </li>
                        <li id='element' class="nav-item active mr-5 ml-5">
                            <a class="nav-link"><Link id='link' to="/" className='header-link'>Nos produit</Link></a>
                        </li>

                        <li id='element' class="nav-item mr-5 ml-5">
                            <a class="nav-link"><Link id='link' to="/Contact" className='header-link'>Contact</Link></a>
                        </li>
                        <li id='element' class="nav-item mr-5 ml-5">
                            <a class="nav-link"><Link id='link' to="/" className='header-link'>Customisation</Link></a>
                        </li>
                        <li id="mobilebtn" class="nav-item mr-5 ml-5">
                            <Link id='link' to="/Cart" className='header-link'>
                                <button id="Cart" class="btn" type="submit">
                                    Panier
                                    <span> </span>
                                    <span id='items_number' class="badge text-white ms-1 rounded-pill">{numberOfItems}</span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="navbar-nav">
                    <ul class="navbar-nav d-none d-lg-inline-flex">
                        <li class="nav-item mx-2">
                            <Link id='link' to="/Cart" className='header-link'>
                                <button id="Cart" class="btn">
                                    Panier
                                    <span> </span>
                                    <span id='items_number' class="badge text-white ms-1 rounded-pill">{numberOfItems}</span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

    )
}

export default Header;