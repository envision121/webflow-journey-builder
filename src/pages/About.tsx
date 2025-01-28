import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const About = () => {
  const expertise = [
    "Small Wind Turbines",
    "Solar Systems",
    "Exhaust Wind Turbine",
    "Wind Solar Hybrid Systems",
    "Wind Solar Hybrid Power Plants",
    "Solar Pumping Systems"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[120px]">
        {/* Hero Section with Background Image */}
        <div className="relative h-[400px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-[#0B4619]/80" /> {/* Overlay */}
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About Us
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                Pioneering sustainable energy solutions for a greener tomorrow
              </p>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-8">
                At Empe Green Energy Pvt Ltd, we take pride in being a leading name in the power solutions industry. With our extensive knowledge and expertise in the field, we are dedicated to providing reliable, innovative, and high-quality products that meet the diverse needs of our clientele. Whether it's Uninterruptible Power Supplies (UPS), DC-DC Converters, Inverters, Charge Regulators, VFD Drives, or other power conditioning and conversion equipment, we have you covered.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                Our commitment to excellence extends beyond product offerings. As your trusted partner, we strive to understand your unique requirements and provide tailored solutions that optimize efficiency, minimize downtime, and ensure uninterrupted power supply. Our team of seasoned professionals is always ready to assist you with expert advice, comprehensive support, and prompt service.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-12">
                By choosing Empe Green Energy Pvt Ltd, you gain access to the full range of top-of-the-line products, backed by our unwavering dedication to customer satisfaction. Together, we enable businesses to thrive in an increasingly power-dependent world.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Our Expertise Includes:</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;