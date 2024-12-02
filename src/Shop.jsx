import { useParams } from "react-router-dom";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import ErrorPage from "./ErrorPage";

const Shop = () => {
  const { name } = useParams();
  let component;
  name === "popeye" ? (
    component = <Popeye />
  ) : name === "spinach" ? (
    component = <Spinach />
  ) : name === undefined ? (
    component = <DefaultProfile />
  ) : null


  if (component) {
    return (
      <div>
        <h1 id="shopHeading">Shop For Items</h1>
        <hr />
        <h2>Profiles will appear here:</h2>
        {component}
      </div>
    );
  } else {
    return (<ErrorPage />);
  }
  
};

const DefaultProfile = () => {
    return <p>This is the default profile, add /spinach or /popeye to the end of the URL to see other profiles</p>;
  };

export default Shop;