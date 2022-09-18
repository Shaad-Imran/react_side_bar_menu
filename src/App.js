import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Report from "./Pages/Report";
import Product from "./Pages/Product";
import Support from "./Pages/Support";
import Message from "./Pages/Message";
import Team from "./Pages/Team";
function App() {
  return (
    <>
      <BrowserRouter BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/products" element={<Product />} />
          <Route path="/team" element={<Team />} />
          <Route path="/message" element={<Message />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
