import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap, Wind, Leaf } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-green-600 font-semibold mb-4">ABOUT US</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Pioneering Green Energy Solutions
              </h3>
              <p className="text-gray-600 mb-8">
                At Green Solutions Inc, we're passionate about contributing to a cleaner, more sustainable future. Our innovative energy solutions are designed to help businesses and homeowners reduce their carbon footprint while saving on energy costs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Leaf className="text-green-500" size={20} />
                  <span>Certified Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="text-green-500" size={20} />
                  <span>Smart Tech Solutions</span>
                </div>
              </div>
              <Button className="bg-green-500 hover:bg-green-600">
                Learn More
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/5f06c520-cd37-4c0d-8a2a-1d0ae906112c.png" 
                alt="Green Energy" 
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-12">Our Key Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wind className="text-green-500" size={24} />,
                title: "Wind Systems",
                description: "Harnessing wind power for sustainable energy generation"
              },
              {
                icon: <Sun className="text-green-500" size={24} />,
                title: "Solar Solutions",
                description: "Converting sunlight into clean, renewable energy"
              },
              {
                icon: <Zap className="text-green-500" size={24} />,
                title: "Hybrid Systems",
                description: "Combining multiple renewable sources for optimal efficiency"
              }
            ].map((solution, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
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