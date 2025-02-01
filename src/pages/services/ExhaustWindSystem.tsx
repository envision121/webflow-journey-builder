import { Wind, Zap, Settings, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ExhaustWindSystem = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="bg-gradient-to-r from-[#1A3C2F] to-[#2A5C4F] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Exhaust Wind Systems</h1>
            <p className="text-xl mb-8">Converting Waste Air into Clean Energy</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                Exhaust wind systems are designed to harness the energy from waste air, converting it into usable power. 
                These systems are ideal for industrial applications where excess heat and air can be utilized effectively.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">How Exhaust Wind Systems Work</h2>
                <p>
                  The system captures waste air from industrial processes and uses it to drive turbines, generating electricity 
                  while reducing overall energy consumption. This innovative approach not only saves costs but also contributes 
                  to a greener environment.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276" 
                alt="Exhaust Wind System" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Benefits of Exhaust Wind Systems</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sustainable Energy Source</h3>
                <p>Utilizes waste air to generate clean energy, reducing reliance on fossil fuels.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Zap className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
                <p>Reduces energy costs by harnessing energy that would otherwise be wasted.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Settings className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Low Maintenance</h3>
                <p>Designed for durability and efficiency, requiring minimal upkeep.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We specialize in innovative energy solutions, providing exhaust wind systems tailored to meet diverse industrial needs.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExhaustWindSystem;
