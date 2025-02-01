import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Award, Droplet, Settings, Sun } from "lucide-react";

const SolarPumpSystem = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="bg-gradient-to-r from-[#1A3C2F] to-[#2A5C4F] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Power Pumps</h1>
            <p className="text-xl mb-8">Reliable Water Solutions Powered by Solar Energy</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                Solar power pumps are an innovative solution for pumping water in remote or off-grid 
                locations, utilizing clean solar energy to provide a dependable and cost-effective 
                water supply. These systems are capable of pumping water from depths of up to 1000 feet, 
                making them ideal for agricultural, industrial, and residential applications.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Features of Solar Power Pumps</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Droplet className="text-primary mt-1 flex-shrink-0" />
                    <span>Deep-Well Capability: Pumps water from depths of up to 1000 feet, ensuring a consistent water supply for various needs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sun className="text-primary mt-1 flex-shrink-0" />
                    <span>Cost-Effective Operation: Reduces energy costs by eliminating the need for grid electricity or diesel-powered pumps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="text-primary mt-1 flex-shrink-0" />
                    <span>Low Maintenance: Designed for durability and reliability, with minimal maintenance requirements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-primary mt-1 flex-shrink-0" />
                    <span>Scalable Solutions: Available in various capacities to suit agricultural irrigation, industrial processes, and household water supply.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="../../public/images/solar-pump.jpg" 
                alt="Solar Pump System" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Our Expertise in Solar Power Pumps</h2>
            <p className="text-lg mb-8">
              We provide solar-powered pump solutions tailored to meet diverse water requirements. 
              Our achievements include:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Droplet className="text-primary w-12 h-12 mb-4" />
                <p>Successfully installing solar power pump systems for deep-well and surface water pumping.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Settings className="text-primary w-12 h-12 mb-4" />
                <p>Delivering reliable and efficient solutions for agricultural irrigation, water supply, and industrial applications.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-primary w-12 h-12 mb-4" />
                <p>Offering turnkey installations with comprehensive design, supply, and maintenance support.</p>
              </div>
            </div>
            <p className="text-lg mt-8 text-center">
              Our solar power pump systems are a sustainable, cost-effective, and reliable solution 
              for ensuring water availability in even the most challenging conditions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolarPumpSystem;