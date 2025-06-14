import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import LOGO from "../images/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();
  console.log(i18n.language);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 50);

    const sections = [
      "home",
      "about",
      "our services",
      "our products",
      "global",
      "contact",
    ];

    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element && scrollPosition >= element.offsetTop - 400) {
        setActiveSection(section);
        break;
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
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
    { id: "our services", label: t("nav.our services") },
    { id: "our products", label: t("nav.our products") },
    { id: "global", label: t("nav.globalReach") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <nav
      dir="ltr"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container px-0  md:px-[70px] pt-4 mx-auto">
        <div className="flex items-start justify-between">
          {/* Logo and Socials */}
          <div className="flex items-center gap-7">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center gap-2 text-md flex-col justify-center"
            >
              <img src={LOGO} alt="Logo" className="max-w-[50px] " />
              <div className=" flex flex-col items-center">
                <span className="font-bold text-xs md:text-md">
                  <span className="text-orange-500">Al Sakr</span>{" "}
                  <span className="text-green-500">
                    Gr
                    <span className="text-orange-500">o</span>
                    up
                  </span>
                </span>

                <p className="text-[8px] md:text-xs">
                  Sorting, Packing and Colling Import & Export
                </p>
              </div>
            </a>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <div className="flex gap-2 text-md mb-2">
              <a
                href="https://www.facebook.com/profile.php?id=61576448733998"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-[#1877F2] rounded-full p-2">
                  <FaFacebookF color="white" />
                </div>
              </a>
              <a href="https://www.tiktok.com/@alsakrgroup?fbclid=IwY2xjawKhPOBleHRuA2FlbQIxMABicmlkETFDT09hSnlpQnpJeWZoSHk4AR4L5KTRCWaTZCCw3S9UFiBHyNWl4JYxs88gKBN4t_SvuJOxTzLHTz1HT2IM-w_aem_QQyl5rbEtALamG5XuteHgQ" target="_blank" rel="noreferrer">
                <div className="bg-black rounded-full p-2">
                  <FaTiktok color="white" />
                </div>
              </a>
              <a href="https://www.instagram.com/Alsakrgroup2024?fbclid=IwY2xjawKg-7xleHRuA2FlbQIxMABicmlkETFDT09hSnlpQnpJeWZoSHk4AR5XSdPCVOxrD0CkdBqYjQcICIuot-fcyH0Mc5FdkTBjYcZqWSLvVvwMjOyMow_aem_3ptarweSpqFHTFxgb3DVDg" target="_blank" rel="noreferrer">
                <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full p-2">
                  <FaInstagram color="white" />
                </div>
              </a>
              <a href="https://www.youtube.com/channel/UCpeXqUzgFbnTt0g_-zSp_uw" target="_blank" rel="noreferrer">
                <div className="bg-[#FF0000] rounded-full p-2">
                  <FaYoutube color="white" />
                </div>
              </a>
              <a href="https://x.com/Alsakrgroup?fbclid=IwY2xjawKqQy1leHRuA2FlbQIxMABicmlkETE1a09mRDBnRXR6aTBRd2E1AR7qVoFo9MFY_AqNGlV1HenH-NYv2IrwDW_MCMXUMx2M3u3gXIWb8J6VLAE6fA_aem_9eLJIoPA7y2fit-INSjlAw" target="_blank" rel="noreferrer">
                <div className="bg-[#1DA1F2] rounded-full p-2">
                  <FaTwitter color="white" />
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <div className="bg-[#0077B5] rounded-full p-2">
                  <FaLinkedinIn color="white" />
                </div>
              </a>
            </div>

            <a
              href="https://wa.me/201040106194"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-sm"
            >
              <div className="bg-[#25D366] rounded-full p-1">
                <FaWhatsapp size={20} color="white" />
              </div>
              +20 1040106194
            </a>
          </div>

          <div className="hidden md:flex flex-col gap-2 items-center justify-center">
            <div
              className="flex flex-wrap gap-2 "
              dir={`${i18n.language === "ar-EG" ? "rtl" : "ltr"}`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`${
                    activeSection === link.id
                      ? `text-[#c7ede7] font-bold  ${
                          i18n.language === "ar-EG" ? "text-lg" : "text-sm"
                        }`
                      : `${"text-white"} hover:text-[#c7ede7] transition-colors font-bold cursor-pointer  ${
                          i18n.language === "ar-EG" ? "text-lg" : "text-sm"
                        }`
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <LanguageSelector scrolled={scrolled} />
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`${
                      activeSection === link.id
                        ? "text-red-600 font-medium"
                        : "text"
                    } py-2 text-lg hover:text-red-600 transition-colors`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <LanguageSelector scrolled={scrolled} />
              </nav>

              {/* Mobile Socials */}
              <div className="mt-6 border-t pt-4">
                <div className="flex  gap-2 text-white text-sm">
                  <a
                    href="https://wa.me/201040106194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white text-sm mb-3"
                  >
                    <div className="bg-[#25D366] rounded-full p-1">
                      <FaWhatsapp size={20} color="white" />
                    </div>
                    +20 1040106194
                  </a>
                </div>
                <div className="flex gap-2 text-md mb-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61576448733998"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-[#1877F2] rounded-full p-2">
                      <FaFacebookF color="white" />
                    </div>
                  </a>
                  <a href="https://www.tiktok.com/@alsakrgroup?fbclid=IwY2xjawKhPOBleHRuA2FlbQIxMABicmlkETFDT09hSnlpQnpJeWZoSHk4AR4L5KTRCWaTZCCw3S9UFiBHyNWl4JYxs88gKBN4t_SvuJOxTzLHTz1HT2IM-w_aem_QQyl5rbEtALamG5XuteHgQ" target="_blank" rel="noreferrer">
                    <div className="bg-black rounded-full p-2">
                      <FaTiktok color="white" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/Alsakrgroup2024?fbclid=IwY2xjawKg-7xleHRuA2FlbQIxMABicmlkETFDT09hSnlpQnpJeWZoSHk4AR5XSdPCVOxrD0CkdBqYjQcICIuot-fcyH0Mc5FdkTBjYcZqWSLvVvwMjOyMow_aem_3ptarweSpqFHTFxgb3DVDg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full p-2">
                      <FaInstagram color="white" />
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCpeXqUzgFbnTt0g_-zSp_uw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-[#FF0000] rounded-full p-2">
                      <FaYoutube color="white" />
                    </div>
                  </a>
                  <a
                    href="https://x.com/Alsakrgroup?fbclid=IwY2xjawKqQy1leHRuA2FlbQIxMABicmlkETE1a09mRDBnRXR6aTBRd2E1AR7qVoFo9MFY_AqNGlV1HenH-NYv2IrwDW_MCMXUMx2M3u3gXIWb8J6VLAE6fA_aem_9eLJIoPA7y2fit-INSjlAw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-[#1DA1F2] rounded-full p-2">
                      <FaTwitter color="white" />
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-[#0077B5] rounded-full p-2">
                      <FaLinkedinIn color="white" />
                    </div>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
