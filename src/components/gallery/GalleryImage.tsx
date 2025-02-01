import { ImageType } from "@/types/gallery";
import { Eye } from "lucide-react";

interface GalleryImageProps {
  image: ImageType;
  onClick: (image: ImageType) => void;
}

const GalleryImage = ({ image, onClick }: GalleryImageProps) => {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg animate-fade-in"
      onClick={() => onClick(image)}
    >
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Eye className="text-white w-6 h-6" />
      </div>
    </div>
  );
};

export default GalleryImage;