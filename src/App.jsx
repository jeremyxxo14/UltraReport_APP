import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Card_report from "./components/Card_Report";
import Logout from "./components/Logout";
import FormApr from "./components/FormApr";
import PassAlert from "./components/PassAlert";

function App() {
  return (
    <>
      <div className="Contenedor-APP ">
        <Header />
        <Auth />
        <Login />
        <Nav />
        <Card_report />
        <FormApr />
        <PassAlert />
        <Logout />
        <Footer />
      </div>
    </>
  );
}

export default App;
