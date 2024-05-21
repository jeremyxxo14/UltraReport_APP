import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="Contenedor-APP ">
        <Header />
        <Login />

        <Nav />
        <div className="Logo-Fon ">
          <Nav />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
