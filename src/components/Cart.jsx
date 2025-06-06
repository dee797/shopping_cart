import CartItem from "./CartItem";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const [, cartItems] = useOutletContext();
  const subTotal = (Math.ceil(
        Object.keys(cartItems)
          .reduce((accumulator, item) => {
            return accumulator + (cartItems[item].product.price * cartItems[item].quantity);
          }, 0) * 100
        ) / 100);

  if (Object.keys(cartItems).length === 0) {
    return (
      <div className="flex items-center justify-center h-full p-10">
          <h1 className="text-2xl font-semibold text-gray-900">Your cart is currently empty</h1>
      </div>
    )
  }

  return (
    <section className=" bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
        </div>

        <div className="mx-auto mt-8 max-w-2xl md:mt-12">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">

                  {Object.keys(cartItems).map((item) => {
                    return (
                      <CartItem 
                        image={cartItems[item].product.image} 
                        title={cartItems[item].product.title} 
                        price={cartItems[item].product.price} 
                        quantity={cartItems[item].quantity} 
                        rating={cartItems[item].product.rating.rate}
                        id={item}
                        key={item}/>
                    );
                  })}

                </ul>
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Subtotal</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ${subTotal.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Shipping</p>
                  <p className="text-lg font-semibold text-gray-900">$8.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> {(subTotal + 8).toFixed(2)}</p>
              </div>

              <div className="mt-6 text-center">
                <button 
                  type="button" 
                  className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  onClick={() => {alert("(This button doesn't actually do anything.)")}}
                >
                  Checkout
                  <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
