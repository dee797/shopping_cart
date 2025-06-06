import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Card = ({ product, id }) => {
  const [, , setCartItems] = useOutletContext();
  const [ itemCount, setItemCount ] = useState(0);

  return (
    <div className="relative m-10 h-fit flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 p-5 flex h-60 overflow-hidden rounded-xl items-center justify-center">
        <img className="w-full h-full" src={product.image} alt="product image" />
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
        <div className="pt-2 pb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
          </p>
          <div className="flex items-center">
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.rate} Star Rating</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button 
            type="button" 
            className="cartButton flex items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => {
              if (itemCount > 0) {
                setCartItems(oldCartItems => ({...oldCartItems, [id] : { product: product, quantity: oldCartItems[id] ? oldCartItems[id].quantity + itemCount : itemCount}}));
                alert("Item(s) added to cart.");
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </button>
          <div className="sm:order-1">
            <div className="mx-auto flex h-8 items-stretch text-gray-600">
              <button 
                className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white rounded-r-none"
                type="button"
                onClick={() => setItemCount((oldItemCount) => oldItemCount > 0  ? oldItemCount - 1 : oldItemCount)}  
              >
                -
              </button>
              <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{itemCount}</div>
              <button 
                className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white rounded-l-none"
                type="button"
                onClick={() => setItemCount((oldItemCount) => oldItemCount < 10 ? oldItemCount + 1 : oldItemCount)}  
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;