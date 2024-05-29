// Home.js

import React from "react";
import Items from "./Items";
import Data from "./Data";

export default function Home() {
  return (
    <>
      <h2 className="text-center mt-4 mb-4">Mobile Accessories</h2>
      <section className="py-4 container ">
        <div className="row justify-content-evenly m-0 ">
          {Data.productData.map((item, index) => {
            return (
              <div className="col-11 col-md-6 col-lg-3">
                <Items
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  item={item}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
