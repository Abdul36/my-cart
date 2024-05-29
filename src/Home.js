// Home.js
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Items from "./Items";
import Data from "./Data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleButtonClick = () => {
    // Add your logic here to perform some action when the button is clicked
    console.log("Button clicked!");
  };

  const filteredData = Data.productData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <div className="container mt-4">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleButtonClick}
          >
            Search
          </button>
        </div>
      </div>
      <h2 className="text-center mt-4 mb-4">Mobile Accessories</h2>
      <section className="py-4 container ">
        <Slider {...settings}>
          {filteredData.map((item, index) => (
            <div key={index}>
              <Items
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
              />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}
// After
