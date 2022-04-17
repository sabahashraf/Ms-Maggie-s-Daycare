import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About/About";
import Blogs from "./pages/Blogs/Blogs/Blogs";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";

import Login from "./pages/SignUp/Login/Login";
import SignUp from "./pages/SignUp/SignUp/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Shared/Header/Header";
import Checkout from "./pages/Checkout/Checkout/Checkout";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/service/:serviceId"
          element={<Checkout></Checkout>}
        ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
