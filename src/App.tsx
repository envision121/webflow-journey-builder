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
          <Route path="/services/wind-system" element={<WindSystem />} />
          <Route path="/services/solar-system" element={<SolarSystem />} />
          <Route path="/services/hybrid-system" element={<HybridSystem />} />
          <Route path="/services/solar-pump-system" element={<SolarPumpSystem />} />
          <Route path="/services/exhaust-wind-system" element={<ExhaustWindSystem />} />
          <Route path="/services/aero-leaf-wind-turbines" element={<AeroLeafWindTurbines />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;