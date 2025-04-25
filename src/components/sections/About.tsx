import { useTranslation } from "react-i18next";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Award, Clock, Globe } from "lucide-react";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <Container>
        <SectionHeading
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <img
                src="https://res.cloudinary.com/dimy2zhcs/image/upload/v1745250142/landing/img114_avx1fc.jpg"
                alt="Al Sakr Group's farming facilities"
                className="object-cover w-full transition-transform duration-700 transform h-80 hover:scale-105"
              />
            </div>
          </div>

          <div
            className="space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p className="text-lg text-muted-foreground">
              {t("about.description1")}{" "}
            </p>

            <p className="text-lg text-muted-foreground">
              {t("about.description2")}{" "}
            </p>

            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
              <div className="flex flex-col items-center p-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-medium">{t("about.features.quality")}</h3>
              </div>

              <div className="flex flex-col items-center p-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-medium">{t("about.features.delivery")}</h3>
              </div>

              <div className="flex flex-col items-center p-4 text-center">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-medium">{t("about.features.standards")}</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
