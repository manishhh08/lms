import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import PublicLayout from "./components/layout/PublicLayout";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          {/* Define your routes here */}
          <>
            <Route path="*" element={<PublicLayout />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* dashboard route */}
            <Route path="/dashboard" element={<Dashboard />} />
          </>

          {/* Other routes can be added here */}
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
