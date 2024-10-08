import Brand from "../components/brand";
import Hero from "../components/Hero";
import Services from "../sections/Services";

const images = [
  "/logo_pixo.jpg",
  "/logo_pixo.jpg",
  "/logo_pixo.jpg",
  "/logo_pixo.jpg",
  "/logo_pixo.jpg",
  "/logo_pixo.jpg",
  "/logo_pixo.jpg",
  "/logo_pixo.jpg",
];

const Home = () => {
  return (
    <div>
      <Hero
        backgroundType="video"
        backgroundSrc="/bgVideo.mp4"
        title="Somos una Agencia de Publicidad Impulsada por IA"
        paragraph="Combinamos creatividad y tecnología de vanguardia con nuestra propia inteligencia artificial, optimizando cada campaña y proyecto para maximizar tus resultados."
        titleAlignment="left"
        typed={true}
      />
      <div className="px-5 sm:px-10 lg:px-24 md:py-20">
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
