import React from "react";
import { useState, useEffect } from 'react'
import '../styles/Costume.css'

const Costume2 = () => {


    const [mainProductImage, setMainProductImage] = useState(require('../pics/categories/case1/case9.webp'));
    const [selectedThumbnails, setSelectedThumbnails] = useState([]);
    const [selectedColor, setSelectedColor] = useState(0);

    const saveToLocalStorage = (key, data) => {
        try {
            const jsonData = JSON.stringify(data);
            localStorage.setItem(key, jsonData);
        } catch (error) {
            console.error("Error saving to local storage:", error);
        }
    };

    const handleAddToCart = (image, title, price) => {
        // Create a new cart item with the currently selected options and color
        const newCartItem = { 
            image, 
            title, 
            price, 
            options: selectedThumbnails, 
            color: selectedColor, 
            quantity: 1 
        };
    
        // Retrieve existing items from local storage
        const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
        // Check if there is an existing item with the same title, options, and color
        const existingItemIndex = existingItems.findIndex(item => 
            item.title === title &&
            JSON.stringify(item.options) === JSON.stringify(selectedThumbnails) &&
            item.color === selectedColor
        );
    
        if (existingItemIndex !== -1) {
            // If an item with the same title, options, and color exists, increase its quantity
            existingItems[existingItemIndex].quantity += 1;
        } else {
            // If no matching item is found, add the new cart item to the existing items
            existingItems.push(newCartItem);
        }
    
        // Save the updated array back to local storage
        saveToLocalStorage("cartItems", existingItems);
    };
    
    // Function to handle thumbnail click
    const handleColorClick = (index) => {
        // If the clicked thumbnail is already selected, remove the selection
        if (selectedColor === index) {
            setSelectedColor(null);
        } else {
            // Otherwise, set the clicked thumbnail as selected
            setSelectedColor(index);
        }
    };
    const handleThumbnailClick = (filename) => {
        let updatedThumbnails = [];
        if (selectedThumbnails.includes(filename)) {
            updatedThumbnails = selectedThumbnails.filter((item) => item !== filename);
        } else {
            updatedThumbnails = [...selectedThumbnails, filename];
        }
        setSelectedThumbnails(updatedThumbnails);
    };

    // Function to change the main product image
    const changeImage = (src) => {
        setMainProductImage(src);
    };
    let img = 'case9.webp'
    let img1 = require('../pics/categories/case1/case9.webp')
    let img2 = require('../pics/categories/case1/case10.webp')
    let img3 = require('../pics/categories/case1/case11.webp')
    let img4 = require('../pics/categories/case1/case12.webp')

    let cos1 = require('../pics/costum/costum1.jpg')
    let cos2 = require('../pics/costum/costum2.png')
    let cos3 = require('../pics/costum/costum3.png')
    let cos4 = require('../pics/costum/costum4.jpg')
    let cos5 = require('../pics/costum/costum5.jpg')
    let cos6 = require('../pics/costum/costum6.jpg')
    let cos7 = require('../pics/costum/costum7.jpg')
    let cos8 = require('../pics/costum/costum8.png')
    let cos9 = require('../pics/costum/costum9.jpg')
    let cos10 = require('../pics/costum/costum10.png')

    
    return (
        <>

            <div class="container mt-5 mb-5">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-6 border-end">
                            <div class="d-flex flex-column justify-content-center">
                                <div class="main_image">
                                    <img src={mainProductImage} id="main_product_image" width="350" />
                                </div>
                                <div class="thumbnail_images">
                                    <ul id="thumbnail">
                                        <li><img onClick={() => changeImage(img1)} src={img1} width="70" alt="Thumbnail 1" /></li>
                                        <li><img onClick={() => changeImage(img2)} src={img2} width="70" alt="Thumbnail 2" /></li>
                                        <li><img onClick={() => changeImage(img3)} src={img3} width="70" alt="Thumbnail 3" /></li>
                                        <li><img onClick={() => changeImage(img4)} src={img4} width="70" alt="Thumbnail 4" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-3 right-side">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>PRO-gide SE730 Hard Protective Case</h3>
                                </div>
                                <div class="buttons d-flex ">
                                    <p>4962 MAD</p>
                                </div>
                                <br />
                                <h4>Customisation exterieure</h4>
                                <div class="thumbnail_images">
                                    <ul id="thumbnail">
                                        <li style={{ border: selectedThumbnails.includes('costum1.jpg') ? '2px solid #000' : 'none' }}>
                                            <img
                                                src={cos1}
                                                width="70"
                                                alt="Thumbnail 1"
                                                onClick={() => handleThumbnailClick('costum1.jpg')}
                                            />
                                        </li>
                                        <li style={{ border: selectedThumbnails.includes('costum2.png') ? '2px solid #000' : 'none' }}>
                                            <img
                                                src={cos2}
                                                width="70"
                                                alt="Thumbnail 2"
                                                onClick={() => handleThumbnailClick('costum2.png')}
                                            />
                                        </li>
                                        <li style={{ border: selectedThumbnails.includes('costum3.png') ? '2px solid #000' : 'none' }}>
                                            <img
                                                src={cos3}
                                                width="70"
                                                alt="Thumbnail 3"
                                                onClick={() => handleThumbnailClick('costum3.png')}
                                            />
                                        </li>
                                        <li style={{ border: selectedThumbnails.includes('costum4.jpg') ? '2px solid #000' : 'none' }}>
                                            <img
                                                src={cos4}
                                                width="70"
                                                alt="Thumbnail 4"
                                                onClick={() => handleThumbnailClick('costum4.jpg')}
                                            />
                                        </li>
                                    </ul>
                                    <ul id="thumbnail">
                                        <li style={{ border: selectedThumbnails.includes('costum5.jpg') ? '2px solid #000' : 'none' }}>
                                            <img
                                                src={cos5}
                                                width="70"
                                                alt="Thumbnail 1"
                                                onClick={() => handleThumbnailClick('costum5.jpg')}
                                            />
                                        </li>
                                        <li style={{ border: selectedThumbnails.includes('costum6.jpg') ? '2px solid #000' : 'none' }}>
                                            <img
                                                src={cos6}
                                                width="70"
                                                alt="Thumbnail 2"
                                                onClick={() => handleThumbnailClick('costum6.jpg')}
                                            />
                                        </li>
                                        <li style={{ border: selectedThumbnails.includes('costum7.jpg') ? '2px solid #000' : 'none' }}>
                                            <img
                                                src={cos7}
                                                width="70"
                                                alt="Thumbnail 3"
                                                onClick={() => handleThumbnailClick('costum7.jpg')}
                                            />
                                        </li>
                                        <li style={{ border: selectedThumbnails.includes('costum8.png') ? '2px solid #000' : 'none' }}>
                                            <img
                                                src={cos8}
                                                width="70"
                                                alt="Thumbnail 4"
                                                onClick={() => handleThumbnailClick('costum8.png')}
                                            />
                                        </li>

                                    </ul>

                                    <ul id="thumbnail">

                                    <li style={{ border: selectedThumbnails.includes('costum9.jpg') ? '2px solid #000' : 'none' }}>
                                            <img
                                                src={cos9}
                                                width="70"
                                                alt="Thumbnail 3"
                                                onClick={() => handleThumbnailClick('costum9.jpg')}
                                            />
                                        </li>
                                        <li style={{ border: selectedThumbnails.includes('costum10.png') ? '2px solid #000' : 'none' }}>
                                            <img
                                                src={cos10}
                                                width="70"
                                                alt="Thumbnail 4"
                                                onClick={() => handleThumbnailClick('costum10.png')}
                                            />
                                        </li>

                                    </ul>
                                </div>
                 
                                <div class="mt-5">

                                    <div class="colors">
                                        <ul id="marker">
                                            <h5>Couleur </h5>
                                            <li style={{transition: 'transform 0.3s ease',transform: selectedColor === 0 ? 'scale(1.2)' : 'none'}} id="marker-1" onClick={() => handleColorClick(0)}></li>
                                            <li style={{transition: 'transform 0.3s ease',transform: selectedColor === 1 ? 'scale(1.2)' : 'none'}} id="marker-2" onClick={() => handleColorClick(1)}></li>
                                            <li style={{transition: 'transform 0.3s ease',transform: selectedColor === 2 ? 'scale(1.2)' : 'none'}} id="marker-3" onClick={() => handleColorClick(2)}></li>
                                            <li style={{transition: 'transform 0.3s ease',transform: selectedColor === 3 ? 'scale(1.2)' : 'none'}} id="marker-4" onClick={() => handleColorClick(3)}></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mt-2 pr-3 content">
                                    <p id="cosen">Pour realise une customisation interieure veuillez contactez "pro-gide@gmail.com"</p>
                                </div>

                                <div class="buttons d-flex flex-row mt-5 gap-3">
                                    <button class="btn btn-outline-dark" onClick={() => handleAddToCart(img, "PRO-gide SE730 Hard Protective Case", 4962)}>Acheter</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Costume2;