import React, { useEffect, useState } from "react";
import "./Cards.css"; // Import the CSS file for styling

const Cards = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product); // Call addToCart function passed via props
    };

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mx-4 my-4">
            {products.map((product) => (
                <div key={product.id} className="col">
                    <div className="card shadow-sm">
                        <img src={product.thumbnail} alt={product.title} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="text-body-secondary">₹{product.price}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
