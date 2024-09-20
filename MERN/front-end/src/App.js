import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import './App.css';
import Home from "./components/Home.jsx"
import Login from "./components/auth/Login.jsx"
import UsersPage from "./components/users/UsersPage.jsx"
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                  <Home />
              }
            />
{/* 
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <UsersPage />
                </ProtectedRoute>
              }
            /> */}
          </Routes>
        </div>

      </div>
    </Router>
  );
};

export default App;
