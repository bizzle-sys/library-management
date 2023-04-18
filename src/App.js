import "./App.css";
import Signup from "./Pages/Signup-Signin/Signup";
import Signin from "./Pages/Signup-Signin/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Signup-Signin/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getUserAction } from "./Pages/Signup-Signin/userAction";
import { auth } from "./Config/Firebase-config/firebase-config";

function App() {
  const dispatch = useDispatch();
  // let firebase re-auth user if they reload the page
  onAuthStateChanged(auth, (userData) => {
    if (userData.uid) {
      dispatch(getUserAction(userData.uid));
    }
  });

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
