import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Register from "./Register"
import Forget from "./Forget"
import Home from "./Home"
import Aduan from "./Aduan"
import Form from "./Form"
import Berita from "./Berita";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Aduan" element={<Aduan/>} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Forget" element={<Forget/>} />
        <Route path="/Berita" element={<Berita/>} />
      </Routes>
    </Router>
  )
}