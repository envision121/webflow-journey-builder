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
      <main className="flex-grow">
        {/* Hero Section with 70vh height */}
        <div className="relative h-[70vh] w-full mt-20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/lovable-uploads/80995959-140a-47b6-ba6a-1b65f43a5107.png')"
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About Us
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                Leading the way in sustainable energy solutions
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Introduction */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome to Empee Green Energy Pvt Ltd
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                At Empe Green Energy Pvt Ltd, we take pride in being a leading name in 
                the power solutions industry. With our extensive knowledge and expertise 
                in the field, we are dedicated to providing reliable, innovative, and high-quality 
                products that meet the diverse needs of our clientele.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to excellence extends beyond product offerings. As your 
                trusted partner, we strive to understand your unique requirements and 
                provide tailored solutions that optimize efficiency, minimize downtime, 
                and ensure uninterrupted power supply.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                By choosing Empe Green Energy Pvt Ltd, you gain access to the full range 
                of top-of-the-line products, backed by our unwavering dedication to 
                customer satisfaction.
              </p>
            </div>

            {/* Expertise Section */}
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Our Areas of Expertise
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {expertise.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{item}</h4>
                      <p className="text-gray-600">
                        Specialized solutions and expert services in {item.toLowerCase()} technology.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-16">
              <div className="relative rounded-xl overflow-hidden h-[400px]">
                <img 
                  src="/lovable-uploads/80995959-140a-47b6-ba6a-1b65f43a5107.png"
                  alt="Empee Green Energy Facility" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Committed to Excellence
                    </h3>
                    <p className="text-white/90 max-w-md">
                      Delivering innovative and sustainable energy solutions for a better tomorrow.
                    </p>
                  </div>
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