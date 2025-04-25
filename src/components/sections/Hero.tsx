import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://res.cloudinary.com/dimy2zhcs/image/upload/v1745250144/landing/hero_v4tbdt.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="container relative z-10 px-4 mx-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-white/80">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="text-lg font-medium"
            onClick={() => scrollToSection("contact")}
          >
          {t("hero.connectButton")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg font-medium text-black dark:text-white hover:text-white hover:bg-white/20"
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
