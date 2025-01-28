import ServiceLayout from "@/components/services/ServiceLayout";

const SolarSystem = () => {
  return (
    <ServiceLayout
      title="Solar Power Systems"
      description="Transform sunlight into clean, renewable energy with our state-of-the-art solar power systems. Our solutions are designed to maximize energy production while minimizing environmental impact."
      imageUrl="https://images.unsplash.com/photo-1509391366360-2e959784a276"
      features={[
        "High-efficiency solar panels",
        "Advanced inverter technology",
        "Smart monitoring system",
        "Flexible mounting solutions",
        "Weather-resistant design"
      ]}
      benefits={[
        "Significant reduction in electricity bills",
        "Increased property value",
        "Energy independence",
        "Low maintenance costs",
        "Environmental sustainability"
      ]}
    />
  );
};

export default SolarSystem;