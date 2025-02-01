import { Sun, Wind, Battery, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HybridSystem = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="bg-gradient-to-r from-[#1A3C2F] to-[#2A5C4F] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hybrid Energy Systems</h1>
            <p className="text-xl mb-8">Combining Multiple Energy Sources for Optimal Performance</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                Hybrid energy systems integrate renewable energy sources, such as solar and wind, to provide a reliable and efficient energy solution. 
                These systems are designed to optimize energy production and consumption, ensuring a consistent power supply even in variable weather conditions.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Benefits of Hybrid Energy Systems</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Sun className="text-primary mt-1 flex-shrink-0" />
                    <span>Increased Reliability: By combining multiple energy sources, hybrid systems ensure a more stable energy supply.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wind className="text-primary mt-1 flex-shrink-0" />
                    <span>Cost Savings: Reduced reliance on grid electricity can lead to significant savings on energy bills.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Battery className="text-primary mt-1 flex-shrink-0" />
                    <span>Energy Storage: Hybrid systems often include battery storage, allowing for energy use during non-generating periods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-primary mt-1 flex-shrink-0" />
                    <span>Environmental Impact: Utilizing renewable energy sources reduces carbon footprint and promotes sustainability.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276" 
                alt="Hybrid Energy System" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Expertise in Hybrid Energy Systems</h2>
            <p className="text-lg mb-8">
              We specialize in designing and implementing hybrid energy systems tailored to meet diverse energy needs. 
              Our projects include:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Sun className="text-primary w-12 h-12 mb-4" />
                <p>Successfully integrating solar and wind energy solutions for residential and commercial applications.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="text-primary w-12 h-12 mb-4" />
                <p>Providing energy storage solutions to maximize efficiency and reliability.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-primary w-12 h-12 mb-4" />
                <p>Offering comprehensive support from design to installation and maintenance.</p>
              </div>
            </div>
            <p className="text-lg mt-8 text-center">
              Our hybrid energy systems are designed to provide sustainable, cost-effective, and reliable energy solutions for a variety of applications.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HybridSystem;
