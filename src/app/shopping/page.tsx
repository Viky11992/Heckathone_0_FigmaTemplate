"use client";
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { tproduct } from "../types";

function Page() {
  const [product, setProduct] = useState<tproduct | null>(null);

  useEffect(() => {
    // Retrieve the product from localStorage
    const productString = localStorage.getItem("product");

    if (productString) {
      try {
        const productObject = JSON.parse(productString);
        setProduct(productObject); // Save the product in state
        console.log("Retrieved product:", productObject);
      } catch (error) {
        console.error("Error parsing product from localStorage:", error);
      }
    } else {
      console.log("No data found for the key 'product'.");
    }
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <Image  src={product.image} alt={product.name} height={200} width={200} className='h-64 w-64'/>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
        </div>
      ) : (
        <p>No product data found.</p>
      )}
    </div>
  );
}

export default Page;
