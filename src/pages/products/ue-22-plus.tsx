import ProductLayout from "@/components/products/ProductLayout";

const UE22Plus = () => {
  const specifications = [
    { parameter: "Rotor type", value: "Horizontal Axis (HAWT)" },
    { parameter: "Rated output", value: "3000 W" },
    { parameter: "Rated wind speed", value: "12.7 m/s" },
    { parameter: "Max. Power", value: "3000W" },
    { parameter: "Cut-in wind speed", value: "1.0 m/s" },
    { parameter: "Furling wind speed", value: "15 m/s" },
    { parameter: "Yaw control", value: "Passive" },
    { parameter: "Rotor speed control", value: "Microcontroller guided" },
    { parameter: "Survival wind speed", value: "50 m/s" },
    { parameter: "Rotor diameter", value: "1.8 m" },
    { parameter: "Number of blades", value: "9 No" },
    { parameter: "Swept area", value: "2.55 m²" },
    { parameter: "Lateral Thrust", value: "220 NT" },
    { parameter: "Brake system", value: "Electrodynamic" },
    { parameter: "Safety system", value: "Passive yaw steering" },
    { parameter: "Generator type", value: "Three-phase synchronous generator, PM outer rotor 16 pole low loss core" },
    { parameter: "Voltage Electronics", value: "60 to 220VAC by tap setting Over voltage and safety controller" },
    { parameter: "Struts Generator casing Rothe blades", value: "Acrylic Powder coated steel Steel/stainless steel Thermoformed ABS" },
    { parameter: "Weight ind adaptor", value: "Approx: 65kg" },
    { parameter: "Warranty", value: "3 years" },
  ];

  return (
    <ProductLayout
      title="UE-22 Plus Wind Turbine"
      model="UE-22 Plus"
      specifications={specifications}
      imageUrl="/lovable-uploads/60a902db-a0bf-43ce-b51a-9a624408af9e.png"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The UE-22 Plus Wind Turbine is a specialized exhaust wind turbine designed for optimal performance in industrial applications. Its unique 9-blade design and advanced control systems make it ideal for consistent power generation in controlled wind environments.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Horizontal Axis Wind Turbine (HAWT) design</li>
          <li>Microcontroller guided speed control</li>
          <li>Low cut-in wind speed of 1.0 m/s</li>
          <li>Advanced safety features</li>
          <li>Three-phase synchronous generator</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default UE22Plus;