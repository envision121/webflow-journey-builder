import { ArrowRight, CheckCircle } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 overflow-hidden bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-4">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Pioneering Green Energy Solutions
              </h3>
            </div>
            
            <p className="text-lg text-gray-600">
              At Empee Green Energy, we're committed to revolutionizing the energy sector through
              innovative renewable solutions. Our mission is to accelerate the global transition
              to sustainable energy, making it accessible and efficient for everyone.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Industry Leading Technology",
                "Certified Professionals",
                "24/7 Support & Maintenance",
                "Sustainable Solutions"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full transition-all duration-300 group"
              >
                Discover Our Services
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/01e5bfed-d5d0-4f5c-a129-59581f592e6a.png"
                alt="Green Energy Solutions"
                className="w-full h-[400px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transform rotate-3 rounded-3xl scale-95 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;