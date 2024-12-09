import Card from "./Card";
import { useLocation } from "react-router-dom";


const Shop = () => {
  const location = useLocation();
  const { products } = location.state;
  
  return (
    <>
      <h1 className="p-12 my-4 text-4xl font-bold h-fit text-center">Shop For Items</h1>
      <hr />
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-rows-2 grid-cols-3 ">
          <Card product={products[0]}/>
          <Card product={products[1]}/>
          <Card product={products[2]}/>
          <Card product={products[3]}/>
          <Card product={products[4]}/>
          <Card product={products[5]}/>
        </div>
      </div>
    </>
  )
};


export { Shop };