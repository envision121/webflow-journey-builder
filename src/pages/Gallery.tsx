import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface GalleryImage {
  id: number;
  title: string;
  url: string;
}

const Gallery = () => {
  const [page, setPage] = useState(1);
  const imagesPerPage = 8;

  const images: GalleryImage[] = [
    {
      id: 1,
      title: "Software Development",
      url: "../../public/images/4a1f7656-c373-4f2a-82df-88003f95a553.jpg",
    },
    {
      id: 2,
      title: "Web Development",
      url: "../../public/images/5c3a2c70-ca68-4220-b159-4a9c1c9f6afa.jpg",
    },
    {
      id: 3,
      title: "Mobile Development",
      url: "../../public/images/020fd4b8-7f04-48dd-bb89-4a01d4e06dde.jpg",
    },
    {
      id: 4,
      title: "Cloud Computing",
      url: "../../public/images/50aae16f-ff02-4113-a625-a745e0f03311.jpg",
    },
    {
      id: 5,
      title: "Code Review",
      url: "../../public/images/70dbadf3-1dda-46f9-af70-290025abf52f.jpg",
    },
    {
      id: 6,
      title: "Team Collaboration",
      url: "../../public/images/0304ca82-4c8b-4bed-9ba9-ae01e3931ae5.jpg",
    },
    {
      id: 7,
      title: "Software Development 2",
      url: "../../public/images/0927f78e-0788-4d96-8158-b4747c70806e.jpg",
    },
    {
      id: 8,
      title: "Web Development 2",
      url: "../../public/images/4598d1ff-9df1-4488-8952-31fee6fc718b.jpg",
    },
    {
      id: 9,
      title: "Mobile Development 2",
      url: "../../public/images/4961ee27-7404-4e32-a1cc-117464cb5ed6.jpg",
    },
    {
      id: 10,
      title: "Cloud Computing 2",
      url: "../../public/images/9122ad65-a6d1-4db1-bd60-3c3a51edb580.jpg",
    },
    {
      id: 11,
      title: "Code Review 2",
      url: "../../public/images/28791b74-3448-44cd-8e37-684f56b1c023.png",
    },
    {
      id: 12,
      title: "Team Collaboration 2",
      url: "../../public/images/48521e25-915d-43ed-89fa-e2381ef67574.jpg",
    },
    {
      id: 13,
      title: "Software Development 3",
      url: "../../public/images/184471d3-3810-41c4-a6e9-71d0962d4500.jpg",
    },
    {
      id: 14,
      title: "Web Development 3",
      url: "../../public/images/a7b1c98b-4b1e-493b-9735-010dcf14fead.jpg",
    },
    {
      id: 15,
      title: "Mobile Development 3",
      url: "../../public/images/b4dcb0ea-21bc-4724-90dd-413bb6480731.png",
    },
    {
      id: 16,
      title: "Cloud Computing 3",
      url: "../../public/images/b44a13f8-f962-4fa8-b2f9-8a1a544705d9.jpg",
    },
  ];

  const { data: displayedImages = [], isLoading, isFetching } = useQuery({
    queryKey: ["gallery", page],
    queryFn: async () => {
      // Simulate API call with pagination and loading delay
      await new Promise(resolve => setTimeout(resolve, 800)); // Add slight delay for smooth loading
      const start = 0;
      const end = page * imagesPerPage;
      return images.slice(start, end);
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
              "url('../../public/images/020fd4b8-7f04-48dd-bb89-4a01d4e06dde.jpg')",
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
              className="relative group cursor-pointer overflow-hidden rounded-lg animate-fade-in"
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
              disabled={isLoading || isFetching}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full transition-all duration-300 disabled:opacity-70"
            >
              {(isLoading || isFetching) ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                "Load More"
              )}
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;