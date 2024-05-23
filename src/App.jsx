import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Auth from "./components/Auth";
import Card_report from "./components/Card_Report";
import Logout from "./components/Logout";
import FormO from "./components/FormO";
import FormApr from "./components/FormApr";

function App() {
  return (
    <>
      <div className="Contenedor-APP ">
        <Header />
        <Auth />
        <Login />
        <Nav />
        <Card_report />
        <FormO />
        <FormApr />
        <Logout />
        <Footer />
      </div>
    </>
  );
}

export default App;
