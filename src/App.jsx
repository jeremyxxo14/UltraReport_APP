import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Auth from "./components/Auth";
import Card_report from "./components/Card_Report";
import Logout from "./components/Logout";
import FormO from "./components/FormO";
import FormApr from "./components/FormApr";
import PassAlert from "./components/PassAlert";
import Login from "./components/Login";
import RutAlert from "./components/RutAlert";
import NetAlert from "./components/NetAlert";
import IncompleteAlert from "./components/IncompleteAlert";
import DuplicatedAlert from "./components/DuplicatedAlert";
import FileAlert from "./components/FileAlert";
import UpdateALert from "./components/UpdateAlert";
import FormSup from "./components/FormSup";

function App() {
  return (
    <>
      <div className="Contenedor-APP ">
        <Header />
        <Auth />
        <Login />
        <Nav />
        <FormO />
        <Card_report />
        <FormApr />
        <PassAlert />
        <RutAlert />
        <NetAlert />
        <DuplicatedAlert />
        <IncompleteAlert />
        <FileAlert />
        <UpdateALert />
        <FormSup />
        <Logout />
        <Footer />
      </div>
    </>
  );
}

export default App;
