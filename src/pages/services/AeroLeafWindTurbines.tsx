<<<<<<< HEAD
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Award, Leaf, Settings, Wind } from "lucide-react";
=======
import { Leaf, Settings, Award, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1

const AeroLeafWindTurbines = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="bg-gradient-to-r from-[#1A3C2F] to-[#2A5C4F] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Aero Leaf Wind Turbine</h1>
            <p className="text-xl mb-8">Nature-Inspired Design for Efficient Energy Generation</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                The Aero Leaf Wind Turbine combines cutting-edge technology with a sleek, nature-inspired 
                design to generate clean energy efficiently. Its compact and modern build makes it ideal 
                for both urban and rural installations, providing sustainable power in any setting.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Leaf className="text-primary mt-1 flex-shrink-0" />
                    <span>Compact Design: Perfect for residential, commercial, and small-scale industrial use.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wind className="text-primary mt-1 flex-shrink-0" />
                    <span>High Efficiency: Captures even low wind speeds to ensure constant energy output.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="text-primary mt-1 flex-shrink-0" />
                    <span>Durable Construction: Built with high-quality materials to withstand extreme weather conditions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-primary mt-1 flex-shrink-0" />
                    <span>Low Noise: Operates silently, making it suitable for noise-sensitive areas.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
<<<<<<< HEAD
                src="../../public/images/ad9ccc0c-264b-44e0-8d46-80f7a282483a.jpg" 
=======
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
                alt="Aero Leaf Wind Turbine" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Why Choose Aero Leaf Wind Turbine?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Leaf className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p>Reduce your carbon footprint with a clean energy solution.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cost Savings</h3>
                <p>Lower electricity bills and enjoy long-term savings.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Adaptability</h3>
                <p>Designed for diverse environments, from urban rooftops to rural landscapes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Settings className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
                <p>We tailor our turbines to meet specific energy requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AeroLeafWindTurbines;