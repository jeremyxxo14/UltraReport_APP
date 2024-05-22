import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Card_report from "./components/Card_Report";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <div className="Contenedor-APP ">
        <Header />
        <Auth />
        <Nav />
        <Auth />
        <Card_report />

        <Logout />
        <Footer />
      </div>
    </>
  );
}

export default App;
