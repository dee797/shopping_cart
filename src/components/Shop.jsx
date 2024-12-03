import { useParams } from "react-router-dom";
import Product from "./Product";
import { useState, useEffect } from "react";



const useFetchProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12", { mode: "cors" })
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


  if (loading) return (<div className="loader"></div>);
  if (error) return (<p>A network error was encountered.</p>);
  
  return (
    <div>
      <h1>Shop For Items</h1>
      <hr />
      <Product product={products[0]}/>
    </div>
  )
};


export { Shop, useFetchProducts };