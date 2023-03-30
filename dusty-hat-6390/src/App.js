import "./App.css";
import Navbar from "./Component/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Component/Footer";
import { ProductList } from "./Component/ProductList";
import { Tooltip } from "@chakra-ui/react";
// import tooltip from "./Pages/tooltip";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <MainRoutes />
      {/* <tooltip/> */}
      {/* <maintooltips/> */}
      {/* <Footer /> */}
      {/* <ProductList/> */}
    </div>
  );
}

export default App;
