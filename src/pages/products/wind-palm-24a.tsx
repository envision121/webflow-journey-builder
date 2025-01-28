import ProductLayout from "@/components/products/ProductLayout";

const WindPalm24A = () => {
  const specifications = [
    { parameter: "Model", value: "Wind Palm 24A" },
    { parameter: "Rated Output", value: "7.2KW" },
    { parameter: "Number of Turbines", value: "24" },
    { parameter: "Design", value: "Vertical Axis Wind Turbine" },
    { parameter: "Application", value: "Commercial & Industrial" },
    { parameter: "Installation", value: "Ground Mount" },
  ];

  return (
    <ProductLayout
      title="Wind Palm 24A – 7.2KW"
      model="Wind Palm 24A"
      specifications={specifications}
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The Wind Palm 24A is a high-capacity wind energy system featuring 24 vertical axis turbines. This expanded configuration delivers increased power output while maintaining the aesthetic appeal of the Wind Palm series.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>24 turbine configuration for enhanced power</li>
          <li>Scalable design for various applications</li>
          <li>Efficient in multiple wind conditions</li>
          <li>Minimal maintenance requirements</li>
          <li>Suitable for large-scale installations</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default WindPalm24A;