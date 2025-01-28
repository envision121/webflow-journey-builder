import ProductLayout from "@/components/products/ProductLayout";

const WindBush12A = () => {
  const specifications = [
    { parameter: "Model", value: "Wind Bush 12A" },
    { parameter: "Rated Output", value: "3.6KW" },
    { parameter: "Number of Turbines", value: "12" },
    { parameter: "Design", value: "Vertical Axis Wind Turbine" },
    { parameter: "Application", value: "Commercial & Industrial" },
    { parameter: "Installation", value: "Ground Mount" },
  ];

  return (
    <ProductLayout
      title="Wind Bush 12A-3.6KW"
      model="Wind Bush 12A"
      specifications={specifications}
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The Wind Bush 12A is a powerful multi-turbine system designed for commercial and industrial applications. Its unique bush-like configuration maximizes power generation efficiency while maintaining a compact footprint.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>High power output with multiple turbines</li>
          <li>Compact design for space efficiency</li>
          <li>Suitable for various wind conditions</li>
          <li>Low maintenance requirements</li>
          <li>Ideal for commercial applications</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default WindBush12A;