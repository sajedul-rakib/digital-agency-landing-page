import Companies from "./components/Companies";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Service2 from "./components/Service2";
import Testimonial from "./components/Testimonial";
import Trail from "./components/Trail";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Service />
      <Service2 />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Trail />
      <Footer />
    </>
  );
}
