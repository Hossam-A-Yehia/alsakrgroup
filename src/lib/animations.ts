// This file will be used to initialize AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAnimations = () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
  });
};