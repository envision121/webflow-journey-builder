import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import KeyHighlights from "@/components/KeyHighlights";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index component rendering"); // Debug log
  
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Mission />
      <Services />
      <KeyHighlights />
      <Products />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;