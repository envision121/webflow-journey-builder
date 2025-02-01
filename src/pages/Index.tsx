import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import KeyHighlights from "@/components/KeyHighlights";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <Hero />
        <Mission />
        <KeyHighlights />
        <Services />
        <Products />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;