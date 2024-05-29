// Cart.js

import React from "react";
import { useCart } from "react-use-cart";

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
  if (isEmpty) return <h2>Your cart is empty</h2>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5> Total Items ({totalItems})</h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      {/* To remove one item to carts */}
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button className="ms-2">Items</button>
                      {/* To add one item to carts */}
                      <button
                        className="btn btn-success ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      {/* To Remove all */}
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Items
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* Total Amount */}
        <div className="col-auto ms-auto ">
          <h2> Total Price: Rs {cartTotal}</h2>
        </div>
      </div>
      {/* Clear the Cart */}
      <div className="col-auto">
        <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
          Clear Cart
        </button>
        <button className="btn btn-success">Check Out</button>
      </div>
    </section>
  );
};

export default Cart;
