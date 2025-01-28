import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const productItems = {
    "Wind System": [
      { label: "UE-6 650 Wind Turbine", href: "/products/ue-6-650" },
      { label: "UE-15 1.5KW Wind Turbine", href: "/products/ue-15-1-5kw" },
      { label: "UE-15 Plus 1.8KW Wind Turbine", href: "/products/ue-15-plus-1-8kw" },
      { label: "UE-33 3.3KW Wind Turbine", href: "/products/ue-33-3-3kw" },
      { label: "UE-42 4.2KW Wind Turbine", href: "/products/ue-42-4-2kw" },
      { label: "UE-42 Plus 5.1KW Wind Turbine", href: "/products/ue-42-plus-5-1kw" },
    ],
    "Exhaust Wind Turbine": [
      { label: "UE-22 Plus Wind Turbine", href: "/products/ue-22-plus" },
    ],
    "Aero Leaf Wind Turbine": [
      { label: "Wind Flower 3A-900 W", href: "/products/wind-flower-3a" },
      { label: "Wind Bush 12 A-3.6KW", href: "/products/wind-bush-12a" },
      { label: "Wind Palm 18A – 5.4KW", href: "/products/wind-palm-18a" },
      { label: "Wind Palm 24A – 7.2KW", href: "/products/wind-palm-24a" },
      { label: "Wind Palm 30A – 9KW", href: "/products/wind-palm-30a" },
      { label: "Wind Tree 36A – 10.8KW", href: "/products/wind-tree-36a" },
    ],
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "#", isDropdown: true },
    { label: "Products", href: "#", isDropdown: true, items: productItems },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white py-2 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="hidden sm:inline">Ekkattuthangal, Guindy Chennai - 600 032</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="hidden sm:inline">+91 9841210943 / +91 9884410943</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/01e5bfed-d5d0-4f5c-a129-59581f592e6a.png" alt="Logo" className="h-12 w-auto" />
              <span className="text-xl font-bold text-primary font-rubik">Empee Green Energy</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map((item) => 
                    item.isDropdown ? (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 font-poppins">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-2 p-4 w-[400px]">
                            {item.items && Object.entries(item.items).map(([key, services]) => (
                              <div key={key}>
                                <h3 className="font-semibold">{key}</h3>
                                {services.map((service) => (
                                  <Link
                                    key={service.href}
                                    to={service.href}
                                    className="block px-4 py-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                                  >
                                    {service.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={item.label}>
                        <Link
                          to={item.href}
                          className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 font-poppins px-4 py-2"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-gray-700 hover:text-primary font-medium px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-poppins"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {Object.entries(productItems).map(([key, services]) => (
                  <div key={key}>
                    <span className="font-semibold">{key}</span>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="text-gray-600 hover:text-primary font-medium px-8 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-poppins"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
