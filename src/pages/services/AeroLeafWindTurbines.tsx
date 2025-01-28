import ServiceLayout from "@/components/services/ServiceLayout";

const AeroLeafWindTurbines = () => {
  return (
    <ServiceLayout
      title="Aero Leaf Wind Turbines"
      description="Revolutionary wind energy technology that mimics natural leaf movement to generate power efficiently. Our Aero Leaf Wind Turbines represent the next generation of wind energy harvesting."
      imageUrl="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
      features={[
        "Biomimetic design principles",
        "Low wind speed operation",
        "Minimal visual impact",
        "Silent operation",
        "Easy installation and maintenance"
      ]}
      benefits={[
        "Efficient energy generation",
        "Aesthetically pleasing design",
        "Suitable for urban environments",
        "Low maintenance requirements",
        "Innovative technology leadership"
      ]}
    />
  );
};

export default AeroLeafWindTurbines;