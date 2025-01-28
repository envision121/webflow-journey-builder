import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface GalleryImage {
  id: number;
  title: string;
  url: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const imagesPerPage = 16;

  const images: GalleryImage[] = [
    {
      id: 1,
      title: "Software Development",
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      id: 2,
      title: "Web Development",
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      id: 3,
      title: "Mobile Development",
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: 4,
      title: "Cloud Computing",
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    },
    {
      id: 5,
      title: "Code Review",
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      id: 6,
      title: "Team Collaboration",
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    // Duplicate images to reach 16
    {
      id: 7,
      title: "Software Development 2",
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      id: 8,
      title: "Web Development 2",
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      id: 9,
      title: "Mobile Development 2",
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: 10,
      title: "Cloud Computing 2",
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    },
    {
      id: 11,
      title: "Code Review 2",
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      id: 12,
      title: "Team Collaboration 2",
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 13,
      title: "Software Development 3",
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      id: 14,
      title: "Web Development 3",
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      id: 15,
      title: "Mobile Development 3",
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: 16,
      title: "Cloud Computing 3",
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    },
  ];

  const { data: displayedImages = [], isLoading } = useQuery({
    queryKey: ["gallery", page],
    queryFn: () => {
      // Simulate API call with pagination
      const start = 0;
      const end = page * imagesPerPage;
      return Promise.resolve(images.slice(start, end));
    },
  });

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] mt-[104px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center">
            <div className="container mx-auto px-4">
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Our Gallery
                </h1>
                <p className="text-xl text-white/80">
                  Explore our collection of amazing projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayedImages.length < images.length && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="px-8 py-6"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Load More"
              )}
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;