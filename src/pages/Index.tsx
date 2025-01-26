import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Power Your Home with Solar Energy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your home into a sustainable powerhouse with our cutting-edge solar solutions
            </p>
            <Button className="text-lg px-8 py-6 h-auto" size="lg">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-100/50 to-transparent rounded-full transform rotate-45"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full transform -rotate-45"></div>
        </div>
      </section>
    </div>
  );
};

export default Index;