import AboutUs from "@/components/custom/AboutUs";
import Contact from "@/components/custom/Contact";
import Hero from "@/components/custom/Hero";
import SimplePricingSelector from "@/components/custom/Pricing";
import Services from "@/components/custom/Services";
import Testimonial from "@/components/custom/Testimonial";
import VideoIntro from "@/components/custom/VideoIntro";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoIntro />
      <Services />
      <SimplePricingSelector />
      <Testimonial />
      <AboutUs />
      <Contact />
    </>
  );
}
