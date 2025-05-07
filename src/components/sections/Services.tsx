import { Container } from '../ui/container';
import { SectionHeading } from '../ui/section-heading';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <Card
      className="group transition-all duration-300 hover:shadow-lg overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <CardContent className="p-0">
        {/* الصورة تاخد العرض كامل */}
        <div className="w-full h-48 overflow-hidden">
          {icon}
        </div>

        <div className="p-6 text-center">
          <CardTitle className="text-xl mb-2">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <img src="/orange.jpg" alt="Sorting" className="w-full h-full object-cover" />,
      title: t("services.items.sorting.title"),
      description: t("services.items.sorting.description")
    },
    {
      icon: <img src="/cooling.jpg" alt="Cooling" className="w-full h-full object-cover" />,
      title: t("services.items.cooling.title"),
      description: t("services.items.cooling.description")
    },
    {
      icon: <img src="/global.jpg" alt="Logistics" className="w-full h-full object-cover" />,
      title: t("services.items.logistics.title"),
      description: t("services.items.logistics.description")
    },
    {
      icon: <img src="/farming.jpg" alt="Farming" className="w-full h-full object-cover" />,
      title: t("services.items.farming.title"),
      description: t("services.items.farming.description")
    },
    {
      icon: <img src="/control.jpg" alt="Quality" className="w-full h-full object-cover" />,
      title: t("services.items.quality.title"),
      description: t("services.items.quality.description")
    },
    {
      icon: <img src="/analysis.jpg" alt="Market" className="w-full h-full object-cover" />,
      title: t("services.items.market.title"),
      description: t("services.items.market.description")
    }
  ];

  return (
    <section id="our services" className="py-20 md:py-32 bg-muted/50 px-4 md:px-10 lg:px-16">
      <Container>
        <SectionHeading
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
