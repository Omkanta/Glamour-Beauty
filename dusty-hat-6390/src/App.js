import "./App.css";
import Navbar from "./Component/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
