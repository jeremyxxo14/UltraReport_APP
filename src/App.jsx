import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Auth from "./components/Auth";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="Contenedor-APP ">
        <img
          className="logoUltraReport absolute flex items-center "
          src="logoUltraReport.png"
          alt=""
        />
        <Header />
        <Nav />
        <Login />
        <Auth />
        <Footer />
      </div>
    </>
  );
}

export default App;
