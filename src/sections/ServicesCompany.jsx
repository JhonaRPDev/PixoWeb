import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Importa los módulos directamente desde 'swiper/modules'

const ServicesCompany = () => {
  const cards = [
    {
      image: "/Inteligencia_Artificial.jpg",
      title: "Inteligencia Artificial",
      description: "La IA al servicio de tu negocio",
    },
    {
      image: "/marketing_digital.jpg",
      title: "Marketing Digital",
      description: "Transforma tu presencia en línea",
    },
    {
      image: "/Desarrollo_software.jpg",
      title: "Desarrollo Software",
      description: "Transforma tu presencia en línea",
    },
    {
      image: "/Diseño_grafico.jpg",
      title: "Diseño Grafico",
      description: "Asesoramiento en salud con IA",
    },
    {
      image: "/paginas_web.jpg",
      title: "Pagina Web",
      description: "Asesoramiento en salud con IA",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-24 py-12">
      {/* Título principal */}
      <div className="text-start">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          PIXO te ofrece lo mejor
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-white mb-8 max-w-3xl">
          Descubre cómo los servicios de Pixo IA pueden transformar tu negocio
          con soluciones personalizadas.
        </p>
      </div>

      {/* Carrusel de imágenes */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]} // Aquí incluimos los módulos
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Card
                image={card.image}
                title={card.title}
                description={card.description}
                hasImage={true}
                className="h-96 sm:h-80 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesCompany;
