import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Fib from "./Fib";
import NavBar from "./Navbar";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/calculator" element={<Fib />} />
        </Routes>
      </div>
      <Toaster />
    </Router>
  );
}
