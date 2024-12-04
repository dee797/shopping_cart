
const Product = ({ product }) => {
  return (
    <div className="container">
      <div className="bg-gray-50 min-w-60 min-h-60 flex flex-col">
        <img src={product.image} width="200px" height="200px" className="aspect-square w-full"/>
        <div>{product.title}</div>
        <div>Price: ${product.price}</div>
      </div>
    </div>
  );
};

export default Product;