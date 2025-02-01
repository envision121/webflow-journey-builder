<<<<<<< HEAD
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Award, Battery, Sun, Wind } from "lucide-react";
=======
import { Sun, Wind, Battery, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1

const HybridSystem = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="bg-gradient-to-r from-[#1A3C2F] to-[#2A5C4F] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hybrid Systems</h1>
            <p className="text-xl mb-8">The Best of Solar and Wind Energy</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                Hybrid energy systems combine the strengths of solar PV and wind power technologies to ensure 
                a continuous and reliable energy supply. These systems are particularly effective in areas 
                where both solar radiation and wind speeds are favorable, delivering power generation even 
                under varying weather conditions.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Features of Hybrid Systems</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Battery className="text-primary mt-1 flex-shrink-0" />
                    <span>Reliable Power Supply: Combining solar and wind ensures continuous energy generation during day and night.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sun className="text-primary mt-1 flex-shrink-0" />
                    <span>Optimal Energy Utilization: Hybrid systems provide higher efficiency by utilizing the strengths of both renewable sources.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wind className="text-primary mt-1 flex-shrink-0" />
                    <span>Storage Integration: Batteries can be incorporated to store excess energy for use during non-productive periods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-primary mt-1 flex-shrink-0" />
                    <span>Cost-Effective Solution: Reduces dependency on grid power, leading to significant savings on energy bills.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
<<<<<<< HEAD
                src="../../public/images/hybrid.jpg" 
=======
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
                alt="Hybrid System" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Our Expertise in Hybrid Systems</h2>
            <p className="text-lg mb-8">
              We offer hybrid energy solutions tailored to your specific energy requirements. Our hybrid systems:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Sun className="text-primary w-12 h-12 mb-4" />
                <p>Combine solar PV and wind systems seamlessly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="text-primary w-12 h-12 mb-4" />
                <p>Are scalable to meet residential, commercial, and institutional demands.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-primary w-12 h-12 mb-4" />
                <p>Have been successfully installed across various sectors, delivering efficient and uninterrupted energy solutions.</p>
              </div>
            </div>
            <p className="text-lg mt-8 text-center">
              With a focus on sustainability and reliability, our hybrid systems ensure energy independence 
              while reducing your carbon footprint.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HybridSystem;