import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import "./cart.css";
import Button from "../../core/button";

const Cart = () => {
  const {
    isEmpty,
    updateItemQuantity,
    totalItems,
    items,
    cartTotal,
    removeItem,
    emptyCart,
  } = useCart();

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    deliveryMode: "",
  });
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      address: "",
      deliveryMode: "",
    });
    setShowCheckoutForm(false);
    setThankYouMessage("Thank you for your purchase!");
  };

  return (
    <section className="py-4 container mt-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5 className="mb-3"> Total Items ({totalItems})</h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.img}
                      style={{ height: "6rem" }}
                      alt={item.title}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>Rs {item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button
                        className="btn btn-outline-danger"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <FaMinus />
                      </button>
                      <button className="btn btn-outline-secondary" disabled>
                        {item.quantity}
                      </button>
                      <button
                        className="btn btn-outline-success"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <FaPlus />
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto mt-3">
          <h2> Total Price: Rs {cartTotal}</h2>
        </div>
        <div className="col-auto mt-3">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button className="btn btn-success" onClick={handleCheckout}>
            Check Out
          </button>
          <Button title="Check out" onClick={() => {}} />
        </div>
      </div>

      {showCheckoutForm && (
        <div className="checkout-form">
          <h2>Checkout Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required // Make field compulsory
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required // Make field compulsory
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required // Make field compulsory
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required // Make field compulsory
              />
            </div>
            <div className="form-group">
              <label htmlFor="deliveryMode">Mode of Delivery:</label>
              <select
                className="form-control"
                id="deliveryMode"
                name="deliveryMode"
                value={formData.deliveryMode}
                onChange={handleInputChange}
                required // Make field compulsory
              >
                <option value="">Select mode</option>
                <option value="homeDelivery">Home Delivery</option>
                <option value="pickUp">Pick Up</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>
      )}

      {thankYouMessage && <p>{thankYouMessage}</p>}
    </section>
  );
};

export default Cart;
