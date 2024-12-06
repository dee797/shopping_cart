import Product from "./Product";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const useFetchProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};


const Shop = () => {
  const { products, error, loading } = useFetchProducts();


  if (loading) return (<div className="h-screen w-screen flex items-center justify-center"><div className="loader mx-auto"></div></div>);
  if (error) return (<p className="h-screen w-screen text-center">A network error was encountered.</p>);
  
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
              <li className=""><Link className="text-neutral-50 hover:text-neutral-300" to="/" >Cart</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <h1 className="p-12 my-4 text-4xl font-bold h-fit text-center">Shop For Items</h1>
      <hr />
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-rows-2 grid-cols-3 ">
          <Product product={products[0]}/>
          <Product product={products[1]}/>
          <Product product={products[2]}/>
          <Product product={products[3]}/>
          <Product product={products[4]}/>
          <Product product={products[5]}/>
        </div>
      </div>


      <footer className="px-4 bg-black">
        <div className="relative mx-auto py-8 flex max-w-screen-lg flex-col sm:flex-row sm:items-center sm:justify-center">
          <span className="text-neutral-50">Based on The Odin Project's "Shopping Cart" assignment</span>
        </div>
      </footer>
    </div>
  )
};


export { Shop, useFetchProducts };