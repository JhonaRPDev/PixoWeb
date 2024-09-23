import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-[450px] lg:h-[650px] w-full overflow-hidden mb-24"
    >
      <video
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/bg-hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="Hero background video"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start p-10 md:p-16 lg:p-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase pt-10 sm:pt-0">
          <ReactTyped
            strings={["Somos una Agencia de Publicidad Impulsada por IA"]}
            typeSpeed={60}
            loop
          />
        </h1>
        <p className="md:text-sm xl:text-lg text-gray-300 font-extralight">
          Combinamos creatividad y tecnología de vanguardia con nuestra propia
          inteligencia artificial,
          <br />
          optimizando cada campaña y proyecto para maximizar tus resultados.
        </p>
      </div>
    </div>
  );
};

export default Hero;
