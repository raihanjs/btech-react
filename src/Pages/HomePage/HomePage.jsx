import BrandSlider from "./BrandSlider";
import DownloadApps from "./DownloadApps";
import Features from "./Features";
import Hero from "./Hero";
import PriceSection from "./PriceSection";
import Quotes from "./Quotes";
import Screenshot from "./Screenshot";
import VideoSection from "./VideoSection";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of animation
      once: true, // Animation will happen only once
      easing: "ease", // Easing function for the animation
    });
  }, []);
  return (
    <>
      <Hero />
      <Features />
      <VideoSection />
      <Screenshot />
      <PriceSection />
      <DownloadApps />
      <Quotes />
      <BrandSlider />
    </>
  );
}
