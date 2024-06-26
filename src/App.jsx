import { Routes, Route } from "react-router-dom";
import InicioSesion from "./pages/InicioSesion";
import Home from "./pages/Home";
import HomeSup from "./pages/HomeSup";
import HomeApr from "./pages/HomeApr";
import FormularioApr from "./pages/FormularioApr";
import FormularioSup from "./pages/FormularioSup";
import AdminGeneral from "./pages/AdminGeneral";
import ReportesSup from "./pages/ReportesSup";
import BuscarReportes from "./pages/BuscarReportes";
import OConducta from "./pages/OConducta";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AdminGeneral" element={<AdminGeneral />} />
        <Route path="/HomeApr" element={<HomeApr />} />
        <Route path="/HomeSup" element={<HomeSup />} />
        <Route path="/FormularioApr" element={<FormularioApr />} />
        <Route path="/FormularioSup" element={<FormularioSup />} />
        <Route path="/*" element={<InicioSesion />} />
        <Route path="/ReportesSup" element={<ReportesSup />} />
        <Route path="/BuscarReportes" element={<BuscarReportes />} />
        <Route path="/OConducta" element={<OConducta />} />
        {}
      </Routes>
    </>
  );
}

export default App;
