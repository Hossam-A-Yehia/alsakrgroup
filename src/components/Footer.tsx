import { MapPin, Mail, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Al Sakr Group</h3>
            <p className="text-primary-foreground/80 mb-4">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              {t("footer.contact")}
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:Info@al-sakrgroup.com"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4 mx-2" />
                Info@al-sakrgroup.com
              </a>
              <a
                href="http://www.al-sakrgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Globe className="h-4 w-4 mx-2" />
                www.al-sakrgroup.com
              </a>
              <div className="flex items-center text-primary-foreground/80">
                <MapPin className="h-4 w-4 mx-2" />
                {t("footer.based")}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              {t("footer.explore")}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#about"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("footer.about")}{" "}
              </a>
              <a
                href="#services"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("footer.services")}{" "}
              </a>
              <a
                href="#products"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("footer.products")}{" "}
              </a>
              <a
                href="#certifications"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("footer.certifications")}{" "}
              </a>
              <a
                href="#global"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("footer.globalReach")}{" "}
              </a>
              <a
                href="#contact"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("footer.contact")}{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Al Sakr Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
