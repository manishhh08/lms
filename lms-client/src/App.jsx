import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import PublicLayout from "./components/layout/PublicLayout";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateLayout from "./components/layout/PrivateLayout";
import VerifyEmail from "./pages/VerifyEmail";
import Auth from "./auth/Auth";
import { getUserDetail } from "./features/user/userAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Admin from "./pages/Admin";
import Book from "./pages/Book";
import Borrow from "./pages/Borrow";
import User from "./pages/User";
import Review from "./pages/Review";
import AddNewBook from "./components/AddNewBook";

function App() {
  const dispatch = useDispatch();
  const autoLogIn = async () => {
    let data = await dispatch(getUserDetail());
  };

  useEffect(() => {
    autoLogIn();
  }, []);
  return (
    <>
      <div className="wrapper">
        <Routes>
          {/* Define your routes here */}

          <Route path="/" element={<PublicLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* dashboard route */}
          </Route>

          <Route path="/" element={<PrivateLayout />}>
            <>
              <Route
                path="/dashboard"
                element={
                  <Auth>
                    <Dashboard />
                  </Auth>
                }
              />
              <Route
                path="/admin"
                element={
                  <Auth>
                    <Admin />
                  </Auth>
                }
              />
              <Route
                path="/books"
                element={
                  <Auth>
                    <Book />
                  </Auth>
                }
              />
              <Route
                path="/Borrow"
                element={
                  <Auth>
                    <Borrow />
                  </Auth>
                }
              />
              <Route
                path="/review"
                element={
                  <Auth>
                    <Review />
                  </Auth>
                }
              />
              <Route
                path="/users"
                element={
                  <Auth>
                    <User />
                  </Auth>
                }
              />
              <Route
                path="/add-book"
                element={
                  <Auth>
                    <AddNewBook />
                  </Auth>
                }
              />
            </>
          </Route>

          {/* Other routes can be added here */}
          <Route path="verify-email" element={<VerifyEmail />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
