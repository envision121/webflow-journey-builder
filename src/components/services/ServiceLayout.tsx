import { ServicePageProps } from "@/types/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const ServiceLayout = ({ title, description, features, benefits, imageUrl, children }: ServicePageProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1A3C2F] to-[#2A5C4F] text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl opacity-90">{description}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Benefits</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src={imageUrl} alt={title} className="w-full h-[500px] object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Content */}
          {children && (
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceLayout;