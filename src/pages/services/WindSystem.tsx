import { Wind, Zap, BarChart, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WindSystem = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="bg-gradient-to-r from-[#1A3C2F] to-[#2A5C4F] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wind Energy Systems</h1>
            <p className="text-xl mb-8">Harnessing the Power of Wind for a Sustainable Future</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                Wind energy systems are designed to convert the kinetic energy of wind into mechanical energy, 
                which can then be converted into electricity. These systems are essential for promoting 
                renewable energy sources and reducing reliance on fossil fuels.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Types of Wind Energy Systems</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Wind className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Horizontal Axis Wind Turbines (HAWT)</h3>
                      <p>These are the most common type of wind turbines, featuring blades that rotate around a horizontal axis.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Vertical Axis Wind Turbines (VAWT)</h3>
                      <p>These turbines have blades that rotate around a vertical axis, making them suitable for urban environments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1501594907352-1c1c1c1c1c1c" 
                alt="Wind Energy System" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8">Key Benefits of Wind Energy Systems</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <BarChart className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sustainable Energy Source</h3>
                <p>Wind energy is renewable and helps reduce greenhouse gas emissions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
                <p>Wind energy systems have low operational costs and can provide significant savings over time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Job Creation</h3>
                <p>The wind energy sector creates jobs in manufacturing, installation, and maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WindSystem;
