import { Wind, CheckCircle2, Award, Settings } from "lucide-react";
import ServiceLayout from "@/components/services/ServiceLayout";

const WindSystem = () => {
  return (
    <ServiceLayout
      title="Small Wind Systems"
      description="Harnessing Wind Energy for Power Needs"
      imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b"
      features={[
        "Scalable Installations - Can be installed individually or as part of larger networks",
        "Rural and Urban Applications - Suitable for residential, commercial, and institutional use",
        "Hybrid Integration - Complementary to solar PV systems for reliable energy supply",
        "High-Efficiency Systems - Optimized for maximum power generation",
        "Customized Solutions - Tailored to specific energy requirements",
        "Turnkey Installations - Comprehensive service package"
      ]}
      benefits={[
        "Reliable and sustainable energy generation",
        "Efficient power production even at low wind speeds",
        "Reduced dependency on grid power",
        "Lower long-term energy costs",
        "Minimal maintenance requirements",
        "Environmental sustainability"
      ]}
    >
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Expertise in Wind Energy</h2>
              <p className="text-gray-600 mb-8">
                Small wind systems are an excellent solution for energy generation, especially in areas with 
                favourable wind conditions. These systems efficiently convert wind energy into electricity 
                to power homes, businesses, and small industries. Capacities for small wind systems range 
                from 650W to 5 kW per unit.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Wind className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Advanced Technology</h3>
                    <p className="text-gray-600">
                      Our wind systems utilize cutting-edge technology for optimal energy conversion and reliability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">
                      Successfully installed small wind systems totalling 5 MW across India.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Industry Leadership</h3>
                    <p className="text-gray-600">
                      Pioneers in renewable energy solutions with proven expertise and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Settings className="text-primary w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Customization</h3>
                <p className="text-gray-600">Tailored solutions for specific needs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Wind className="text-primary w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Efficiency</h3>
                <p className="text-gray-600">Maximum power at low wind speeds</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <CheckCircle2 className="text-primary w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Reliability</h3>
                <p className="text-gray-600">Proven performance record</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Award className="text-primary w-8 h-8 mb-4" />
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-gray-600">Industry-leading expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default WindSystem;