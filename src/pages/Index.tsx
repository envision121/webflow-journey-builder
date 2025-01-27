import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap, Wind, Leaf, MapPin, Phone, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-white py-2 px-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Ekkattuthangal, Guindy Chennai - 600 032</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+91 9841210943 / +91 9884410943</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Wind className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold">Empe Green Energy P Ltd</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-800 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-green-600">About Us</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Services</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Products</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Gallery</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-r from-green-900 to-green-700 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Sustainable Solutions
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Creating a greener future for generations to come
            </p>
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white px-8"
            >
              Read More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-[#4CAF50] text-xl font-semibold tracking-wide uppercase mb-4">ABOUT US</h2>
                <h3 className="text-4xl font-bold text-[#1A1F2C] leading-tight mb-6">
                  Pioneering Green Energy Solutions
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Empee Green Energy, we're committed to revolutionizing the energy sector through innovative renewable solutions. Our mission is to accelerate the global transition to sustainable energy, making it accessible and efficient for everyone.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Industry Leading Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Certified Professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">24/7 Support & Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Sustainable Solutions</span>
                </div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 gap-2 px-8 py-6 text-lg">
                Discover Our Services
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative overflow-hidden rounded-3xl group">
              <img 
                src="/lovable-uploads/db413689-f513-4637-9b37-ab7b1fae71f4.png"
                alt="Green Hills"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A1F2C]">
              Our Key Solutions
              <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <Wind className="h-16 w-16 text-green-500 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Wind Systems</h3>
              <p className="text-gray-600 mb-4 text-lg">
                Harness wind energy with our high-efficiency turbines.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Tailored solutions for residential, commercial, and industrial use.
              </p>
              <Button variant="link" className="text-green-600 hover:text-green-700 text-lg">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <Sun className="h-16 w-16 text-green-500 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Solar Systems</h3>
              <p className="text-gray-600 mb-4 text-lg">
                Efficient solar PV panels and rooftop systems for energy independence.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Turnkey solutions for residential and commercial purposes.
              </p>
              <Button variant="link" className="text-green-600 hover:text-green-700 text-lg">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <Zap className="h-16 w-16 text-green-500 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Hybrid Systems</h3>
              <p className="text-gray-600 mb-4 text-lg">
                The best of solar and wind combined for reliable energy generation.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Scalable and cost-effective solutions for continuous power supply.
              </p>
              <Button variant="link" className="text-green-600 hover:text-green-700 text-lg">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-2">1+ MW</h3>
              <p className="text-gray-600">Total Power Generated</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-2">3+ YRS</h3>
              <p className="text-gray-600">Industry Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-2">25%</h3>
              <p className="text-gray-600">Average Energy Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-4">OUR SERVICES</h2>
            <h3 className="text-2xl text-gray-900">Comprehensive Energy Solutions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Array(4).fill(null).map((_, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="text-green-500" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Energy Solution {index + 1}</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive energy management and optimization solutions
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12">Explore Our Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array(4).fill(null).map((_, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src="/lovable-uploads/5f06c520-cd37-4c0d-8a2a-1d0ae906112c.png"
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold">Project {index + 1}</h3>
                  <Button variant="link" className="text-green-400 p-0">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Switch to Green Energy?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards a sustainable future. Our team of experts is ready to help you make the transition to clean energy.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-white text-green-700 hover:bg-green-50">
              Contact Us
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>FAQ</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>Solar Panels</li>
                <li>Wind Turbines</li>
                <li>Energy Storage</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li>1234 Green Street</li>
                <li>contact@example.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
