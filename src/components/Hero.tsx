import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

console.log("Hero.tsx - Rendering Hero component");

const Hero = () => {
  console.log("Hero.tsx - Inside Hero component render");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
      title: "Powering Tomorrow's World",
      description: "Innovative renewable energy solutions for a sustainable future",
      button1: "Get Started →",
      button2: "Learn More",
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      title: "Clean Energy Revolution",
      description: "Leading the transition to renewable energy technologies",
      button1: "Get Started →",
      button2: "Learn More",
    },
    {
      image: "https://images.unsplash.com/photo-1509390144018-eeef0cba1092",
      title: "Sustainable Solutions",
      description: "Creating a greener future for generations to come",
      button1: "Get Started →",
      button2: "Learn More",
    },
  ];

  useEffect(() => {
    console.log("Hero.tsx - Setting up slide interval");
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
    <div className="relative h-[600px] overflow-hidden">
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
            className="w-full h-full object-cover transform scale-110 transition-transform duration-[2000ms]"
            style={{
              transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
            }}
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl space-y-6 mt-16">
                <h1 className="text-[50px] font-bold text-white opacity-0 animate-slideIn"
                    style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 opacity-0 animate-slideIn"
                   style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                  {slide.description}
                </p>
                <div className="flex gap-4 pt-4 opacity-0 animate-slideIn"
                     style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
                  <a
                    href="#contact"
                    className="bg-white hover:bg-white/90 text-black px-8 py-4 rounded-full inline-flex items-center group transition-all duration-300"
                  >
                    {slide.button1}
                  </a>
                  <a
                    href="#about"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300"
                  >
                    {slide.button2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-16 left-0 right-0 z-30 flex justify-between items-center px-8">
        <button
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Hero;