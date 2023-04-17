import "./App.css";
import Signup from "./Pages/Signup-Signin/Signup";
import Signin from "./Pages/Signup-Signin/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Signup-Signin/Home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
