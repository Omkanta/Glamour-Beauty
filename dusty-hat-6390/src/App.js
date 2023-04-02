import "./App.css";
import Navbar from "./Component/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Component/Footer";
import AdminNav from "./Component/AdminNav";
import {useEffect} from "react"
function App() {

  let AdminAuth="" || JSON.parse(localStorage.getItem("adminToken"))
  useEffect(()=>{

  },[AdminAuth])
  return (
    <div className="App">
      {(AdminAuth)?(
        <>
        <AdminNav/>
      <MainRoutes />
        </>
      ):(<>
      <Navbar />
      <MainRoutes />
      <Footer />
      </>)}
      {/* <AdminNav/>
      <MainRoutes/> */}
    </div>
  );
}

export default App;
