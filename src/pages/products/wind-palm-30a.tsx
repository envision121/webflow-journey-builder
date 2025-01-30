import ProductLayout from "@/components/products/ProductLayout";

const WindPalm30A = () => {
  const specifications = [
    { parameter: "Model", value: "Wind Palm 30A" },
    { parameter: "Rated Output", value: "9KW" },
    { parameter: "Number of Turbines", value: "30" },
    { parameter: "Design", value: "Vertical Axis Wind Turbine" },
    { parameter: "Application", value: "Commercial & Industrial" },
    { parameter: "Installation", value: "Ground Mount" },
  ];

  return (
    <ProductLayout
      title="Wind Palm 30A – 9KW"
      model="Wind Palm 30A"
      specifications={specifications}
      imageUrl="/lovable-uploads/01019e3f-d3eb-4f9f-84f9-8d8424f8ee43.png"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The Wind Palm 30A represents the advanced model in the Wind Palm series, featuring 30 vertical axis turbines. This configuration provides substantial power generation capacity for large-scale applications.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>30 turbine system for maximum power output</li>
          <li>Advanced palm-tree design</li>
          <li>Optimized for various wind conditions</li>
          <li>Easy maintenance and monitoring</li>
          <li>Ideal for industrial applications</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default WindPalm30A;