import { Wind, Sun, Battery, Plug, Factory, Leaf, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));
      
      if (progress < duration) {
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration]);

  return (
    <span className="text-5xl font-bold text-primary">
      {prefix}{count}{suffix}
    </span>
  );
};

const solutions = [
  {
    icon: <Wind className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
    title: "Wind Systems",
    description: [
      "Harness wind energy with our high-efficiency turbines.",
      "Tailored solutions for residential, commercial, and industrial use.",
    ],
  },
  {
    icon: <Sun className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
    title: "Solar Systems",
    description: [
      "Efficient solar PV panels and rooftop systems for energy independence.",
      "Turnkey solutions for residential and commercial purposes.",
    ],
  },
  {
    icon: <Battery className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
    title: "Hybrid Systems",
    description: [
      "The best of solar and wind combined for reliable energy generation.",
      "Scalable and cost-effective solutions for continuous power supply.",
    ],
  },
  {
    icon: <Plug className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
    title: "Solar Pump Systems",
    description: [
      "Eco-friendly and cost-efficient water pumping solutions.",
    ],
  },
  {
    icon: <Factory className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
    title: "Exhaust Wind Turbines",
    description: [
      "Innovative turbines that utilize waste airflow for additional energy generation.",
    ],
  },
  {
    icon: <Leaf className="h-12 w-12 text-primary bg-primary/10 p-2 rounded-full" />,
    title: "Aero Leaf Wind Turbines",
    description: [
      "Compact, efficient, and aesthetically pleasing turbines ideal for urban and rural setups.",
    ],
  },
];

const KeyHighlights = () => {
  console.log("KeyHighlights.tsx - Rendering KeyHighlights component");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Key Solutions</h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {solution.icon}
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <ul className="space-y-2">
                  {solution.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark transition-colors inline-flex items-center group"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Achievements and Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {isVisible && (
              <>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="mb-4">
                    <Counter end={5} suffix="+ MW" duration={3000} />
                  </div>
                  <p className="text-gray-600">Small wind systems installed across India</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="mb-4">
                    <Counter end={15} suffix="+ yrs" duration={3000} />
                  </div>
                  <p className="text-gray-600">of experience</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="mb-4">
                    <Counter end={100} suffix="%" duration={3000} />
                  </div>
                  <p className="text-gray-600">Proven expertise in integrating hybrid energy systems</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
