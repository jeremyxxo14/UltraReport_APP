import Auth from "./components/Auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="Contenedor-APP">
        <Header />
        <Auth />
        <Nav />
        <Footer />
      </div>
    </>
  );
}

export default App;
