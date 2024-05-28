import { Routes, Route } from "react-router-dom";
import InicioSesion from "./pages/InicioSesion";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />
        {}
      </Routes>
    </>
  );
}

export default App;
