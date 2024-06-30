import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container my-4">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.thumbnail} alt={item.title} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">₹{item.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total: ₹{total}</h5>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
