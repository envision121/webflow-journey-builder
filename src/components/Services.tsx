import { Wind, Sun, Battery, Zap, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Services = () => {
  console.log("Services.tsx - Rendering Services component");
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Wind Energy Systems",
      description: "Cutting-edge wind turbines and systems for optimal energy generation",
      hoverColor: "#F2FCE2" // Soft Green
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Solar Solutions",
      description: "Advanced solar panels and photovoltaic systems for sustainable power",
      hoverColor: "#FEF7CD" // Soft Yellow
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Hybrid Systems",
      description: "Integrated renewable energy solutions for uninterrupted power supply",
      hoverColor: "#E5DEFF" // Soft Purple
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Smart Grid Integration",
      description: "Intelligent power distribution and management systems",
      hoverColor: "#D3E4FD" // Soft Blue
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
            className="bg-[rgb(74,171,61)] hover:bg-[rgb(60,150,50)] text-white px-8 py-4 rounded-full inline-flex items-center group transition-all duration-300"
          >
            Discover Our Services
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative flex">
              <div 
                className="flex-grow p-6 transition-all duration-300 rounded-lg cursor-pointer"
                style={{ 
                  backgroundColor: hoveredIndex === index ? service.hoverColor : 'transparent'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="text-[rgb(74,171,61)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#2D3748]">
                  {service.title}
                </h4>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
              {index < services.length - 1 && (
                <div className="absolute right-[-1rem] top-0 h-full">
                  <Separator orientation="vertical" className="h-full bg-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;