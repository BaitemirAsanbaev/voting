import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Nav from "./components/Nav/Nav";
import Profile from "./pages/Profile/Profile";
import Instructions from "./pages/Instructions/Instructions";
import News from "./pages/News/News";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ins" element={<Instructions />} />
          <Route path="/news" element={<News />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
