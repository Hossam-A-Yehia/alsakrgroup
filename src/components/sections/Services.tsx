import { Container } from '../ui/container';
import { SectionHeading } from '../ui/section-heading';
import { 
  PackageCheck, Thermometer, Truck, 
  Leaf, ShieldCheck, BarChart 
} from 'lucide-react';
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
      className="group transition-all duration-300 hover:shadow-lg"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const {t} = useTranslation()
  const services = [
    {
      icon: <PackageCheck className="h-6 w-6" />,
      title: t("services.items.sorting.title"),
      description: t("services.items.sorting.description")
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: t("services.items.cooling.title"),
      description: t("services.items.cooling.description")
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: t("services.items.logistics.title"),
      description: t("services.items.logistics.description")
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: t("services.items.farming.title"),
      description: t("services.items.farming.description")
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: t("services.items.quality.title"),
      description: t("services.items.quality.description")
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: t("services.items.market.title"),
      description: t("services.items.market.description")
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/50">
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