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
import AddNewBook from "./pages/AddNewBook";
import EditBook from "./pages/EditBook";
import HomePage from "./pages/HomePage";
import BookDetail from "./pages/BookDetail";
import { fetchAllPublicBooksAction } from "./features/books/bookAction";

function App() {
  const dispatch = useDispatch();
  const autoLogIn = async () => {
    let data = await dispatch(getUserDetail());
  };

  useEffect(() => {
    autoLogIn();

    dispatch(fetchAllPublicBooksAction());
  }, []);

  return (
    <>
      <div className="wrapper">
        <Routes>
          {/* Define your routes here */}

          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="book-detail/:bookid" element={<BookDetail />} />
          </Route>
          <Route path="/" element={<PrivateLayout />}>
            <>
              {/* dashboard route */}
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="admin" element={<Admin />} />
              <Route path="books" element={<Book />} />
              <Route path="borrow" element={<Borrow />} />
              <Route path="review" element={<Review />} />
              <Route path="users" element={<User />} />
              <Route path="books/add-book" element={<AddNewBook />} />
              <Route path="books/edit-books" element={<EditBook />} />
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
