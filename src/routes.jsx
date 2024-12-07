import App from "./App";
import Cart from "./components/Cart";
import {Shop} from "./components/Shop";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
