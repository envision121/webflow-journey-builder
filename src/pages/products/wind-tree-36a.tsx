import ProductLayout from "@/components/products/ProductLayout";

const WindTree36A = () => {
  const specifications = [
    { parameter: "Model", value: "Wind Tree 36A" },
    { parameter: "Rated Output", value: "10.8KW" },
    { parameter: "Number of Turbines", value: "36" },
    { parameter: "Design", value: "Vertical Axis Wind Turbine" },
    { parameter: "Application", value: "Commercial & Industrial" },
    { parameter: "Installation", value: "Ground Mount" },
  ];

  return (
    <ProductLayout
      title="Wind Tree 36A – 10.8KW"
      model="Wind Tree 36A"
      specifications={specifications}
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The Wind Tree 36A is our flagship multi-turbine system, featuring 36 vertical axis turbines arranged in a tree-like configuration. This innovative design combines maximum power generation with architectural beauty.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>36 turbine configuration for maximum power</li>
          <li>Unique tree-like design</li>
          <li>Highest power output in the series</li>
          <li>Advanced monitoring system</li>
          <li>Perfect for large-scale installations</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default WindTree36A;