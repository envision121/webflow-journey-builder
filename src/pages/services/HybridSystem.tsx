import ServiceLayout from "@/components/services/ServiceLayout";

const HybridSystem = () => {
  return (
    <ServiceLayout
      title="Hybrid Energy Systems"
      description="Combine the best of both worlds with our hybrid energy systems, integrating solar and wind power for consistent, reliable energy production throughout the year."
      imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      features={[
        "Integrated solar and wind power generation",
        "Smart power management system",
        "Advanced energy storage solutions",
        "Automatic source switching",
        "Remote monitoring capabilities"
      ]}
      benefits={[
        "Consistent power supply year-round",
        "Maximized energy production",
        "Reduced dependency on single power source",
        "Enhanced system reliability",
        "Optimized energy storage"
      ]}
    />
  );
};

export default HybridSystem;