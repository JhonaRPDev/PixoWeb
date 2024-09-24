import Button from "./button";

const Contact = () => {
  return (
    <div className="h-auto bg-white flex flex-col items-center justify-center text-center p-6 md:h-[420px]">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
          Impulsa tu negocio con Pixo: la agencia de publicidad que
          <br className="hidden md:block" />
          optimiza resultados usando inteligencia artificial
        </h1>
        <Button>COTIZA AHORA</Button>
      </div>
    </div>
  );
};

export default Contact;
