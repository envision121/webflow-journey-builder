import ProductLayout from "@/components/products/ProductLayout";

const UE333300 = () => {
  const specifications = [
    { parameter: "Model", value: "UE 33" },
    { parameter: "RATED OUTPUT", value: "3300W" },
    { parameter: "RATED WIND SPEED m/s / mph", value: "10.5 / 24" },
    { parameter: "PEAK OUTPUT", value: "3650W" },
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
    { parameter: "Monthly KWH 10mph / 4.5 m/s PLF %", value: "352 kWh (18%)" },
    { parameter: "Monthly KWH 12mph / 5.4 m/s PLF (%)", value: "568 kWh (25%)" },
    { parameter: "ROTOR DIAMETER", value: "4.65m / 15 ft" },
    { parameter: "NUMBER OF BLADES", value: "3" },
    { parameter: "BLADE MATERIAL & Cp", value: "Carbon Fiber composite, ~0.37" },
    { parameter: "SWEPT AREA", value: "16.4 / 175 Sq.m / sq.feet" },
    { parameter: "Minimum Tip clearance cm / in", value: "36 / 14" },
    { parameter: "Tip Speed Ratio ( TSR )", value: "8.5" },
    { parameter: "LATERAL THRUST ( MAX )", value: "3200 nts" },
    { parameter: "GOVERNOR / over speed limit", value: "Angle tilt (Hydraulic assisted)" },
    { parameter: "GOVERN SPEED", value: "27mph" },
    { parameter: "GOV. SHUT-DOWN / OPTIONAL STOP", value: "Electro-dynamic Switch" },
    { parameter: "UNIT WEIGHT (tower top)", value: "77 Kg" },
    { parameter: "TOWER Top Pipe / Yaw adaptor", value: "P 5\" Shd, 40" },
    { parameter: "VOLTAGE options", value: "12 to 48 / 60 - 240 LV / HV" },
    { parameter: "ELECTRONIC CONTROLLER", value: "Included but separate" },
    { parameter: "WARRANTY", value: "2 yrs" },
    { parameter: "OPERATING LIFE", value: "20 yrs" },
    { parameter: "SURVIVAL WIND", value: "55 m/s" },
    { parameter: "SUGGESTED. ROUTINE MAINTENANCE", value: "Annual inspection" },
  ];

  return (
    <ProductLayout
      title="UE-33 3.3KW Wind Turbine"
      model="UE 33"
      specifications={specifications}
      imageUrl="/lovable-uploads/3bc339a5-41b2-4cb2-9854-a2ac80c6b456.png"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The UE-33 3.3KW Wind Turbine is a powerful solution for medium-scale power generation needs. With its robust design and advanced features, it delivers reliable performance in various wind conditions.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>High power output of 3300W</li>
          <li>Large rotor diameter for improved efficiency</li>
          <li>Advanced angle tilt control system</li>
          <li>Comprehensive electronic control system</li>
          <li>Durable construction for long service life</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default UE333300;