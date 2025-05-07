import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent } from "../ui/card";
import { AspectRatio } from "../ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

interface ProductCardProps {
  name: string;
  image: string;
  season?: string;
  packing?: string;
  delay?: number;
}

const ProductCard = ({
  name,
  image,
  season,
  packing,
  delay = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: delay / 1000 }}
    >
      <Card className="overflow-hidden group">
        <div className="overflow-hidden">
          <AspectRatio ratio={4 / 3}>
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
            />
          </AspectRatio>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold">{name}</h3>
          {season && (
            <p className="text-sm text-muted-foreground mt-2">
              <strong>{t("products.season")}:</strong> {season}
            </p>
          )}{" "}
          {packing && (
            <p className="text-sm text-muted-foreground">
              <strong>{t("products.packing")}:</strong> {packing}
            </p>
          )}{" "}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Products = () => {
  const { t } = useTranslation();
  type ProductCategory = "fresh" | "dry" | "frozen";
  const [activeTab, setActiveTab] = useState<ProductCategory>("fresh");
  const [showAll, setShowAll] = useState(false);

  const products: Record<
    ProductCategory,
    { name: string; image: string; season?: string; packing?: string }[]
  > = {
    fresh: [
      {
        name: t("products.items.grapes"),
        image:
          "/freshProducts/photo_3_2025-05-07_10-49-40.jpg",
        season: t("products.items.summer_autumn"),
        packing: t("products.items.5_kg_10_pun"),
      },
      {
        name: t("products.items.mango"),
        image:
          "/freshProducts/photo_4_2025-05-07_10-49-40.jpg",
        season: t("products.items.summer_autumn"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.orange"),
        image:
          "/freshProducts/photo_2_2025-05-07_10-49-40.jpg",
        season: t("products.items.winter"),
        packing: t("products.items.15_kg_ctn"),
      },
      {
        name: t("products.items.mandarin"),
        image:
          "/freshProducts/photo_1_2025-05-07_10-49-40.jpg",
        season: t("products.items.winter"),
        packing: t("products.items.10_kg_ctn"),
      },
      {
        name: t("products.items.grapefruit"),
        image: "/freshProducts/Grapefruit.jpg",
        season: t("products.items.winter"),
        packing: t("products.items.15_kg_ctn"),
      },
      {
        name: t("products.items.strawberry"),
        image:
          "/freshProducts/photo_2_2025-05-07_10-54-58.jpg",
        season: t("products.items.winter"),
        packing: t("products.items.2_5_kg_10_pun"),
      },
      {
        name: t("products.items.fig"),
        image: "/freshProducts/Fig.jpg",
        season: t("products.items.summer_autumn"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.pomegranates"),
        image:
          "/freshProducts/photo_1_2025-05-07_10-54-58.jpg",
        season: t("products.items.autumn_winter"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.peach"),
        image: "/freshProducts/Peach.jpg",
        season: t("products.items.summer"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.guava"),
        image:
          "https://images.pexels.com/photos/5945781/pexels-photo-5945781.jpeg?auto=compress&cs=tinysrgb&w=800",
        season: t("products.items.autumn_winter"),
        packing: t("products.items.2_kg_ctn"),
      },
      {
        name: t("products.items.rockmelon"),
        image: "/freshProducts/Rockmelon.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.10_kg_ctn"),
      },
      {
        name: t("products.items.bananas"),
        image:
          "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=800",
        season: t("products.items.all_year"),
        packing: t("products.items.15_kg_ctn"),
      },
      {
        name: t("products.items.watermelon"),
        image:
          "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=800",
        season: t("products.items.all_year"),
        packing: t("products.items.15_kg_ctn"),
      },
      {
        name: t("products.items.plum"),
        image: "/freshProducts/Plum.jpeg",
        season: t("products.items.summer_autumn"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.apricot"),
        image:
          "https://images.pexels.com/photos/209416/pexels-photo-209416.jpeg?auto=compress&cs=tinysrgb&w=800",
        season: t("products.items.summer"),
        packing: t("products.items.2_kg_ctn"),
      },
      {
        name: t("products.items.kiwi"),
        image:
          "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&w=800",
        season: t("products.items.summer_autumn"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.persimmon"),
        image: "/freshProducts/Persimmon.jpeg",
        season: t("products.items.autumn"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.pear"),
        image:
          "https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=800",
        season: t("products.items.summer"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.custard_apple"),
        image: "/freshProducts/Custard-apple.jpeg",
        season: t("products.items.summer_autumn"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.avocado"),
        image: "/freshProducts/Avocado.jpeg",
        season: t("products.items.summer_autumn"),
        packing: t("products.items.7_kg_ctn"),
      },
      {
        name: t("products.items.pumpkin"),
        image: "/freshProducts/Pumpkin.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.15_kg_ctn"),
      },
      {
        name: t("products.items.red_dates"),
        image: "/freshProducts/Red-dates.gif",
        season: t("products.items.summer"),
        packing: t("products.items.5_kg_ctn"),
      },
      {
        name: t("products.items.yellow_dates_barhi"),
        image: "/freshProducts/Yellow-dates.png",
        season: t("products.items.summer"),
        packing: t("products.items.5_kg_ctn"),
      },
      {
        name: t("products.items.dates_majdul"),
        image: "/freshProducts/Dates-Majdul.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.5_kg_ctn"),
      },
      {
        name: t("products.items.dates_sugary"),
        image: "/freshProducts/Dates-Sugary.png",
        season: t("products.items.all_year"),
        packing: t("products.items.5_kg_ctn"),
      },
      {
        name: t("products.items.green_beans"),
        image: "/freshProducts/Green-beans.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.3_kg_ctn"),
      },
      {
        name: t("products.items.green_peas"),
        image: "/freshProducts/Green-peas.jpeg",
        season: t("products.items.winter"),
        packing: t("products.items.3_kg_ctn"),
      },
      {
        name: t("products.items.cabbage_white_and_red"),
        image: "/freshProducts/Cabbage-white-and-red.jpeg",
        season: t("products.items.winter"),
        packing: t("products.items.8_kg_ctn"),
      },
      {
        name: t("products.items.iceberg_lettuce_green_cos_chinese_lettuce"),
        image: "/freshProducts/Iceberg-lettucegreen-coschinese-lettuce.jpeg",
        season: t("products.items.winter"),
        packing: t("products.items.5_kg_ctn"),
      },
      {
        name: t("products.items.capsicum_green_red_yellow"),
        image: "/freshProducts/Capsicum-Green-red-and-yellow.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.5_kg_ctn"),
      },
      {
        name: t("products.items.chilli_pepper_red_and_green"),
        image: "/freshProducts/Chilli-pepper-Red-and-green.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.tomatoes"),
        image: "/freshProducts/Tomato.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.7_kg_ctn"),
      },
      {
        name: t("products.items.zucchini"),
        image: "/freshProducts/Zucchini.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.cucumber"),
        image: "/freshProducts/Cucumber.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.6_kg_ctn"),
      },
      {
        name: t("products.items.eggplant"),
        image: "/freshProducts/Eggplant.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.5_kg_ctn"),
      },
      {
        name: t("products.items.spinach"),
        image: "/freshProducts/Spinach.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.2_kg_ctn"),
      },
      {
        name: t("products.items.carrot"),
        image: "/freshProducts/Carrot.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.5_kg_ctn"),
      },
      {
        name: t("products.items.lemon"),
        image: "/freshProducts/Lemon.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.15_kg_ctn"),
      },
      {
        name: t("products.items.potatoes"),
        image: "/freshProducts/Potatoes.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.7_kg_bag"),
      },
      {
        name: t("products.items.onion"),
        image: "/freshProducts/Onion.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.18_kg_bag"),
      },
      {
        name: t("products.items.sweet_potato"),
        image: "/freshProducts/SweetPotato.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.5_kg_ctn"),
      },
      {
        name: t("products.items.cauliflower"),
        image: "/freshProducts/Cauliflower.png",
        season: t("products.items.winter"),
        packing: t("products.items.6_kg_ctn"),
      },
      {
        name: t("products.items.garlic_peeled_garlic"),
        image: "/freshProducts/Garlic.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.5_kg_ctn"),
      },
      {
        name: t("products.items.spring_onion"),
        image: "/freshProducts/Spring.png",
        season: t("products.items.winter_spring"),
        packing: t("products.items.4_kg_ctn_28_bunches"),
      },
      {
        name: t("products.items.turnip"),
        image: "/freshProducts/Turnip.jpeg",
        season: t("products.items.winter"),
        packing: t("products.items.8_kg_ctn"),
      },
      {
        name: t("products.items.cherry_tomato"),
        image: "/freshProducts/Cherry.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.4_kg_16_pun"),
      },
      {
        name: t("products.items.broccoli"),
        image: "/freshProducts/Broccoli.png",
        season: t("products.items.winter"),
        packing: t("products.items.7_plus_3kg_fum_30_percent_ice"),
      },
      {
        name: t("products.items.celery"),
        image: "/freshProducts/Celery.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.rosemary"),
        image: "/freshProducts/Rosemary.png",
        season: t("products.items.all_year"),
        packing: t("products.items.2_kg_ctn"),
      },
      {
        name: t("products.items.beetroot"),
        image: "/freshProducts/Beetroot.png",
        season: t("products.items.all_year"),
        packing: t("products.items.8_kg_ctn"),
      },
      {
        name: t("products.items.mushroom"),
        image: "/freshProducts/Mushroom.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.2_kg_10_pun"),
      },
      {
        name: t("products.items.okra"),
        image: "/freshProducts/Okra.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.grape_leaves"),
        image: "/freshProducts/Grape.jpeg",
        season: t("products.items.summer_autumn"),
        packing: t("products.items.2_kg_ctn"),
      },
      {
        name: t("products.items.sweet_corn"),
        image: "/freshProducts/Sweetcorn.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.coriander_leaves"),
        image: "/freshProducts/Coriander.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.2_kg_ctn"),
      },
      {
        name: t("products.items.sweet_basil"),
        image: "/freshProducts/Sweetbasil.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.2_kg_ctn"),
      },
      {
        name: t("products.items.mint"),
        image: "/freshProducts/Mint.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.2_kg_ctn"),
      },
      {
        name: t("products.items.lemon_grass"),
        image: "/freshProducts/Lemon.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.taro"),
        image: "/freshProducts/Taro.png",
        season: t("products.items.all_year"),
        packing: t("products.items.8_kg_ctn"),
      },
      {
        name: t("products.items.artichoke"),
        image: "/freshProducts/artichoke.jpeg",
        season: t("products.items.winter"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.thyme"),
        image: "/freshProducts/Thyme.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.2_kg_ctn"),
      },
      {
        name: t("products.items.lolo_rosso_lettuce"),
        image: "/freshProducts/Lolo-rosso-lettuce.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.4_kg_ctn"),
      },
      {
        name: t("products.items.dill"),
        image: "/freshProducts/Dill.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.2_kg_ctn"),
      },
      {
        name: t("products.items.curly_parsley"),
        image: "/freshProducts/Curly-parsley.jpeg",
        season: t("products.items.all_year"),
        packing: t("products.items.2_kg_ctn"),
      },
    ],
    dry: [
      // Dry and Powder Fruits
      {
        name: t("products.items.mango"),
        image: "./our-dry-and-powder-products/Mango.png",
      },
      {
        name: t("products.items.strawberry"),
        image: "./our-dry-and-powder-products/Strawberry.jpeg",
      },
      {
        name: t("products.items.pomegranates"),
        image: "./our-dry-and-powder-products/Pomegranate.png",
      },
      {
        name: t("products.items.cherry_tomato"),
        image: "./our-dry-and-powder-products/Cherry.jpeg",
      },
      {
        name: t("products.items.mix_berries"),
        image: "./our-dry-and-powder-products/MixBerries.png",
      },
      {
        name: t("products.items.fig"),
        image: "./our-dry-and-powder-products/Fig.png",
      },
      {
        name: t("products.items.guava"),
        image: "./our-dry-and-powder-products/Guava.png",
      },
      {
        name: t("products.items.apricot"),
        image: "./our-dry-and-powder-products/Apricot.png",
      },
      {
        name: t("products.items.plum"),
        image: "./our-dry-and-powder-products/Plum.png",
      },
      {
        name: t("products.items.peach"),
        image: "./our-dry-and-powder-products/Peach.png",
      },
      {
        name: t("products.items.pineapple"),
        image: "./our-dry-and-powder-products/Pineapple.png",
      },
      {
        name: t("products.items.orange"), // Changed from oranges
        image: "./our-dry-and-powder-products/Orange.png",
      },
      {
        name: t("products.items.mandarin"),
        image: "./our-dry-and-powder-products/Mandarin.png",
      },
      {
        name: t("products.items.grapefruit"),
        image: "./our-dry-and-powder-products/Grapefruit.png",
      },
      {
        name: t("products.items.watermelon"),
        image: "./our-dry-and-powder-products/Watermelon.png",
      },
      {
        name: t("products.items.persimmon"),
        image: "./our-dry-and-powder-products/Persimmon.png",
      },
      {
        name: t("products.items.pear"),
        image: "./our-dry-and-powder-products/Pear.jpeg",
      },
      {
        name: t("products.items.green_grapes"),
        image: "./our-dry-and-powder-products/GreenGrapes.png",
      },
      {
        name: t("products.items.red_grapes"),
        image: "./our-dry-and-powder-products/RedGrapes.png",
      },
      {
        name: t("products.items.black_grapes"),
        image: "./our-dry-and-powder-products/BlackGrapes.png",
      },
      {
        name: t("products.items.kiwi"),
        image: "./our-dry-and-powder-products/Kiwi.png",
      },
      {
        name: t("products.items.bananas"), // Changed from banana
        image: "./our-dry-and-powder-products/Banana.png",
      },
      {
        name: t("products.items.muskmelon"),
        image: "./our-dry-and-powder-products/Muskmelon.png",
      },
      {
        name: t("products.items.custard_apple"),
        image: "./our-dry-and-powder-products/CustardApple.png",
      },
      {
        name: t("products.items.avocado"),
        image: "./our-dry-and-powder-products/Avocado.png",
      },
      {
        name: t("products.items.dragon_fruit"),
        image: "./our-dry-and-powder-products/DragonFruit.png",
      },
      {
        name: t("products.items.yellow_dates"),
        image: "./our-dry-and-powder-products/Yellowdates.png",
      },
      {
        name: t("products.items.pumpkin"),
        image: "./our-dry-and-powder-products/Pumpkin.jpeg",
      },
      // Dry and Powder Vegetables
      {
        name: t("products.items.green_peas"),
        image: "./our-dry-and-powder-products/Greenpeas.png",
      },
      {
        name: t("products.items.capsicum_green_red_yellow"),
        image: "./our-dry-and-powder-products/CapsicumGreenredandyellow.png",
      },
      {
        name: t("products.items.chilli_dry_and_powder"),
        image: "./our-dry-and-powder-products/Chillidryandpower.png",
      },
      {
        name: t("products.items.tomatoes"),
        image: "./our-dry-and-powder-products/Tomato.jpeg",
      },
      {
        name: t("products.items.spinach"),
        image: "./our-dry-and-powder-products/Spinach.png",
      },
      {
        name: t("products.items.carrot"),
        image: "./our-dry-and-powder-products/Carrot.png",
      },
      {
        name: t("products.items.lemon"),
        image: "./our-dry-and-powder-products/Lemon.jpeg",
      },
      {
        name: t("products.items.potatoes"),
        image: "./our-dry-and-powder-products/Potatoes.png",
      },
      {
        name: t("products.items.onion"),
        image: "./our-dry-and-powder-products/Onion.png",
      },
      {
        name: t("products.items.sweet_potato"),
        image: "./our-dry-and-powder-products/SweetPotato.png",
      },
      {
        name: t("products.items.cauliflower"),
        image: "./our-dry-and-powder-products/Cauliflower.png",
      },
      {
        name: t("products.items.garlic_peeled_garlic"),
        image: "./our-dry-and-powder-products/Garlicpeeledgarlic.png",
      },
      {
        name: t("products.items.spring_onion"),
        image: "./our-dry-and-powder-products/Springonion.png",
      },
      {
        name: t("products.items.turnip"),
        image: "./our-dry-and-powder-products/Turnip.png",
      },
      {
        name: t("products.items.broccoli"),
        image: "./our-dry-and-powder-products/Broccoli.png",
      },
      {
        name: t("products.items.celery"),
        image: "./our-dry-and-powder-products/Celery.png",
      },
      {
        name: t("products.items.beetroot"),
        image: "./our-dry-and-powder-products/Beetroot.png",
      },
      {
        name: t("products.items.mushroom"),
        image: "./our-dry-and-powder-products/Mushroom.png",
      },
      {
        name: t("products.items.okra"),
        image: "./our-dry-and-powder-products/Okra.png",
      },
      {
        name: t("products.items.molokhia"),
        image: "./our-dry-and-powder-products/Molokhia.jpeg",
      },
      {
        name: t("products.items.sweet_corn"),
        image: "./our-dry-and-powder-products/Sweetcorn.png",
      },
      {
        name: t("products.items.coriander_leaves"),
        image: "./our-dry-and-powder-products/Corianderleaves.png",
      },
      {
        name: t("products.items.sweet_basil"),
        image: "./our-dry-and-powder-products/Sweetbasil.png",
      },
      {
        name: t("products.items.mint"),
        image: "./our-dry-and-powder-products/Mint.png",
      },
      {
        name: t("products.items.lemon_grass"),
        image: "./our-dry-and-powder-products/Lemongrass.png",
      },
      {
        name: t("products.items.taro"),
        image: "./our-dry-and-powder-products/Taro.png",
      },
      {
        name: t("products.items.artichoke"),
        image: "./our-dry-and-powder-products/Artichoke.jpeg",
      },
      {
        name: t("products.items.curly_parsley"),
        image: "./our-dry-and-powder-products/Curlyparsley.png",
      },
    ],
    frozen: [
      {
        name: t("products.items.mango"),
        image: "/our-frozen-products/Mango.jpeg",
      },
      {
        name: t("products.items.strawberry"),
        image: "/our-frozen-products/Strawberry.jpeg",
      },
      {
        name: t("products.items.pomegranates"),
        image: "/our-frozen-products/Pomegranate.jpeg",
      },
      {
        name: t("products.items.cherry_tomato"),
        image: "/our-frozen-products/Cherry.jpeg",
      },
      {
        name: t("products.items.mix_berries"),
        image: "/our-frozen-products/MixBerries.jpeg",
      },
      {
        name: t("products.items.fig"),
        image: "/our-frozen-products/Fig.jpeg",
      },
      {
        name: t("products.items.guava"),
        image: "/our-frozen-products/Guava.jpeg",
      },
      {
        name: t("products.items.apricot"),
        image: "/our-frozen-products/Apricot.jpeg",
      },
      {
        name: t("products.items.plum"),
        image: "/our-frozen-products/Plum.png",
      },
      {
        name: t("products.items.peach"),
        image: "/our-frozen-products/Peach.png",
      },
      {
        name: t("products.items.pineapple"),
        image: "/our-frozen-products/Pineapple.jpeg",
      },
      {
        name: t("products.items.orange"),
        image: "/our-frozen-products/Orange.png",
      },
      {
        name: t("products.items.mandarin"),
        image: "/our-frozen-products/Mandarin.png",
      },
      {
        name: t("products.items.grapefruit"),
        image: "/our-frozen-products/Grapefruit.png",
      },
      {
        name: t("products.items.watermelon"),
        image: "/our-frozen-products/Watermelon.jpeg",
      },
      {
        name: t("products.items.persimmon"),
        image: "/our-frozen-products/Persimmon.png",
      },
      {
        name: t("products.items.pear"),
        image: "/our-frozen-products/Pear.jpeg",
      },
      {
        name: t("products.items.green_grapes"),
        image: "/our-frozen-products/GreenGrapes.jpeg",
      },
      {
        name: t("products.items.red_grapes"),
        image: "/our-frozen-products/RedGrapes.jpeg",
      },
      {
        name: t("products.items.black_grapes"),
        image: "/our-frozen-products/BlackGrapes.jpeg",
      },
      {
        name: t("products.items.kiwi"),
        image: "/our-frozen-products/Kiwi.jpeg",
      },
      {
        name: t("products.items.bananas"), // Changed from Banana
        image: "/our-frozen-products/Banana.jpeg",
      },
      {
        name: t("products.items.muskmelon"),
        image: "/our-frozen-products/Muskmelon.png",
      },
      {
        name: t("products.items.custard_apple"),
        image: "/our-frozen-products/CustardApple.png",
      },
      {
        name: t("products.items.avocado"),
        image: "/our-frozen-products/Avocado.png",
      },
      {
        name: t("products.items.dragon_fruit"),
        image: "/our-frozen-products/DragonFruit.png",
      },
      {
        name: t("products.items.yellow_dates"),
        image: "/our-frozen-products/Yellowdates.jpeg",
      },
      {
        name: t("products.items.pumpkin"),
        image: "/our-frozen-products/Pumpkin.jpeg",
      },
      // Vegetables
      {
        name: t("products.items.mix_vegetables"),
        image: "/our-frozen-products/Mixvegetables.jpeg",
      },
      {
        name: t("products.items.molokhia"),
        image: "/our-frozen-products/Molokhia.png",
      },
      {
        name: t("products.items.green_beans"),
        image: "/our-frozen-products/Greenbean.jpeg",
      },
      {
        name: t("products.items.green_peas"),
        image: "/our-frozen-products/Greenpeas.jpeg",
      },
      {
        name: t("products.items.capsicum_green_red_yellow"),
        image: "/our-frozen-products/CapsicumGreenredandyellow.jpeg",
      },
      {
        name: t("products.items.tomato"),
        image: "/our-frozen-products/Tomato.jpeg",
      },
      {
        name: t("products.items.eggplant"),
        image: "/our-frozen-products/Eggplan.jpeg",
      },
      {
        name: t("products.items.spinach"),
        image: "/our-frozen-products/Spinac.jpeg",
      },
      {
        name: t("products.items.carrot"),
        image: "/our-frozen-products/Carro.jpeg",
      },
      {
        name: t("products.items.lemon"),
        image: "/our-frozen-products/Lemon.jpeg",
      },
      {
        name: t("products.items.potatoes"),
        image: "/our-frozen-products/Potatoes.jpeg",
      },
      {
        name: t("products.items.onion"),
        image: "/our-frozen-products/Onion.jpeg",
      },
      {
        name: t("products.items.sweet_potato"),
        image: "/our-frozen-products/SweetPotato.jpeg",
      },
      {
        name: t("products.items.cauliflower"),
        image: "/our-frozen-products/Cauliflower.jpeg",
      },
      {
        name: t("products.items.garlic_peeled_garlic"),
        image: "/our-frozen-products/Garlicpeeledgarlic.jpeg",
      },
      {
        name: t("products.items.spring_onion"),
        image: "/our-frozen-products/Springonion.jpeg",
      },
      {
        name: t("products.items.turnip"),
        image: "/our-frozen-products/Turnip.jpeg",
      },
      {
        name: t("products.items.cherry_tomato"),
        image: "/our-frozen-products/Cherrytomato.jpeg",
      },
      {
        name: t("products.items.broccoli"),
        image: "/our-frozen-products/Broccoli.jpeg",
      },
      {
        name: t("products.items.celery"),
        image: "/our-frozen-products/Celery.jpeg",
      },
      {
        name: t("products.items.beetroot"),
        image: "/our-frozen-products/Beetroot.jpeg",
      },
      {
        name: t("products.items.mushroom"),
        image: "/our-frozen-products/Mushroom.jpeg",
      },
      {
        name: t("products.items.okra"),
        image: "/our-frozen-products/Okra.jpeg",
      },
      {
        name: t("products.items.sweet_corn"),
        image: "/our-frozen-products/Sweetcorn.jpeg",
      },
      {
        name: t("products.items.coriander_leaves"),
        image: "/our-frozen-products/Corianderleaves.jpeg",
      },
      {
        name: t("products.items.sweet_basil"),
        image: "/our-frozen-products/Sweetbasil.jpeg",
      },
      {
        name: t("products.items.mint"),
        image: "/our-frozen-products/Mint.jpeg",
      },
      {
        name: t("products.items.lemon_grass"),
        image: "/our-frozen-products/Lemongrass.jpeg",
      },
      {
        name: t("products.items.taro"),
        image: "/our-frozen-products/Taro.png",
      },
      {
        name: t("products.items.artichoke"),
        image: "/our-frozen-products/Artichoke.jpeg",
      },
      {
        name: t("products.items.curly_parsley"),
        image: "/our-frozen-products/Curlyparsley.jpeg",
      },
    ]  };

  const tabs: { id: ProductCategory; label: string }[] = [
    { id: "fresh", label: t("products.tabs.fresh") || "Fresh Products" },
    { id: "dry", label: t("products.tabs.dry") || "Dry and Powder" },
    { id: "frozen", label: t("products.tabs.frozen") || "Frozen Products" },
  ];
  const displayedProducts = showAll
    ? products[activeTab]
    : products[activeTab].slice(0, 8);

  return (
    <section id="our products" className="py-20 md:py-32 bg-background px-4 md:px-10 lg:px-16">
      <Container>
        <SectionHeading
          title={t("products.title")}
          subtitle={t("products.subtitle")}
        />

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-5 relative">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setShowAll(false);
              }}
              className="relative px-4 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors"
              >
              <span
                className={
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }
              >
                {tab.label}
              </span>
              {/* Underline animation */}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {displayedProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                image={product.image}
                delay={index * 50}
                season={product.season}
                packing={product.packing}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        {products[activeTab].length > 8 && (
          <div className="mt-12 text-center" data-aos="fade-up">
           <Button 
  variant="outline"
  className="group"
  onClick={() => {
    setShowAll(!showAll);

    // Scroll to section smoothly
    const section = document.getElementById("our products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  {showAll
    ? t("products.showLess") || "Show Less"
    : t("products.viewCatalog") || "View Catalog"}
  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
</Button>

          </div>
        )}
      </Container>
    </section>
  );
};

export default Products;
