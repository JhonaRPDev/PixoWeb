import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PropTypes from 'prop-types';

const Modal = ({ isVisible, onClose }) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      // Animación de apertura
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
      gsap.to(backdropRef.current, { opacity: 0.7, duration: 0.5 });
    } else {
      // Animación de cierre
      gsap.to(modalRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power3.in",
        onComplete: onClose,
      });
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.5 });
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <>
      {/* Fondo oscuro */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black z-40"
        style={{ opacity: 0 }}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
          {/* Botón de cerrar */}
          <button className="absolute top-2 right-2" onClick={onClose}>
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Formulario */}
          <div className="mt-4">
            <h2 className="text-center text-2xl font-bold mb-4">Cotiza Ahora</h2>
            {/* Aquí insertamos el componente del formulario */}
            <form>
              {/* Tu contenido del formulario */}
              <input
                type="text"
                placeholder="Nombre"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Descripción del proyecto"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
