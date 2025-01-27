import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import KeyHighlights from "@/components/KeyHighlights";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

console.log("Index.tsx - Starting render");

const Index = () => {
  console.log("Index.tsx - Inside Index component render");
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <div className="bg-background">
          <KeyHighlights />
          <Services />
          <Products />
          <Gallery />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;