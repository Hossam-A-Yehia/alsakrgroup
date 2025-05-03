import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
  { code: "ar-EG", name: "العربية", flag: IMG_AR },
  { code: "it", name: "Italiano", flag: IMG_IT },
  { code: "es", name: "Español", flag: IMG_ES },
  { code: "fr", name: "Français", flag: IMG_FR },
  { code: "de", name: "Deutsch", flag: IMG_DE },
  { code: "ru", name: "Русский", flag: IMG_RU },
  { code: "ur", name: "اردو", flag: IMG_UR },
];

export function LanguageSelector({  }: any) {
  const { i18n, t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <a
          className={` cursor-pointer font-bold  ${
            i18n.language === "ar-EG" ?"text-lg" : "text-sm"
          } ${"text-white"} hover:text-red-600 transition-colors`}
        >
          {t("nav.languages")}
        </a>
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
