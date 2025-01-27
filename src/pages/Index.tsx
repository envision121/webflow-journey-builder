import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import KeyHighlights from "@/components/KeyHighlights";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

console.log("Index.tsx - Rendering Index component");

const Index = () => {
  console.log("Index.tsx - Inside Index component render");
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <KeyHighlights />
      <Services />
      <Products />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;