import { useState, useEffect } from "react";

function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 30);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <div className="cont-ultra-string flex justify-center min-h-50 z-50 p-4 bg-[rgba(98,98,98,0.5)]">
        <span className="Ultrareport-string1">ULTRA</span>
        <span className="Ultrareport-string1">-</span>
        <span className="Ultrareport-string2 "> REPORT</span>
      </div>
    </>
  );
}

export default Footer;
