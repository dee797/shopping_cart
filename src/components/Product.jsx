import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="container">
      <div>
        <img src={product.image} width="100px" height="100px"/>
        <div>{product.title}</div>
        <div>{product.price}</div>
      </div>
    </div>
  );
};

export default Product;