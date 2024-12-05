import Product from "./Product";
import { useState, useEffect } from "react";


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
    <div>
      <h1>Shop For Items</h1>
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
    </div>
  )
};


export { Shop, useFetchProducts };