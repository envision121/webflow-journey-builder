import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap, Wind, CheckCircle2, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#E5DEFF] to-white px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1F2C] mb-6">
              Transform Your Home with Solar Energy
            </h1>
            <p className="text-xl text-[#8E9196] mb-8">
              Harness the power of the sun to create a sustainable and energy-efficient future for your home
            </p>
            <Button 
              className="text-lg px-8 py-6 h-auto bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              size="lg"
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#F2FCE2]/30 to-transparent rounded-full transform rotate-45"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#FEF7CD]/30 to-transparent rounded-full transform -rotate-45"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">
              Why Choose Solar Energy?
            </h2>
            <p className="text-xl text-[#8E9196] max-w-2xl mx-auto">
              Experience the benefits of clean, renewable energy while reducing your carbon footprint
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#F1F0FB]"
            >
              <div className="mb-4 inline-block p-3 bg-[#F2FCE2] rounded-full">
                <Sun className="w-8 h-8 text-[#6E59A5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Clean Energy</h3>
              <p className="text-[#8E9196]">
                Generate your own clean electricity and reduce your dependence on fossil fuels
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#F1F0FB]"
            >
              <div className="mb-4 inline-block p-3 bg-[#FEF7CD] rounded-full">
                <Zap className="w-8 h-8 text-[#6E59A5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Lower Bills</h3>
              <p className="text-[#8E9196]">
                Significantly reduce your monthly energy costs and enjoy long-term savings
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#F1F0FB]"
            >
              <div className="mb-4 inline-block p-3 bg-[#FEC6A1] rounded-full">
                <Wind className="w-8 h-8 text-[#6E59A5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Energy Independence</h3>
              <p className="text-[#8E9196]">
                Take control of your energy future with reliable, independent power generation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F1F0FB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-6">
                Benefits of Going Solar
              </h2>
              <div className="space-y-4">
                {[
                  "Reduce your carbon footprint",
                  "Save money on electricity bills",
                  "Increase your property value",
                  "Energy independence",
                  "Low maintenance costs",
                  "Government incentives available"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="text-[#6E59A5] flex-shrink-0" />
                    <span className="text-[#8E9196]">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Solar Installation" 
                className="rounded-xl shadow-xl w-full object-cover h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#9b87f5] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Switch to Solar?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a free consultation and quote. Start your journey towards energy independence.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 h-auto bg-white text-[#6E59A5] hover:bg-[#F1F0FB]"
            >
              <Phone className="mr-2" /> Contact Us Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;