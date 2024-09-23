import Hero from "../sections/Hero";
import Brand from "../sections/brand";
import Services from "../sections/services";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="px-5 sm:px-10 lg:px-24">
        <h1 className="text-white text-2xl sm:text-3xl text-center mb-8 font-semibold">
          ¡La inteligencia del futuro, hoy a tu servicio!
        </h1>
        <Services />
      </div>
      <Brand />
    </div>
  );
};

export default Home;
