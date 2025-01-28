import ServiceLayout from "@/components/services/ServiceLayout";

const ExhaustWindSystem = () => {
  return (
    <ServiceLayout
      title="Exhaust Wind Systems"
      description="Innovative exhaust wind energy recovery systems that capture and convert waste wind energy from industrial processes into useful power, improving overall energy efficiency."
      imageUrl="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
      features={[
        "Advanced wind energy recovery technology",
        "Custom design for specific applications",
        "Efficient energy conversion",
        "Integrated monitoring system",
        "Low-noise operation"
      ]}
      benefits={[
        "Energy cost reduction",
        "Improved system efficiency",
        "Waste energy recovery",
        "Reduced carbon footprint",
        "Quick return on investment"
      ]}
    />
  );
};

export default ExhaustWindSystem;