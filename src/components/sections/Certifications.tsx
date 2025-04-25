import { Container } from '../ui/container';
import { SectionHeading } from '../ui/section-heading';
import { Card, CardContent } from '../ui/card';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CertificationCardProps {
  title: string;
  description: string;
  delay?: number;
}

const CertificationCard = ({ title, description, delay = 0 }: CertificationCardProps) => {
  return (
    <Card 
      className="text-center transition-all hover:shadow-lg"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <CardContent className="p-8">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const Certifications = () => {
  const {t}= useTranslation()
  const certifications = [
    {
      title: t("certifications.items.iso.title"),
      description: t("certifications.items.iso.description"),
    },
    {
      title: t("certifications.items.haccp.title"),
      description: t("certifications.items.haccp.description"),
    },
    {
      title: t("certifications.items.globalGap.title"),
      description: t("certifications.items.globalGap.description"),
    },
    {
      title: t("certifications.items.organic.title"),
      description: t("certifications.items.organic.description"),
    }
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 bg-muted/30">
      <Container>
        <SectionHeading
          title={t("certifications.title")}
          subtitle={t("certifications.subtitle")}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              description={cert.description}
              delay={index * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Certifications;