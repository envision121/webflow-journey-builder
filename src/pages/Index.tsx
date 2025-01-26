import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Wind, Zap, CheckCircle2, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Solar Energy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of switching to clean, renewable solar power for your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-block p-3 bg-blue-50 rounded-full">
                    <Sun className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Clean Energy</h3>
                  <p className="text-gray-600">
                    Harness the power of the sun for sustainable, clean energy that reduces your carbon footprint
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-block p-3 bg-green-50 rounded-full">
                    <Zap className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lower Bills</h3>
                  <p className="text-gray-600">
                    Significantly reduce your monthly energy bills and achieve long-term savings
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-block p-3 bg-purple-50 rounded-full">
                    <Wind className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Energy Independence</h3>
                  <p className="text-gray-600">
                    Take control of your energy future with reliable, independent power generation
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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
                    <CheckCircle2 className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
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
                src="/placeholder.svg" 
                alt="Solar Panels" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
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
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free consultation and quote. Start your journey towards energy independence.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 h-auto bg-white text-blue-600 hover:bg-blue-50"
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