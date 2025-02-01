<<<<<<< HEAD
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Award, CheckCircle2, Settings, Wind } from "lucide-react";
=======
import { Wind, CheckCircle2, Award, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1

const WindSystem = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1A3C2F] to-[#2A5C4F] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Small Wind Systems</h1>
            <p className="text-xl mb-8">Harnessing Wind Energy for Power Needs</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-8">
                Small wind systems are an excellent solution for energy generation, especially in areas with 
                favourable wind conditions. These systems efficiently convert wind energy into electricity 
                to power homes, businesses, and small industries. Capacities for small wind systems range 
                from 650W to 5 kW per unit.
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Features of Small Wind Systems</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Wind className="text-primary mt-1 flex-shrink-0" />
                    <span>Scalable Installations: Small wind systems can be installed individually or as part of larger networks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="text-primary mt-1 flex-shrink-0" />
                    <span>Rural and Urban Applications: Suitable for residential, commercial, and institutional use, particularly in remote or off-grid areas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                    <span>Hybrid Integration: These systems can complement solar PV systems to provide a reliable energy supply during varying weather conditions.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
<<<<<<< HEAD
                src="../../public/images/wind.jpg" 
=======
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
                alt="Wind System" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Achievements in Small Wind Systems</h2>
            <p className="text-lg mb-8">
              We have successfully installed small wind systems totalling 5 MW across India, providing 
              dependable and sustainable energy solutions to various sectors.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Wind className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">High-Efficiency Systems</h3>
                <p>Optimized to generate maximum power even at low wind speeds.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Settings className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customized Solutions</h3>
                <p>Tailored to meet the specific energy requirements of our clients.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-primary w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Turnkey Installations</h3>
                <p>Comprehensive services including design, supply, installation, and maintenance.</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-700">
              As pioneers in renewable energy solutions, we bring proven expertise and innovation to 
              small wind power installations. Our systems are designed for reliability, efficiency, 
              and long-term sustainability, making us a trusted partner for clean energy solutions 
              across India.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WindSystem;