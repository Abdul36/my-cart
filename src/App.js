// App.js
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { CartProvider } from "react-use-cart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar onSearch={handleSearch} />
          <Home />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar onSearch={handleSearch} />
          <Cart />
        </>
      ),
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
