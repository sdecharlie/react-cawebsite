import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import EditProfile from "./Pages/EditProfile/EditProfile";
import Header from "./Pages/Header/Header";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
