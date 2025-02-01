import { Wind, Leaf, Settings, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AeroLeafWindTurbines = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="bg-gradient-to-r from-[#1A3C2F] to-[#2A5C4F] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AeroLeaf Wind Turbines</h1>
            <p className="text-xl mb-8">Innovative Vertical Axis Wind Energy Solutions</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                AeroLeaf wind turbines are designed to harness wind energy efficiently, 
                providing a sustainable solution for both residential and commercial applications. 
                Their unique vertical axis design allows for optimal performance in varying wind conditions.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Features of AeroLeaf Wind Turbines</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Wind className="text-primary mt-1 flex-shrink-0" />
                    <span>High Efficiency: Designed to capture wind energy effectively, even in low wind conditions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="text-primary mt-1 flex-shrink-0" />
                    <span>Eco-Friendly: Contributes to reducing carbon footprint and promoting renewable energy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="text-primary mt-1 flex-shrink-0" />
                    <span>Low Maintenance: Built with durable materials, requiring minimal upkeep.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-primary mt-1 flex-shrink-0" />
                    <span>Versatile Applications: Suitable for urban, rural, and remote locations.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276" 
                alt="AeroLeaf Wind Turbines" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Commitment to Quality</h2>
            <p className="text-lg mb-8">
              We are dedicated to providing high-quality wind energy solutions that meet the needs of our customers. 
              Our AeroLeaf wind turbines are engineered for performance and reliability, ensuring long-term benefits.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="text-primary w-12 h-12 mb-4" />
                <p>Expert installation and support for optimal performance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Settings className="text-primary w-12 h-12 mb-4" />
                <p>Comprehensive maintenance services to ensure longevity.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-primary w-12 h-12 mb-4" />
                <p>Recognized for excellence in renewable energy solutions.</p>
              </div>
            </div>
            <p className="text-lg mt-8 text-center">
              Choose AeroLeaf wind turbines for a sustainable and efficient energy solution.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AeroLeafWindTurbines;
