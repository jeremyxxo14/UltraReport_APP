import { useState, useEffect } from "react";
import Perfil from "./Perfil";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <div className="Contendor-Header w-screen z-40 bg-[rgba(98,98,98,0.5)]">
        <Perfil />
      </div>
    </>
  );
}

export default Header;
