import { Link } from "react-router-dom";

const Cart = ({}) => {
  return (
    <div className="flex flex-col w-full">
      <header className="px-4 bg-black">
        <div className="relative mx-auto py-6 flex max-w-screen-lg flex-col sm:flex-row sm:items-center sm:justify-between">
          <Link className="flex items-center text-3xl font-black" to="/">
            <span className="text-neutral-50">Super Apparel</span>
          </Link>
          <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
            <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-14 text-2xl">
              <li className=""><Link className="text-neutral-50 hover:text-neutral-300" to="/">Home</Link></li>
              <li className=""><Link className="text-neutral-50 hover:text-neutral-300" to="shop">Shop</Link></li>
              <li className=""><Link className="text-neutral-50 hover:text-neutral-300" to="cart" >Cart</Link></li>
            </ul>
          </nav>
        </div>
      </header>




      <footer className="px-4 bg-black">
        <div className="relative mx-auto py-8 flex max-w-screen-lg flex-col sm:flex-row sm:items-center sm:justify-center">
          <span className="text-neutral-50">Based on The Odin Project's "Shopping Cart" assignment</span>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
