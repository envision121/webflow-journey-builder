import ProductLayout from "@/components/products/ProductLayout";

const WindPalm18A = () => {
  const specifications = [
    { parameter: "Model", value: "Wind Palm 18A" },
    { parameter: "Rated Output",  value: "5.4KW" },
    { parameter: "Number of Turbines", value: "18" },
    { parameter: "Design", value: "Vertical Axis Wind Turbine" },
    { parameter: "Application", value: "Commercial & Industrial" },
    { parameter: "Installation", value: "Ground Mount" },
  ];

  return (
    <ProductLayout
      title="Wind Palm 18A – 5.4KW"
      model="Wind Palm 18A"
      specifications={specifications}
      imageUrl="/lovable-uploads/01019e3f-d3eb-4f9f-84f9-8d8424f8ee43.png"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The Wind Palm 18A is an advanced multi-turbine system featuring 18 vertical axis turbines arranged in a palm-like configuration. This innovative design provides high power output while maintaining visual appeal.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>18 turbine configuration for maximum power</li>
          <li>Aesthetic palm-tree design</li>
          <li>Suitable for various wind conditions</li>
          <li>Low maintenance requirements</li>
          <li>Ideal for commercial installations</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default WindPalm18A;