import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Auth from "./components/Auth";
import Card_report from "./components/Card_Report";
import Logout from "./components/Logout";
import Form_O from "./components/Form_O";

function App() {
  return (
    <>
      <div className="Contenedor-APP ">
        <Header />
        <Auth />
        <Nav />
        <Auth />
        <Card_report />
        <Form_O />
        <Logout />
        <Footer />
      </div>
    </>
  );
}

export default App;
