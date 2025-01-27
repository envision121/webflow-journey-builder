import { Wind, Sun, Battery, Zap, ArrowRight } from "lucide-react";

const Services = () => {
  console.log("Services.tsx - Rendering Services component");
  
  const services = [
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Wind Energy Systems",
      description: "Cutting-edge wind turbines and systems for optimal energy generation",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Solar Solutions",
      description: "Advanced solar panels and photovoltaic systems for sustainable power",
      gradient: "from-orange-500/20 to-yellow-500/20",
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Hybrid Systems",
      description: "Integrated renewable energy solutions for uninterrupted power supply",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Smart Grid Integration",
      description: "Intelligent power distribution and management systems",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase mb-4">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Comprehensive Energy Solutions
          </h3>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full inline-flex items-center group transition-all duration-300"
          >
            Discover Our Services
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8 bg-white hover:bg-transparent transition-colors duration-500 h-full flex flex-col">
                <div className="mb-6 text-primary group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h4>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;