import "./App.css";
import Navbar from "./Component/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Component/Footer";
import { ProductList } from "./Component/ProductList";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <MainRoutes /> */}
      {/* <Footer /> */}
      <ProductList/>
    </div>
  );
}

export default App;
