import ServiceLayout from "@/components/services/ServiceLayout";

const WindSystem = () => {
  return (
    <ServiceLayout
      title="Wind Energy Systems"
      description="Our advanced wind energy systems harness the power of wind to generate clean, renewable electricity. Perfect for both residential and commercial applications, our systems are designed for maximum efficiency and reliability."
      imageUrl="https://images.unsplash.com/photo-1501854140801-50d01698950b"
      features={[
        "Advanced turbine technology for optimal energy capture",
        "Smart monitoring and control systems",
        "Durable construction for all weather conditions",
        "Low maintenance requirements",
        "Scalable solutions for different power needs"
      ]}
      benefits={[
        "Reduced energy costs",
        "Clean, renewable energy production",
        "Minimal environmental impact",
        "Long-term energy independence",
        "Potential tax incentives and rebates"
      ]}
    />
  );
};

export default WindSystem;