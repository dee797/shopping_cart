import { Link } from "react-router-dom";


const App = () => {

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
              <li className="flex justify-end items-end">
                <Link className=" text-neutral-50 hover:text-neutral-300" to="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="grid grid-rows-1 grid-cols-5 w-full">
        <div className="col-span-3 row-span-3"><img width="6000px" height="4000px" className="w-full h-full" src="src/assets/hannah-morgan-ycVFts5Ma4s-unsplash.jpg" alt="Picture of clothes" /></div>
        <div className="flex flex-col justify-start gap-y-5 col-span-2">
          <h1 className="p-14 my-4 text-5xl font-bold h-fit text-center">Welcome</h1>
          <div className="my-4 px-16 text-xl text-gray-700 flex flex-col gap-y-10">
            <p className="">This is not a real shop-- still, feel free to take a look around.</p>
            <p className="">We offer a variety of women's clothing, from jackets, to blouses, to V necks, and more.</p>
          </div>
          <div className="my-10 flex justify-center items-center">
            <Link to="shop" className="btn px-20 py-4 rounded-lg font-medium text-neutral-50 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">Shop Now</Link>
          </div>
        </div>
      </div>


      <footer className="px-4 bg-black">
        <div className="relative mx-auto py-8 flex max-w-screen-lg flex-col sm:flex-row sm:items-center sm:justify-center">
          <span className="text-neutral-50">Based on The Odin Project's "Shopping Cart" assignment</span>
        </div>
      </footer>
    </div>
  );
};



export default App;