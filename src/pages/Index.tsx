import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

console.log("Index.tsx - Rendering Index component");

const Index = () => {
  console.log("Index.tsx - Inside Index component render");
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Services />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;