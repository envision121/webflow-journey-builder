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
        <div className="relative h-[300px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-[#0B4619]/70" /> {/* Darker overlay */}
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
                About Us
              </h1>
              <p className="text-white/90 text-lg max-w-2xl animate-slideIn">
                Pioneering sustainable energy solutions for a greener tomorrow
              </p>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Company Description */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  At Empe Green Energy Pvt Ltd, we take pride in being a leading name in the power solutions industry. With our extensive knowledge and expertise in the field, we are dedicated to providing reliable, innovative, and high-quality products that meet the diverse needs of our clientele.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Our commitment to excellence extends beyond product offerings. As your trusted partner, we strive to understand your unique requirements and provide tailored solutions that optimize efficiency, minimize downtime, and ensure uninterrupted power supply.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  By choosing Empe Green Energy Pvt Ltd, you gain access to the full range of top-of-the-line products, backed by our unwavering dedication to customer satisfaction.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                alt="Professional workspace" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>

          {/* Expertise Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-4"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item}</h3>
                    <p className="text-gray-600 text-sm">
                      Expert solutions and services in {item.toLowerCase()} technology.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Image Section */}
          <div className="mt-16">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80" 
                alt="Technology showcase" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-lg text-white">
                    <h2 className="text-3xl font-bold mb-4">Innovation at Heart</h2>
                    <p className="text-lg">
                      Driving sustainable energy solutions with cutting-edge technology and expertise.
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