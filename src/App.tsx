import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

// pages
import Home from "./Pages/Home";
import Err from "./Pages/Err";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  const { user } = Auth();
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Err />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/entrar" />}
          />
          <Route
            path="/entrar"
            element={!user ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/registrar-se"
            element={!user ? <Register /> : <Navigate to="/dashboard" />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
