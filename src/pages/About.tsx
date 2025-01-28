import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Banner Section */}
        <div className="relative h-[300px] bg-gradient-to-r from-primary/90 to-primary">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
            <div className="flex items-center text-white mb-2">
              <a href="/" className="hover:text-primary-foreground">Home</a>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              At Empe Green Energy p Ltd, we take pride as a leading name in the power solutions industry. With our extensive knowledge and expertise in the field, we are dedicated to providing reliable, innovative, and high-quality products that meet the diverse needs of our clientele.
            </p>

            <p className="text-lg mb-8">
              Our commitment to excellence extends beyond product offerings. As your trusted partner, we strive to understand your unique requirements and provide tailored solutions that optimize efficiency, minimize downtime, and ensure uninterrupted power supply. Our team of seasoned professionals is always ready to assist you with expert advice, comprehensive support, and prompt service.
            </p>

            <p className="text-lg mb-8">
              By choosing Empe Green Energy p Ltd, you gain access to the full range of top-of-the-line products, backed by our unwavering dedication to customer satisfaction. Together, we enable businesses to thrive in an increasingly power-dependent world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Small Wind Turbines</h3>
                <p>Advanced wind energy solutions for sustainable power generation.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Solar Systems</h3>
                <p>Efficient solar power solutions for residential and commercial use.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Exhaust Wind Turbine</h3>
                <p>Innovative solutions for harnessing exhaust energy.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Wind Solar Hybrid Systems</h3>
                <p>Combined energy solutions for optimal power generation.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Wind Solar Hybrid Power Plants</h3>
                <p>Large-scale hybrid solutions for industrial applications.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Solar Pumping Systems</h3>
                <p>Efficient water pumping solutions powered by solar energy.</p>
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