import React, { useState } from "react";

const NavBar = ({ cartItems, removeFromCart, numOfItems, toggleCart, showProducts }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
    toggleCart();
  };

  const handleShowProductsClick = () => {
    showProducts();
    setCartOpen(false); // Close the cart when showing products
  };

  return (
    <nav className="navbar navbar-expand-md px-4 bg-dark" data-bs-theme="dark" style={{ width: "100%" }}>
      <h1 className="navbar-brand text-white" onClick={handleShowProductsClick}>My_Shop</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`offcanvas offcanvas-end ${cartOpen ? 'show' : ''}` } tabIndex="0" id="offcanvas" aria-labelledby="offcanvasLabel"  style={{ width: "50%"}}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">My_Shop</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCartClick}></button>
        </div>

        <div className="offcanvas-body">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <div className="navbar-nav flex-grow-1 justify-content-end">
            <button className="rounded-2">Support</button>
            <button className="rounded-2" onClick={handleCartClick}>🛒Cart ({numOfItems})</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
