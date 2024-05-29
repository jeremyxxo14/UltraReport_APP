import { Routes, Route } from "react-router-dom";
import InicioSesion from "./pages/InicioSesion";
import Home from "./pages/Home";
import HomeSup from "./pages/HomeSup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />

        <Route path="/HomeApr" element={<HomeApr />} />
        <Route path="/HomeSup" element={<HomeSup />} />
        {}
      </Routes>
    </>
  );
}

export default App;
