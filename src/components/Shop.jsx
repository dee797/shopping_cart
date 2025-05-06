import Card from "./Card";
import { useLocation } from "react-router-dom";


const Shop = () => {
  const location = useLocation();
  const { products } = location.state;
  
  return (
    <>
      <h1 className="p-12 my-4 text-4xl font-bold h-fit text-center">Shop For Items</h1>
      <hr />
        <div id="shopGrid" className="grid">
          {products.map((product) => {
            return <Card product={product} key={product.id} id={product.id}/>
          })}
        </div>
    </>
  )
};


export { Shop };