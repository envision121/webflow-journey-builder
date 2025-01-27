import { ArrowRight, CheckCircle2 } from "lucide-react";

const Products = () => {
  console.log("Products.tsx - Rendering Products component");
  
  const categories = [
    {
      title: "Wind System",
      products: ["UE-6 650 Wind Turbine", "UE-15 1.5KW Wind Turbine", "UE-42 4.2KW Wind Turbine"],
      image: "/lovable-uploads/01e5bfed-d5d0-4f5c-a129-59581f592e6a.png",
    },
    {
      title: "Solar System",
      products: ["On-Grid System", "Off Grid System"],
      image: "/lovable-uploads/01e5bfed-d5d0-4f5c-a129-59581f592e6a.png",
    },
    {
      title: "Hybrid System",
      products: ["Wind & Solar Hybrid System", "Solar Hybrid System"],
      image: "/lovable-uploads/01e5bfed-d5d0-4f5c-a129-59581f592e6a.png",
    },
    {
      title: "Solar Pump System",
      products: ["Deep Well Pumps", "Surface Pumps", "Agricultural Pumps"],
      image: "/lovable-uploads/01e5bfed-d5d0-4f5c-a129-59581f592e6a.png",
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Products</h2>
          <h3 className="main-heading">Innovative Solutions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-[rgb(74,171,61)] mr-2 flex-shrink-0" />
                      {product}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="bg-[rgb(74,171,61)] hover:bg-[rgb(60,150,50)] text-white px-6 py-3 rounded-full inline-flex items-center group transition-all duration-300 justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;