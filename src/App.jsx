import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProfile from "./pages/EditProfile/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/editProfile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App
