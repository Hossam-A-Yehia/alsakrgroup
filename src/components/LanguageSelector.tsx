import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Languages } from "lucide-react";
import IMG_EN from "../images/flags/us.png";
import IMG_IT from "../images/flags/it.png";
import IMG_AR from "../images/flags/eg.png";
import IMG_ES from "../images/flags/es.png";
import IMG_FR from "../images/flags/fr.png";
import IMG_DE from "../images/flags/de.png";
import IMG_RU from "../images/flags/ru.png";
import IMG_UR from "../images/flags/in.png";
const languages = [
  { code: "en", name: "English", flag: IMG_EN },
  { code: "ar", name: "العربية", flag: IMG_AR },
  { code: "it", name: "Italiano", flag: IMG_IT },
  { code: "es", name: "Español", flag: IMG_ES },
  { code: "fr", name: "Français", flag: IMG_FR },
  { code: "de", name: "Deutsch", flag: IMG_DE },
  { code: "ru", name: "Русский", flag: IMG_RU },
  { code: "ur", name: "اردو", flag: IMG_UR },
];

export function LanguageSelector({ scrolled }: any) {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages
            className={`h-5 w-5 ${scrolled ? "text-black" : "text-white"}`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`cursor-pointer flex items-center gap-2 ${
              i18n.language === lang.code ? "bg-primary/10" : ""
            }`}
          >
            <img
              src={lang.flag}
              alt={`${lang.name} flag`}
              className="w-5 h-5 rounded-sm object-cover"
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
