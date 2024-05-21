import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="Contenedor-APP">
        <Header />
        <Login />
        <Auth />
        <Nav />
        <Footer />
      </div>
    </>
  );
}

export default App;
