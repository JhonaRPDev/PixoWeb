import Hero from "../sections/Hero";
import Brand from "../components/Brand";
import Services from "../sections/Services";

const images = [
  "/public/pixo_logo_blanco.png",
  "/public/pixo_logo_blanco.png",
  "/public/pixo_logo_blanco.png",
  "/public/pixo_logo_blanco.png",
  "/public/pixo_logo_blanco.png",
  "/public/pixo_logo_blanco.png",
  "/public/pixo_logo_blanco.png",
  "/public/pixo_logo_blanco.png",
  "/public/pixo_logo_blanco.png",
  "/public/pixo_logo_blanco.png",
];

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="px-5 sm:px-10 lg:px-24 mb-12">
        <h1 className="text-white text-2xl sm:text-3xl text-center mb-8 font-semibold">
          ¡La inteligencia del futuro, hoy a tu servicio!
        </h1>
        <Services />
      </div>
      <Brand images={images} />
    </div>
  );
};

export default Home;
