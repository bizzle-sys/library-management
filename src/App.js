import "./App.css";
import Signup from "./Pages/Signup-Signin/Signup";
import Signin from "./Pages/Signup-Signin/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getUserAction } from "./Pages/Signup-Signin/userAction";
import { auth } from "./Config/Firebase-config/firebase-config";
import { Books } from "./Pages/book/Books";
import { NewBooks } from "./Pages/book/NewBook";
import { Profile } from "./Pages/Signup-Signin/Profile";
import { History } from "./Pages/history/History";
import { Clients } from "./Pages/clients/Clients";
import { PrivateRoute } from "./Components/private-route/PrivateRoute";
import BookLanding from "./Pages/book/BookLanding";

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
          <Route path="/book/:bookId" element={<BookLanding />} />

          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="books" element={<Books />} />
          <Route path="new-book" element={<NewBooks />} />
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
          <Route path="clients" element={<Clients />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
