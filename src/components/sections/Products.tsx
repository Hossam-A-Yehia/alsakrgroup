import { Container } from '../ui/container';
import { SectionHeading } from '../ui/section-heading';
import { Card, CardContent } from '../ui/card';
import { AspectRatio } from '../ui/aspect-ratio';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  name: string;
  image: string;
  delay?: number;
}

const ProductCard = ({ name, image, delay = 0 }: ProductCardProps) => {
  return (
    <Card 
      className="overflow-hidden group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="overflow-hidden">
        <AspectRatio ratio={4/3}>
          <img 
            src={image} 
            alt={name} 
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
          />
        </AspectRatio>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
      </CardContent>
    </Card>
  );
};

const Products = () => {
  const {t} = useTranslation()
  const products = [
    {
      name: t("products.items.tangerines"),
      image: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: t("products.items.strawberries"),
      image: "https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: t("products.items.pomegranates"),
      image: "https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: t("products.items.tomatoes"),
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: t("products.items.grapes"),
      image: "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: t("products.items.bellPeppers"),
      image: "https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: t("products.items.oranges"),
      image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: t("products.items.greenBeans"),
      image: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <Container>
        <SectionHeading
          title={t("products.title")}
          subtitle={t("products.subtitle")}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
              delay={index * 50}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center" data-aos="fade-up">
          <Button variant="outline" className="group">
          {t("products.viewCatalog")}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Products;