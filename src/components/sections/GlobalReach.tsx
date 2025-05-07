import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent } from "../ui/card";
import { useTranslation } from "react-i18next";

interface RegionCardProps {
  region: string;
  countries: string;
  color: string;
  delay?: number;
}

const RegionCard = ({
  region,
  countries,
  color,
  delay = 0,
}: RegionCardProps) => {
  return (
    <Card
      className="text-center transition-all hover:shadow-lg overflow-hidden group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className={`h-2 ${color} w-full`}></div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{region}</h3>
        <p className="text-muted-foreground">{countries}</p>
      </CardContent>
    </Card>
  );
};

const GlobalReach = () => {
  const { t } = useTranslation();
  const regions = [
    {
      regionKey: "europe",
      color: "bg-blue-500",
    },
    {
      regionKey: "middleEast",
      color: "bg-amber-500",
    },
    {
      regionKey: "asia",
      color: "bg-red-500",
    },
    {
      regionKey: "africa",
      color: "bg-green-500",
    },
    {
      regionKey: "northAmerica",
      color: "bg-indigo-500",
    },
    {
      regionKey: "oceania",
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="global" className="py-20 md:py-32 bg-background px-4 md:px-10 lg:px-16">
      <Container>
        <SectionHeading
          title={t("global.title")}
          subtitle={t("global.subtitle")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <RegionCard
              key={index}
              region={t(`global.regions.${region.regionKey}.name`)}
              countries={t(`global.regions.${region.regionKey}.countries`)}
              color={region.color}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-10 text-center" data-aos="fade-up">
          <div className="inline-block p-4 bg-muted rounded-xl">
            <p className="text-lg">
              <span className="font-medium">{t("global.trusted")}</span>{" "}
              <span className="text-primary font-bold">
                {t("global.countries")}
              </span>{" "}
              {t("global.across")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GlobalReach;
