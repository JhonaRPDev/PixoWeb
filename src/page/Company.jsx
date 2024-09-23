import AboutCompany from "../sections/aboutCompany";
import HeroCompany from "../sections/heroCompany";
import ServicesCompany from "../sections/servicesCompany";

const Company = () => {
  return (
    <div>
      <HeroCompany />
      <AboutCompany />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-24">
        {/* Contenedor del título */}
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center max-w-6xl mb-8">
          Con Pixo, puedes confiar en una inteligencia artificial segura y
          diseñada para brindarte soluciones efectivas. Mejora tus procesos y
          bienestar con la tranquilidad de que estás en buenas manos. ¡Pruébala
          hoy y siente la diferencia!
        </h1>

        {/* Botón centrado */}
        <button className="bg-blue-500 text-white font-bold px-8 py-3 sm:px-12 sm:py-3 rounded-full mb-8 hover:bg-blue-700 transition-all duration-300">
          COTIZA AHORA
        </button>

        {/* Imagen centrada y adaptable */}
        <img
          src="marketing_digital.jpg"
          alt="Marketing Digital"
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-lg"
        />
      </div>

      <ServicesCompany />
    </div>
  );
};

export default Company;
