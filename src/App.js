import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-test bg-cover bg-no-repeat	 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
