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
  console.log("Index.tsx - Inside Index component");
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <main className="flex-grow pt-[120px] w-full overflow-x-hidden"> {/* Added width and overflow control */}
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