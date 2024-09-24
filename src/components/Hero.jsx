import PropTypes from "prop-types";
import { ReactTyped } from "react-typed";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({
  backgroundType,
  backgroundSrc,
  title,
  paragraph,
  titleAlignment = "left",
  height = "h-[450px] lg:h-[650px]",
  typed = false,
}) => {
  const alignmentClass =
    titleAlignment === "center"
      ? "items-center text-center"
      : "items-start text-left";

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    if (paragraph) {
      tl.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
    }
  }, [paragraph]);

  return (
    <div className={`relative ${height} w-full overflow-hidden mb-12`}>
      {backgroundType === "video" ? (
        <video
          src={backgroundSrc}
          autoPlay
          loop
          muted
          playsInline
          poster="/bg-hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Hero background video"
        />
      ) : (
        <img
          src={backgroundSrc}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        className={`absolute inset-0 flex flex-col justify-center ${alignmentClass} p-10 md:p-16 lg:p-24`}
      >
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase pt-10 sm:pt-0"
        >
          {typed ? <ReactTyped strings={[title]} typeSpeed={60} loop /> : title}
        </h1>
        {paragraph && (
          <p
            ref={paragraphRef}
            className="md:text-sm xl:text-lg text-gray-300 font-extralight max-w-3xl"
          >
            {paragraph}
          </p>
        )}
      </div>
    </div>
  );
};

Hero.propTypes = {
  backgroundType: PropTypes.oneOf(["video", "image"]).isRequired,
  backgroundSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  titleAlignment: PropTypes.oneOf(["left", "center"]),
  height: PropTypes.string,
  typed: PropTypes.bool,
};

export default Hero;
