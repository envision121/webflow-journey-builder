import ProductLayout from "@/components/products/ProductLayout";

const WindFlower3A = () => {
  const specifications = [
    { parameter: "Model", value: "Wind Flower 3A" },
    { parameter: "Rated Output", value: "900W" },
    { parameter: "Number of Turbines", value: "3" },
    { parameter: "Design", value: "Vertical Axis Wind Turbine" },
    { parameter: "Application", value: "Urban & Semi-Urban Areas" },
    { parameter: "Installation", value: "Rooftop/Ground Mount" },
  ];

  return (
    <ProductLayout
      title="Wind Flower 3A-900 W"
      model="Wind Flower 3A"
      specifications={specifications}
      imageUrl="/lovable-uploads/01019e3f-d3eb-4f9f-84f9-8d8424f8ee43.png"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The Wind Flower 3A is an innovative vertical axis wind turbine designed specifically for urban and semi-urban environments. Its unique flower-like design combines aesthetics with efficient power generation.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Aesthetic design suitable for urban installations</li>
          <li>Multiple turbine configuration</li>
          <li>Flexible mounting options</li>
          <li>Low noise operation</li>
          <li>Ideal for urban power generation</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default WindFlower3A;