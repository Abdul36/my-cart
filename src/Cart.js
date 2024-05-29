import React from "react";
import { useCart } from "react-use-cart";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import "./cart.css";
import "./cart.css";

const Cart = () => {
  const {
    isEmpty,
    updateItemQuantity,
    totalUniqueItems,
    items,
    totalItems,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h2 className="text-center mt-5">Your cart is empty</h2>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5 className="mb-3"> Total Items ({totalItems})</h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
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
                );
              })}
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
          <button className="btn btn-success">Check Out</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
