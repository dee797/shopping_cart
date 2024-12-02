import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop" data-testid="shopLink">Shop</Link>
            </li>
          </ul>
        </nav>


        <h1>Welcome</h1>
        <p>This is not a real shop-- still, feel free to take a look around.</p>
        
      </div>
    </BrowserRouter>
  );
};



export default App;