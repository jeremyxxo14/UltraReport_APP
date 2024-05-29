import { Routes, Route } from "react-router-dom";
import InicioSesion from "./pages/InicioSesion";
import Home from "./pages/Home";
import HomeApr from "/.pages/HomeApr";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />

        <Route path="/HomeApr" element={<HomeApr />} />
      </Routes>
    </>
  );
}

export default App;
