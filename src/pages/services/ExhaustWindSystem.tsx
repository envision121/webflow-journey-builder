import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Award, Leaf, Settings, Wind } from "lucide-react";

const ExhaustWindSystem = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="bg-gradient-to-r from-[#1A3C2F] to-[#2A5C4F] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Exhaust Wind Turbines</h1>
            <p className="text-xl mb-8">Capturing Energy from Industrial Blowers and Exhaust</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                Exhaust wind turbines are an innovative solution that harnesses energy from industrial 
                blowers and exhaust systems to generate power. By utilizing waste energy from exhaust 
                airflow, these systems provide an additional source of clean electricity for industrial 
                and commercial operations.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Features of Exhaust Wind Turbines</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Wind className="text-primary mt-1 flex-shrink-0" />
                    <span>Waste Energy Utilization: Converts excess airflow from industrial exhausts and blowers into usable electrical energy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="text-primary mt-1 flex-shrink-0" />
                    <span>Cost-Effective Solution: Reduces energy costs by generating power from existing industrial processes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-primary mt-1 flex-shrink-0" />
                    <span>Compact and Efficient Design: Easily integrated into existing systems without major infrastructure changes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="text-primary mt-1 flex-shrink-0" />
                    <span>Sustainable Power Generation: Enhances energy efficiency and supports green energy initiatives.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="../../public/images/3fbb03a4-1fb8-4ec9-9de1-1f8664f3560a.jpg" 
                alt="Exhaust Wind System" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Our Expertise in Exhaust Wind Turbine Systems</h2>
            <p className="text-lg mb-8">
              We specialize in designing and implementing exhaust wind turbines for industrial and 
              commercial applications. Our achievements include:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="text-primary w-12 h-12 mb-4" />
                <p>Successfully harnessing exhaust energy to provide sustainable and cost-efficient power.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Settings className="text-primary w-12 h-12 mb-4" />
                <p>Offering customized solutions to meet specific industrial requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-primary w-12 h-12 mb-4" />
                <p>Ensuring turnkey installations with comprehensive design, supply, and maintenance services.</p>
              </div>
            </div>
            <p className="text-lg mt-8 text-center">
              Our exhaust wind turbine systems deliver an effective and reliable method to maximize 
              energy recovery while contributing to a cleaner and greener future.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExhaustWindSystem;