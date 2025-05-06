"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PhotoGalleryProps {
  title: string;
  images: {
    src: string;
    alt: string;
    thumbnail: string;
    category?: string;
  }[];
}

export default function PhotoGallery({ title, images }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isZoomed, setIsZoomed] = useState(false);

  const categories = [
    "all",
    ...Array.from(
      new Set(
        images
          .map((img) => img.category)
          .filter((cat): cat is string => Boolean(cat))
      )
    ),
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setIsFullscreen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsFullscreen(false);
    setIsZoomed(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
      setIsZoomed(false);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
      setIsZoomed(false);
    }
  };

  const handleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-purple-600">{title}</h2>
        {categories.length > 1 && (
          <div className="flex gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white"
                    : "bg-purple-50 text-purple-600 hover:bg-purple-100"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="w-full grid grid-cols-4 gap-3">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-xl group"
            onClick={() => handleImageClick(index)}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={image.thumbnail}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                quality={75}
              />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isFullscreen && selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onClick={handleClose}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                className="absolute left-4 top-4 text-white text-2xl hover:text-orange-500 transition-colors z-50"
                onClick={handleClose}
              >
                ×
              </button>
              <button
                className="absolute left-4 top-16 h-[calc(100%-4rem)] text-white text-4xl hover:text-orange-500 transition-colors bg-black bg-opacity-20 px-4 z-50"
                onClick={handlePrev}
              >
                ‹
              </button>
              <div className="relative w-full h-full max-w-[100%-100px] max-h-[90vh] flex items-center justify-center margin-auto">
                <div className="relative w-[90vw] h-[90vh]">
                  <Image
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    fill
                    sizes="90vw"
                    priority
                    className={`cursor-zoom-in object-contain transition-transform duration-300 ${
                      isZoomed ? "scale-150" : "scale-100"
                    }`}
                    quality={90}
                    onClick={handleZoom}
                  />
                </div>
              </div>
              <button
                className="absolute right-4 top-16 h-[calc(100%-4rem)] text-white text-4xl hover:text-orange-500 transition-colors bg-black bg-opacity-20 px-4 z-50"
                onClick={handleNext}
              >
                ›
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="text-sm text-purple-200 mt-2">
                  Click to zoom • {selectedImage + 1} of {images.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
