import {  useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null); 

  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     window.scrollTo({
  //       top: element.offsetTop - 80,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const handleUserInteraction = () => {
  //     if (videoRef.current) {
  //       videoRef.current.muted = false; 
  //       videoRef.current
  //         .play()
  //         .catch((error) => {
  //             console.log(error);
              
  //         });
  //     }
  //   };
  //   document.addEventListener("click", handleUserInteraction);
  //   return () => {
  //     document.removeEventListener("click", handleUserInteraction);
  //   };
  // }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef} 
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-fill"
          style={{ minHeight: "100vh" }}
          id="myVideo"
        >--
          <source
            src="https://res.cloudinary.com/dimy2zhcs/video/upload/v1747674935/WhatsApp_Video_2025-05-10_at_3.16.31_PM_vhidef.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>      </div>

    </section>
  );
};

export default Hero;