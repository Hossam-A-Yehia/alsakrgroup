import { useTranslation } from "react-i18next";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Award, Clock, Globe } from "lucide-react";

const About = () => {
  const {t,i18n} = useTranslation();

  return (
    <section id="about" className="py-20 md:py-32 bg-background px-0  md:px-[110px]" dir="ltr">
      <Container>
        <SectionHeading
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
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
            className=" "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            dir={i18n.language === 'ar-EG' ? 'rtl' : 'ltr'}
            >
            <p className="text-md text-white mb-0 p-0">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{t("about.description1")}
            </p>
            <p className="text-md text-white mb-0 p-0">
              {t("about.description2")}{" "}
            </p>

            <div className="grid grid-cols-1 gap-[50px] mt-2 md:grid-cols-3">
              <div className="flex flex-col items-center p-4 text-center">
                <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full">
                  <img src="/1.jpg" className=" w-[120px] h-[120px] rounded-full" />
                </div>
                <h3 className="font-bold text-sm">{t("about.features.quality")}</h3>
              </div>

              <div className="flex flex-col items-center p-4 text-center">
              <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full ">
              <img src="/3.jpeg" className= "w-[120px] h-[120px] rounded-full" />
                </div>
                <h3 className="font-bold text-sm">{t("about.features.delivery")}</h3>
              </div>

              <div className="flex flex-col items-center p-4 text-center">
              <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full">
              <img src="/2.jpeg" className="w-[120px] h-[120px] rounded-full" />
                </div>
                <h3 className="font-bold text-sm">{t("about.features.standards")}</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
