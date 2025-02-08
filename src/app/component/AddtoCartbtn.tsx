"use client";
import { CiSquareRemove } from "react-icons/ci";
import React from "react";
import Image from "next/image";
import { tproduct } from "../types"; // Assuming tproduct is properly defined


// Component definition
function AddtoCartbtn({ productdata }: { productdata: tproduct[] }) {

  function HandleClick(product: tproduct) {
   
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");

  
    if (cart[product.name]) {
     
      cart[product.name] = { ...cart[product.name], quantity: cart[product.name].quantity + 1 };
    } else {
     
      cart[product.name] = { ...product, quantity: 1 };
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Notify the user
    alert(`${product.name} added to cart!`);
  }

  return (
    <div>
      {productdata.map((elem: tproduct) => (
        <div key={elem.id} className="p-10 flex gap-5">
          <Image
            src={elem.image}
            alt={elem.name}
            height={100}
            width={100}
            className="h-96 w-96 border border-black"
          />
          <div className="flex flex-col gap-5">
            <p className="text-2xl">{elem.name}</p>
            <p className="text-xl">{elem.description}</p>
            <p className="text-xl">RS {elem.price}</p>
            <CiSquareRemove className="bg-black text-3xl" />

            <button
              onClick={() => HandleClick(elem)} // Pass the product to the handler
              className="mt-6 capitalize border border-black py-2 px-4 bg-purple-700 text-white rounded-lg hover:bg-white hover:text-purple-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddtoCartbtn
