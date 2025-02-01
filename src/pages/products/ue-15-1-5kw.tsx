import ProductLayout from "@/components/products/ProductLayout";

const UE151500 = () => {
  const specifications = [
    { parameter: "Model", value: "UE-15" },
    { parameter: "RATED OUTPUT", value: "1500W" },
    { parameter: "RATED WIND SPEED m/s / mph", value: "10.5 / 24" },
    { parameter: "PEAK OUTPUT", value: "1700W" },
    { parameter: "CUT IN m/s / mph", value: "2.7 / 6" },
    { parameter: "YAW SYSTEM", value: "Passive by tail Vane" },
    { parameter: "YAW / Tower Cable", value: "N x 360° Freedom" },
    { parameter: "GENERATOR", value: "PM 3 phase alternator (variable speed)" },
    { parameter: "Insulation Class & Efficiency", value: "Class \"H\", > 87%" },
    { parameter: "Stator Skew", value: "1 slot pitch" },
    { parameter: "Max stator Core Temperature", value: "180° C" },
    { parameter: "POLES", value: "16" },
    { parameter: "RPM- 50hz/60hz", value: "375 / 450" },
    { parameter: "Over speed limit RPM / Hz", value: "525 / 70" },
    { parameter: "Monthly KWH 10mph / 4.5 m/s PLF %", value: "166 kWh (18%)" },
    { parameter: "Monthly KWH 12mph / 5.4 m/s PLF (%)", value: "288 kWh (25%)" },
    { parameter: "ROTOR DIAMETER", value: "3.2m / 11 ft" },
    { parameter: "NUMBER OF BLADES", value: "3" },
    { parameter: "BLADE MATERIAL & Cp", value: "Carbon Fiber composite, ~0.37" },
    { parameter: "SWEPT AREA", value: "9.2 / 95 Sq.m / sq.feet" },
    { parameter: "Minimum Tip clearance cm / in", value: "28 / 11" },
    { parameter: "Tip Speed Ratio ( TSR )", value: "8.5" },
    { parameter: "LATERAL THRUST ( MAX )", value: "1200 nts" },
    { parameter: "GOVERNOR / over speed limit", value: "Uptilt tilt (Hydraulic assisted)" },
    { parameter: "GOVERN SPEED", value: "27mph" },
    { parameter: "GOV. SHUT-DOWN / OPTIONAL STOP", value: "Electro-dynamic Switch" },
    { parameter: "UNIT WEIGHT (tower top)", value: "34 Kg" },
    { parameter: "TOWER Top Pipe / Yaw adaptor", value: "P 2.5\" Shd, 40" },
    { parameter: "VOLTAGE options", value: "12 to 48 / 60 - 140 LV / HV" },
    { parameter: "ELECTRONIC CONTROLLER", value: "Included but separate" },
    { parameter: "WARRANTY", value: "2 yrs" },
    { parameter: "OPERATING LIFE", value: "20 yrs" },
    { parameter: "SURVIVAL WIND", value: "55 m/s" },
    { parameter: "SUGGESTED. ROUTINE MAINTENANCE", value: "Annual inspection" },
  ];

  return (
    <ProductLayout
      title="UE-15 1.5KW Wind Turbine"
      model="UE-15"
      specifications={specifications}
      imageUrl="/lovable-uploads/a3e68f8e-bdd1-4705-8a24-ffc1db553378.png"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The UE-15 1.5KW Wind Turbine is a mid-range power solution designed for reliable and efficient wind energy generation. With its advanced features and robust construction, it provides consistent power output in various wind conditions.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>High-efficiency PM 3 phase alternator</li>
          <li>Carbon fiber composite blades</li>
          <li>Hydraulic assisted uptilt system</li>
          <li>Advanced electronic controller</li>
          <li>20-year operating lifespan</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default UE151500;