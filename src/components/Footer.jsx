const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Sección de PIXO */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <img src="/public/logo_pixo.png" alt="" className="h-14" />
            <p className="text-black text-base pr-24 leading-relaxed">
              Transformamos tus ideas en soluciones inteligentes, impulsando tu
              negocio y cuidando tu bienestar.
            </p>
          </div>

          {/* Sección de Compañía y Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-20 gap-y-8">
            {/* Compañía */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-black uppercase">
                Compañía
              </h2>
              <ul className="text-black space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Seguridad
                  </a>
                </li>
              </ul>
            </div>

            {/* Productos */}
            <div className="mt-8 md:mt-0">
              <h2 className="mb-4 text-lg font-semibold text-black uppercase">
                Productos
              </h2>
              <ul className="text-black space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Inteligencia Artificial PIXO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Marketing Digital
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Desarrollo de Software
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Páginas Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Diseño Gráfico
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

        {/* Sección de Derechos de Autor */}
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm font-semibold text-black sm:text-center">
            PIXO Company 2023 - 2024
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
