import { useState, useEffect } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import LOGO from "../images/logo.png"
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useTranslation();
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 50);

    // Determine active section
    const sections = [
      "home",
      "about",
      "services",
      "products",
      "certifications",
      "global",
      "contact",
    ];

    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element && scrollPosition >= element.offsetTop - 100) {
        setActiveSection(section);
        break;
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "services", label: t("nav.services") },
    { id: "products", label: t("nav.products") },
    { id: "certifications", label: t("nav.certifications") },
    { id: "global", label: t("nav.globalReach") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold text-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <img src={LOGO} alt="Logo" className="max-w-[50px]"/>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden  md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${
                  activeSection === link.id
                    ? "text-primary font-medium"
                    : `${
                        scrolled ? "text-muted-foreground" : "text-white"
                      } hover:text-primary transition-colors`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector scrolled={scrolled} />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon
                  className={`w-5 h-5 ${
                    scrolled ? "text-muted-foreground" : "text-white"
                  }`}
                />
              )}
            </Button>

            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`${
                        activeSection === link.id
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      } py-2 text-lg hover:text-primary transition-colors`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.id);
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
