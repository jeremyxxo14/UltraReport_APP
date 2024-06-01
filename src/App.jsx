import { Routes, Route } from "react-router-dom";
import InicioSesion from "./pages/InicioSesion";
import Home from "./pages/Home";
import HomeSup from "./pages/HomeSup";
import HomeApr from "./pages/HomeApr";
import FormularioApr from "./pages/FormularioApr";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />

        <Route path="/HomeApr" element={<HomeApr />} />
        <Route path="/HomeSup" element={<HomeSup />} />
        <Route path="/FormularioApr" element={<FormularioApr />} />
        {}
      </Routes>
    </>
  );
}

export default App;
