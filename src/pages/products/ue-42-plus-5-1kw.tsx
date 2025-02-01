import ProductLayout from "@/components/products/ProductLayout";

const UE42Plus = () => {
  const specifications = [
    { parameter: "Model", value: "UE42 plus" },
    { parameter: "Rated Output", value: "5100W" },
    { parameter: "Rated Wind Speed (m/s / mph)", value: "11 / 25" },
    { parameter: "Peak Output", value: "5400W" },
    { parameter: "Cut-in Wind Speed (m/s / mph)", value: "2.7 / 6" },
    { parameter: "Yaw System", value: "Passive by tail Vane" },
    { parameter: "Yaw / Tower Cable", value: "N x 360° Freedom" },
    { parameter: "Generator", value: "PM 3 phase alternator" },
    { parameter: "Insulation Class & Efficiency", value: "Class \"H\", > 87%" },
    { parameter: "Stator Skew", value: "1 slot pitch" },
    { parameter: "Max Stator Core Temperature", value: "180°C" },
    { parameter: "Poles", value: "16" },
    { parameter: "RPM - 50Hz/60Hz", value: "375 / 450" },
    { parameter: "Over Speed Limit RPM / Hz", value: "525 / 70" },
    { parameter: "Monthly KWH 10mph / 4.5 m/s", value: "500 kWh (18%)" },
    { parameter: "Monthly KWH 12mph / 5.4 m/s", value: "900 kWh (25%)" },
    { parameter: "Rotor Diameter", value: "5.24m / 17.20 ft" },
    { parameter: "Number of Blades", value: "3" },
    { parameter: "Blade Material & Cp", value: "Carbon Fiber composite, ~ 0.37" },
    { parameter: "Swept Area", value: "21.4 / 230 Sq.m / sq.feet" },
    { parameter: "Minimum Tip Clearance", value: "36 cm / 14 in" },
    { parameter: "Tip Speed Ratio (TSR)", value: "8.5" },
    { parameter: "Maximum Lateral Thrust", value: "4200 nts" },
    { parameter: "Governor / Over Speed Limit", value: "Angle tilt (Hydraulic assisted)" },
    { parameter: "Govern Speed", value: "27 mph" },
    { parameter: "Gov. Shut-Down / Optional Stop", value: "Electro-dynamic Switch" },
    { parameter: "Unit Weight (Tower Top)", value: "99 Kg" },
    { parameter: "Tower Top Pipe / Yaw Adaptor", value: "P 5\" Shd, 40" },
    { parameter: "Voltage Options", value: "48 / 60 - 240 / 380-440 LV / HV / EHV" },
    { parameter: "Electronic Controller", value: "Included but separate" },
    { parameter: "Warranty", value: "2 yrs" },
    { parameter: "Operating Life", value: "20 yrs" },
    { parameter: "Survival Wind", value: "55 m/s" },
    { parameter: "Suggested Routine Maintenance", value: "Annual inspection" },
  ];

  return (
    <ProductLayout
      title="UE-42 Plus 5.1KW Wind Turbine"
      model="UE42 plus"
      specifications={specifications}
      imageUrl="/lovable-uploads/8bae9acd-8a0f-4d45-95a5-2eb8ff5b349a.png"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Product Overview</h2>
        <p className="text-gray-600">
          The UE-42 Plus 5.1KW Wind Turbine is our most powerful wind energy solution, designed for high-demand applications. With enhanced features and superior performance, it delivers exceptional power generation capabilities.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Maximum power output of 5100W</li>
          <li>Largest rotor diameter in the series</li>
          <li>Advanced hydraulic angle tilt system</li>
          <li>Multiple voltage options for various applications</li>
          <li>Superior electronic control system</li>
        </ul>
      </div>
    </ProductLayout>
  );
};

export default UE42Plus;