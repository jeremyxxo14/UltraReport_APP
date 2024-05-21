import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="Contenedor-APP ">
        <Header />
        <div className="Logo-Fon ">
          <Nav />
          <Login />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
