import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/lovable-uploads/01e5bfed-d5d0-4f5c-a129-59581f592e6a.png",
      title: "Powering Tomorrow's World",
      description: "Innovative renewable energy solutions for a sustainable future",
      button1: "Contact Us",
      button2: "View Products",
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      title: "Clean Energy Revolution",
      description: "Leading the transition to renewable energy technologies",
      button1: "Contact Us",
      button2: "View Products",
    },
    {
      image: "https://images.unsplash.com/photo-1509390144018-eeef0cba1092",
      title: "Sustainable Solutions",
      description: "Creating a greener future for generations to come",
      button1: "Contact Us",
      button2: "View Products",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[calc(100vh-5rem)] mt-20 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="bg-[rgb(74,171,61)] hover:bg-[rgb(60,150,50)] text-white px-8 py-3 rounded-full inline-flex items-center transition-all duration-300"
                  >
                    {slide.button1}
                  </a>
                  <a
                    href="#products"
                    className="bg-white hover:bg-white/90 text-[rgb(74,171,61)] px-8 py-3 rounded-full transition-all duration-300"
                  >
                    {slide.button2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Hero;