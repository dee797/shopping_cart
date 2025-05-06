import { Link, useOutletContext } from "react-router-dom";
import imageUrl from "../assets/hannah-morgan-ycVFts5Ma4s-unsplash.jpg"

const Home = () => {
    const [products] = useOutletContext();

    return (
        <div id="welcome" className="grid grid-rows-1 grid-cols-5 w-full">
        <div className="col-span-3 row-span-3"><img width="6000px" height="4000px" className="w-full h-full z-10" src={imageUrl} alt="Picture of clothes" /></div>
        <div className="flex flex-col justify-start gap-y-5 col-span-2">
          <h1 className="p-14 my-4 text-5xl font-bold h-fit text-center">Welcome</h1>
          <div className="my-4 px-16 text-xl text-gray-700 flex flex-col gap-y-10">
            <p className="">This is not a real shop-- still, feel free to take a look around.</p>
            <p className="">We offer a variety of women's clothing, from jackets, to blouses, to V necks, and more.</p>
          </div>
          <div className="my-10 flex justify-center items-center">
            <Link to="shop" className="btn px-20 py-4 rounded-lg font-medium text-neutral-50 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" state={{products: products}}>Shop Now</Link>
          </div>
        </div>
      </div>
    );
}

export default Home;