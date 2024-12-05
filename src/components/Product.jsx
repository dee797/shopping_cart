
const Product = ({ product }) => {
  return (
    <div className="relative m-10 h-fit flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a className="relative mx-3 mt-3 p-5 flex h-60 overflow-hidden rounded-xl items-center justify-center" href="#">
        <img className="w-full h-full" src={product.image} alt="product image" />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
          </p>
          <div className="flex items-center">
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating.rate} Star Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;