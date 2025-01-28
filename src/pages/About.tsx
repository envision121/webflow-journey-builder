import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="h-[300px] relative bg-gradient-to-r from-green-600 to-green-700">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Learn about our commitment to renewable energy and sustainable solutions
            </p>
          </div>
        </div>
        
        <div className="container py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-6">
              Empee Green Energy has been at the forefront of renewable energy solutions since our inception. We are dedicated to providing innovative and sustainable energy solutions that help businesses and communities reduce their carbon footprint while maintaining efficiency and reliability.
            </p>
            
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="mb-6">
              Our mission is to accelerate the world's transition to sustainable energy through innovative solutions and exceptional service. We strive to make renewable energy accessible, affordable, and reliable for everyone.
            </p>
            
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Sustainability First</li>
              <li>Innovation & Excellence</li>
              <li>Customer Satisfaction</li>
              <li>Environmental Responsibility</li>
              <li>Community Engagement</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;