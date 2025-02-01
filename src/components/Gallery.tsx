<<<<<<< HEAD
import {
=======
import { useEffect, useState } from "react";
import { 
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
<<<<<<< HEAD
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
=======
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1

const Gallery = () => {
  const projects = [
    {
      title: "Wind Farm Installation",
      location: "Tamil Nadu",
<<<<<<< HEAD
      image: "../../public/images/cf266cb9-9a8a-4bb9-8fc7-9d60bfe982b9.jpg",
=======
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51",
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
    },
    {
      title: "Solar Park Development",
      location: "Karnataka",
<<<<<<< HEAD
      image: "../../public/images/pexels-tomfisk-1599819.jpg",
=======
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
    },
    {
      title: "Hybrid Energy System",
      location: "Kerala",
<<<<<<< HEAD
      image: "../../public/images/hybrid.jpg",
=======
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
    },
    {
      title: "Industrial Solar Installation",
      location: "Andhra Pradesh",
<<<<<<< HEAD
      image: "../../public/images/f413a6be-6348-4f9a-a590-91f10f0fda90.jpg",
=======
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
    },
    {
      title: "Commercial Wind Project",
      location: "Maharashtra",
<<<<<<< HEAD
      image: "../../public/images/photo-1473341304170-971dccb5ac1e.jpeg",
=======
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
    },
    {
      title: "Residential Solar Setup",
      location: "Gujarat",
<<<<<<< HEAD
      image: "../../public/images/4a1f7656-c373-4f2a-82df-88003f95a553.jpg",
=======
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
    },
    {
      title: "Urban Wind Installation",
      location: "Delhi",
<<<<<<< HEAD
      image: "../../public/images/4598d1ff-9df1-4488-8952-31fee6fc718b.jpg",
=======
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
    },
    {
      title: "Rural Solar Project",
      location: "Rajasthan",
<<<<<<< HEAD
      image: "../../public/images/b4dcb0ea-21bc-4724-90dd-413bb6480731.png",
=======
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
<<<<<<< HEAD
    {
=======
    { 
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
<<<<<<< HEAD
    [Autoplay({ delay: 3000, stopOnInteraction: false})]
=======
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
>>>>>>> ccf0d6fd9476206249b45b1ffd9e8f283d240ea1
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-heading text-sm uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <span>Our Projects</span>
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
          </h2>
          <h3 className="font-heading text-[1.8rem] font-medium text-black">
            Explore Our Latest Projects
          </h3>
        </div>

        <Carousel
          ref={emblaRef}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg h-[300px] mx-2 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === selectedIndex ? "w-6 bg-primary" : "bg-gray-300"
              }`}
              onClick={() => emblaApi?.scrollTo(idx)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="/gallery"
            className="bg-[rgb(74,171,61)] hover:bg-[rgb(60,150,50)] text-white px-8 py-4 rounded-full inline-flex items-center group transition-all duration-300"
          >
            View More Projects
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
