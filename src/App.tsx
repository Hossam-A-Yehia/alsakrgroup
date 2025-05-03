import { useEffect } from 'react';
import { ThemeProvider } from './components/theme-provider';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Products from './components/sections/Products';
import Certifications from './components/sections/Certifications';
import GlobalReach from './components/sections/GlobalReach';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import { useTranslation } from 'react-i18next';

function App() {
  useEffect(() => {
    document.title = 'Al Sakr Group - Premium Produce Exporter';
  }, []);
const {i18n}= useTranslation()
  return (
    <div className={`${i18n.language === "ar-EG"? "dir-rtl" : "dir-ltr"}`}>
    <ThemeProvider defaultTheme="dark" storageKey="al-sakr-theme">
      <div className={`min-h-screen bg-background text-foreground antialiased `}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <Certifications />
          <GlobalReach />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
    </div>
  );
}

export default App;