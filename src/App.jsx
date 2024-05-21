import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Auth from "./components/Auth";

function App() {
  return (
    <>
      <div className="Contenedor-APP ">
        <Header />
        <Auth />

        <div className="Logo-Fon ">
          <Nav />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
