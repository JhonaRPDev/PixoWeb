import { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "../components/navItem";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Estado separado para el menú desplegable móvil

  return (
    <header className="fixed top-0 left-0 w-full bg-black/60 z-50">
      <nav className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo_pixo.png"
              alt="Logo"
              className="w-14 h-8 sm:w-16 sm:h-9 lg:w-20 lg:h-11"
            />
          </Link>
        </div>

        {/* Nav items para pantallas grandes */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-bold uppercase">
          <NavItem label="Inicio" to="/" />

          {/* Servicios con dropdown en pantallas grandes */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white font-bold uppercase"
            >
              PIXO IA
            </button>
            {isDropdownOpen && (
              <ul className="absolute w-60 top-full bg-black/60 text-white py-2 pr-4 space-y-2 uppercase z-50">
                <NavItem label="Marketing Digital" to="/services/marketing" />
                <NavItem label="Desarrollo de Software" to="/services/software" />
                <NavItem label="Inteligencia Artificial" to="/services/ai" />
                <NavItem label="Diseño Gráfico" to="/services/diseñoGrafico" />
                <NavItem label="Páginas Web" to="/services/paginaWeb" />
              </ul>
            )}
          </div>

          <NavItem label="Compañía" to="/company" />
        </ul>

        {/* Botón para pantallas grandes */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="font-semibold text-white bg-transparent border-2 py-1 px-12 rounded-full hover:bg-blue-500 hover:border-0 transition-all duration-300 ease-in-out transform hover:translate-x-1"
          >
            COTIZA AHORA
          </Link>
        </div>

        {/* Botón menú para dispositivos móviles */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menú desplegable para móviles */}
        {isMobileMenuOpen && (
          <ul className="absolute top-full left-0 w-full bg-black text-white p-4 space-y-4 flex flex-col items-center z-40">
            <NavItem label="Inicio" to="/" />
            <div className="relative w-full text-center">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="text-white font-bold uppercase"
              >
                PIXO IA
              </button>
              {isMobileDropdownOpen && (
                <ul className="absolute w-60 bg-black/80 text-white py-2 pr-4 space-y-2 uppercase left-1/2 transform -translate-x-1/2 z-50">
                  <NavItem label="Marketing Digital" to="/services/marketing" />
                  <NavItem label="Desarrollo de Software" to="/services/software" />
                  <NavItem label="Inteligencia Artificial" to="/services/ai" />
                  <NavItem label="Diseño Gráfico" to="/services/diseñoGrafico" />
                  <NavItem label="Páginas Web" to="/services/paginaWeb" />
                </ul>
              )}
            </div>
            <NavItem label="Compañía" to="/company" />
            <Link
              to="/contact"
              className="text-lg font-bold text-white bg-transparent border-2 py-2 px-4 rounded-full hover:bg-blue-500 hover:border-0 transition-all duration-300 ease-in-out transform hover:translate-y-1"
            >
              COTIZA AHORA
            </Link>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
