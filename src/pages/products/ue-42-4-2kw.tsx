import ProductLayout from "@/components/products/ProductLayout";

const UE424200 = () => {
  const specifications = [
    { parameter: "Model", value: "UE42" },
    { parameter: "RATED OUTPUT", value: "4200W" },
    { parameter: "RATED WIND SPEED m/s / mph", value: "11 / 25" },
    { parameter: "PEAK OUTPUT", value: "4600W" },
    { parameter: "CUT IN m/s / mph", value: "2.7 / 6" },
    { parameter: "YAW SYSTEM", value: "Passive by tail Vane" },
    { parameter: "YAW / Tower Cable", value: "N x 360° Freedom" },
    { parameter: "GENERATOR", value: "PM 3 phase alternator (variable speed)" },
    { parameter: "Insulation Class and Efficiency", value: "Class \"H\", > 87%" },
    { parameter: "Stator Skew", value: "1 slot pitch" },
    { parameter: "Max stator Core Temperature", value: "180° C" },
    { parameter: "POLES", value: "16" },
    { parameter: "RPM- 50hz/60hz", value: "375 / 450" },
    { parameter: "Over speed limit RPM / Hz", value: "525 / 70" },
    { parameter: "Monthly KWH 10mph / 4.5 m/s PLF %", value: "415 kWh (18%)" },
    { parameter: "Monthly KWH 12mph / 5.4 m/s PLF (%)", value: "685 kWh (25%)" },
    { parameter: "ROTOR DIAMETER", value: "4.90m / 16 ft" },
    { parameter: "NUMBER OF BLADES", value: "3" },
    { parameter: "BLADE MATERIAL & Cp", value: "Carbon Fiber composite, ~0.37" },
    { parameter: "SWEPT AREA", value: "19 / 205 Sq.m / sq.feet" },
    { parameter: "Minimum Tip clearance cm / in", value: "36 / 14" },
    { parameter: "Tip Speed Ratio ( TSR )", value: "8.5" },
    { parameter: "LATERAL THRUST ( MAX )", value: "4000 nts" },
    { parameter: "GOVERNOR / over speed limit", value: "Angle tilt (Hydraulic assisted)" },
    { parameter: "GOVERN SPEED", value: "27mph" },
    { parameter: "GOV. SHUT-DOWN / OPTIONAL STOP", value: "Electro-dynamic Switch" },
    { parameter: "UNIT WEIGHT (tower top)", value: "89 Kg" },
    { parameter: "TOWER Top Pipe / Yaw adaptor", value: "P 5\" Shd, 40" },
    { parameter: "VOLTAGE options", value: "48 / 60 - 240 / 380-440 LV / HV / EHV" },
    { parameter: "ELECTRONIC CONTROLLER", value: "Included but separate" },
    { parameter: "WARRANTY", value: "2 yrs" },
    { parameter: "OPERATING LIFE", value: "20 yrs" },
    { parameter: "SURVIVAL WIND", value: "55 m/s" },
    { parameter: "SUGGESTED. ROUTINE MAINTENANCE", value: "Annual inspection" },
  ];

  return (
    <ProductLayout
      title="UE-42 4.2KW Wind Turbine"
      model="UE42"
      specifications={specifications}
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The UE-42 4.2KW Wind Turbine is a high-capacity wind power solution designed for demanding applications. Its advanced features and robust construction ensure reliable performance in various wind conditions.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>High power output of 4200W</li>
          <li>Large rotor diameter for maximum efficiency</li>
          <li>Advanced angle tilt control system</li>
          <li>Multiple voltage options</li>
          <li>Comprehensive electronic control system</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default UE424200;