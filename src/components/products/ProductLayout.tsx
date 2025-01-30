import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Specification {
  parameter: string;
  value: string | number;
}

interface ProductLayoutProps {
  title: string;
  model: string;
  specifications: Specification[];
  children?: React.ReactNode;
  imageUrl?: string;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  title,
  model,
  specifications,
  children,
  imageUrl = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">{title}</h1>
            <div className="h-1 w-20 bg-primary rounded animate-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Model: {model}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Parameter</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {specifications.map((spec, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-2 text-sm text-gray-900">{spec.parameter}</td>
                          <td className="px-4 py-2 text-sm text-gray-600">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full h-[500px] object-contain bg-white p-4"
                />
              </div>
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductLayout;