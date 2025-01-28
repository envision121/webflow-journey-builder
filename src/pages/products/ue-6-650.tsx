import ProductLayout from "@/components/products/ProductLayout";

const UE6650 = () => {
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
    { parameter: "Over speed limit RPM / Hz", value: "840 / 70" },
    { parameter: "Monthly KWH 10mph / 4.5 m/s PLF %", value: "72 kWh (18%)" },
    { parameter: "Monthly KWH 12mph / 5.4 m/s PLF (%)", value: "161 kWh (25%)" },
    { parameter: "ROTOR DIAMETER", value: "2.2m / 7.2 ft" },
    { parameter: "NUMBER OF BLADES", value: "3" },
    { parameter: "BLADE MATERIAL & Cp", value: "Carbon Fiber composite, ~0.37" },
    { parameter: "SWEPT AREA", value: "3.7 / 43 Sq.m / sq.feet" },
    { parameter: "Minimum Tip clearance cm / in", value: "20 / 8" },
    { parameter: "Tip Speed Ratio ( TSR )", value: "8.5" },
    { parameter: "LATERAL THRUST ( MAX )", value: "1260 nts" },
    { parameter: "GOVERNOR / over speed limit", value: "Uptilt tilt" },
    { parameter: "GOVERN SPEED", value: "27mph" },
    { parameter: "GOV. SHUT-DOWN / OPTIONAL STOP", value: "Electro-dynamic Switch" },
    { parameter: "UNIT WEIGHT (tower top)", value: "23 kg to 39 Kg" },
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
      title="UE-6 650 Wind Turbine"
      model="UE-6"
      specifications={specifications}
      imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The UE-6 650 Wind Turbine is a compact and efficient wind energy solution, perfect for residential and small commercial applications. With its robust design and reliable performance, it provides sustainable power generation in various wind conditions.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>High efficiency PM 3 phase alternator</li>
          <li>Carbon fiber composite blades for durability</li>
          <li>Low cut-in wind speed of 2.7 m/s</li>
          <li>Passive tail vane control system</li>
          <li>20-year operating life</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default UE6650;