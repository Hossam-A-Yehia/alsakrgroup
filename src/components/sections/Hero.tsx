import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

const Hero = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null); 

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false; 
        videoRef.current
          .play()
          .catch((error) => {
              console.log(error);
              
          });
      }
    };
    document.addEventListener("click", handleUserInteraction);
    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef} 
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover md:object-contain"
          style={{ minHeight: "100vh" }}
          id="myVideo"
        >
          <source
            src="https://res.cloudinary.com/dimy2zhcs/video/upload/v1746131972/hero-vidoe_thnr0r.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/30"
          style={{ zIndex: 1 }}
        />
      </div>

      <div
        className="container relative z-10 px-4 mx-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="mb-6 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          {t("hero.title")}
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-md md:text-lg text-white font-bold">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="text-sm font-medium"
            onClick={() => scrollToSection("contact")}
          >
            {t("hero.connectButton")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-sm font-medium text-black dark:text-white hover:text-white hover:bg-white/20"
            onClick={() => scrollToSection("about")}
          >
            {t("hero.learnButton")}
          </Button>
        </div>

        <div className="absolute -bottom-[120px] transform -translate-x-1/2 left-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="text-white rounded-full hover:text-white hover:bg-white/20"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;