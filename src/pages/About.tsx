import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-[300px] bg-gray-900">
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><a href="/" className="text-primary hover:underline">Home</a></li>
              <li><span className="text-gray-500">/</span></li>
              <li><span className="text-gray-500">About Us</span></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              At Empe Green Energy p Ltd, we take pride as a leading name in the power solutions industry. With our extensive knowledge and expertise in the field, we are dedicated to providing reliable, innovative, and high-quality products that meet the diverse needs of our clientele. Whether it's Uninterruptible Power Supplies (UPS), DC-DC Converters, Inverters, Charge Regulators, VFD Drives, or other power conditioning and conversion equipment, we have you covered.
            </p>
            
            <p className="mb-6">
              Our commitment to excellence extends beyond product offerings. As your trusted partner, we strive to understand your unique requirements and provide tailored solutions that optimize efficiency, minimize downtime, and ensure uninterrupted power supply. Our team of seasoned professionals is always ready to assist you with expert advice, comprehensive support, and prompt service.
            </p>

            <p className="mb-6">
              By choosing Empe Green Energy p Ltd, you gain access to the full range of top-of-the-line products, backed by our unwavering dedication to customer satisfaction. Together, we enable businesses to thrive in an increasingly power-dependent world.
            </p>

            <p className="mb-10">
              Experience the synergy of Empe Green Energy p Ltd, and unlock the true potential of power solutions. Contact us today to discover how we can meet your power requirements with reliability, expertise, and unrivalled customer service.
            </p>

            <h2 className="text-2xl font-bold mb-6">Our Solutions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Small Wind Turbines</li>
              <li>Solar Systems</li>
              <li>Exhaust Wind Turbine</li>
              <li>Wind Solar Hybrid Systems</li>
              <li>Wind Solar Hybrid Power Plants</li>
              <li>Solar pumping Systems</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;