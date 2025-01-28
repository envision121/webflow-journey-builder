import ProductLayout from "@/components/products/ProductLayout";

const UE6650Page = () => {
  const specifications = [
    { parameter: "Model", value: "UE-6" },
    { parameter: "RATED OUTPUT", value: "650W" },
    { parameter: "RATED WIND SPEED m/s / mph", value: "10.5 / 24" },
    { parameter: "PEAK OUTPUT", value: "750W" },
    { parameter: "CUT IN m/s / mph", value: "2.7 / 6" },
    { parameter: "YAW SYSTEM", value: "Passive by tail Vane" },
    { parameter: "YAW / Tower Cable", value: "N x 360° Freedom" },
    { parameter: "GENERATOR", value: "PM 3 phase alternator (variable speed)" },
    { parameter: "Insulation Class & Efficiency", value: "Class \"H\", > 87%" },
    { parameter: "Stator Skew", value: "1 slot pitch" },
    { parameter: "Max stator Core Temperature", value: "180° C" },
    { parameter: "POLES", value: "10" },
    { parameter: "RPM- 50hz/60hz", value: "600 / 720" },
    // ... Add all other specifications
  ];

  return (
    <ProductLayout
      title="UE-6 650 Wind Turbine"
      description="A compact and efficient wind turbine solution designed for reliable power generation in various wind conditions."
      specifications={specifications}
      imageUrl="/lovable-uploads/01e5bfed-d5d0-4f5c-a129-59581f592e6a.png"
    />
  );
};

export default UE6650Page;