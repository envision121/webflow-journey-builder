import ServiceLayout from "@/components/services/ServiceLayout";

const SolarPumpSystem = () => {
  return (
    <ServiceLayout
      title="Solar Pump Systems"
      description="Efficient and reliable solar-powered pumping solutions for agriculture, irrigation, and water supply needs. Our systems provide sustainable water management with minimal operating costs."
      imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      features={[
        "High-efficiency solar panels",
        "Durable pump construction",
        "Variable speed control",
        "Remote monitoring system",
        "Automatic operation"
      ]}
      benefits={[
        "Zero energy costs",
        "Low maintenance requirements",
        "Environmentally friendly operation",
        "Reliable water supply",
        "Long service life"
      ]}
    />
  );
};

export default SolarPumpSystem;