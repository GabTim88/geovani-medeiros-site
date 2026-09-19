import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";
import Media from "./components/Media";
import Gallery from "./components/Gallery";
import Agenda from "./components/Agenda";
import CTABanner from "./components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Testimonials />
      <Media />
      <Gallery />
      <Agenda />
      <CTABanner />
    </>
  );
}
