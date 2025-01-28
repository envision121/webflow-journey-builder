import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import WindSystem from "@/pages/services/WindSystem";
import SolarSystem from "@/pages/services/SolarSystem";
import HybridSystem from "@/pages/services/HybridSystem";
import SolarPumpSystem from "@/pages/services/SolarPumpSystem";
import ExhaustWindSystem from "@/pages/services/ExhaustWindSystem";
import AeroLeafWindTurbines from "@/pages/services/AeroLeafWindTurbines";

// Product imports
import UE6650 from "@/pages/products/ue-6-650";
import UE151500 from "@/pages/products/ue-15-1-5kw";
import UE15Plus from "@/pages/products/ue-15-plus-1-8kw";
import UE333300 from "@/pages/products/ue-33-3-3kw";
import UE424200 from "@/pages/products/ue-42-4-2kw";
import UE42Plus from "@/pages/products/ue-42-plus-5-1kw";
import UE22Plus from "@/pages/products/ue-22-plus";
import WindFlower3A from "@/pages/products/wind-flower-3a";
import WindBush12A from "@/pages/products/wind-bush-12a";
import WindPalm18A from "@/pages/products/wind-palm-18a";
import WindPalm24A from "@/pages/products/wind-palm-24a";
import WindPalm30A from "@/pages/products/wind-palm-30a";
import WindTree36A from "@/pages/products/wind-tree-36a";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Service Routes */}
          <Route path="/services/wind-system" element={<WindSystem />} />
          <Route path="/services/solar-system" element={<SolarSystem />} />
          <Route path="/services/hybrid-system" element={<HybridSystem />} />
          <Route path="/services/solar-pump-system" element={<SolarPumpSystem />} />
          <Route path="/services/exhaust-wind-system" element={<ExhaustWindSystem />} />
          <Route path="/services/aero-leaf-wind-turbines" element={<AeroLeafWindTurbines />} />
          
          {/* Product Routes */}
          <Route path="/products/ue-6-650" element={<UE6650 />} />
          <Route path="/products/ue-15-1-5kw" element={<UE151500 />} />
          <Route path="/products/ue-15-plus-1-8kw" element={<UE15Plus />} />
          <Route path="/products/ue-33-3-3kw" element={<UE333300 />} />
          <Route path="/products/ue-42-4-2kw" element={<UE424200 />} />
          <Route path="/products/ue-42-plus-5-1kw" element={<UE42Plus />} />
          <Route path="/products/ue-22-plus" element={<UE22Plus />} />
          <Route path="/products/wind-flower-3a" element={<WindFlower3A />} />
          <Route path="/products/wind-bush-12a" element={<WindBush12A />} />
          <Route path="/products/wind-palm-18a" element={<WindPalm18A />} />
          <Route path="/products/wind-palm-24a" element={<WindPalm24A />} />
          <Route path="/products/wind-palm-30a" element={<WindPalm30A />} />
          <Route path="/products/wind-tree-36a" element={<WindTree36A />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;