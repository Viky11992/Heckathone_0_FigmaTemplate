"use client";

import Bg from "../../../public/Rectangle 1.png";
import Marbel from "../../../public/Meubel House_Logos-05.png";
import SubFooter from "../component/SubFooter";
import { useEffect, useState } from "react";
import Image from "next/image";
import { tproduct } from "../types";
import { RiDeleteBinLine } from "react-icons/ri";

type Quantities = { [key: string]: number };

function Page() {
  async function handchkout(productChkout: tproduct) {
    const response = await fetch("/api/checkout", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ productChkout }),
    });
    const chkoutData = await response.json();
    window.location.href = chkoutData.url;
  }

  const [quantities, setQuantities] = useState<Quantities>({});
  const [products, setProducts] = useState<tproduct[]>([]);

  useEffect(() => {
    const Mycart = JSON.parse(localStorage.getItem("cart") || "{}");
    const values = Object.values(Mycart);
    setProducts(values);
  }, []);

  const incrementQuantity = (productId: string) => {
    setQuantities((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const decrementQuantity = (productId: string) => {
    setQuantities((prev) => ({ ...prev, [productId]: Math.max((prev[productId] || 0) - 1, 0) }));
  };

  const deleteItem = (productId: number) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cart.filter((product:tproduct) => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setProducts(updatedCart);
  };

  const calculateTotal = (): number => {
    return products.reduce((total, product) => {
      const productQuantity = quantities[product.name] || 0;
      return total + product.price * productQuantity;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Image src={Bg} alt="Background" className="w-full h-[316px] object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Image src={Marbel} alt="Logo" className="mb-4" />
          <h1 className="font-Poppin text-3xl md:text-4xl lg:text-5xl text-black">Cart</h1>
          <p className="font-Poppin text-sm md:text-lg">Home - <span>Cart</span></p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly px-4 md:px-8 py-8">
        <div className="w-full lg:w-2/3 flex flex-col gap-5">
          <div className="bg-[#FFF9E5] flex items-center justify-between p-4 rounded-md text-sm md:text-base">
            <span>Product</span><span>Name</span><span>Price</span><span>Quantity</span><span>Subtotal</span>
          </div>
          {products.map((elem) => (
            <div key={elem.name} className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border rounded-md">
              <Image src={elem.image} alt={elem.name} width={80} height={80} className="rounded-md" />
              <p className="text-sm md:text-base">{elem.name}</p>
              <p className="text-sm md:text-base">${elem.price}</p>
              <div className="flex items-center gap-2">
                <button className="border px-2" onClick={() => decrementQuantity(elem.name)}>-</button>
                <p className="border px-4">{quantities[elem.name] || 0}</p>
                <button className="border px-2" onClick={() => incrementQuantity(elem.name)}>+</button>
              </div>
              <p className="text-sm md:text-base">${elem.price * (quantities[elem.name] || 0)}</p>
              <RiDeleteBinLine className="text-xl text-red-500 cursor-pointer" onClick={() => deleteItem(elem.id)} />
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 bg-[#FFF9E5] flex flex-col gap-4 p-6 rounded-md mt-6 lg:mt-0">
          <h1 className="text-lg md:text-2xl text-center">Cart Totals</h1>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span className="text-[#B88E2F]">${calculateTotal()}</span>
          </div>
          <button onClick={() => handchkout(products[0])} className="bg-black text-white p-3 rounded-md hover:bg-green-600">Check Out</button>
        </div>
      </div>

      <SubFooter />
    </div>
  );
}

export default Page;
