"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

interface ImageSlideshowProps {
  images: string[]
  title: string
}

export function ImageSlideshow({ images, title }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const lightboxPrevious = () => {
    setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1)
  }

  const lightboxNext = () => {
    setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1)
  }

  return (
    <>
      <div className="relative">
        {/* Main Image */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openLightbox(currentIndex)}
          />

          {/* Zoom Indicator */}
          <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
            <ZoomIn className="h-4 w-4" />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
                onClick={goToNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex ? "border-eureka-red scale-105" : "border-gray-200 hover:border-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${title} - Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full p-4">
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Main Lightbox Image */}
            <img
              src={images[lightboxIndex] || "/placeholder.svg"}
              alt={`${title} - Image ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Lightbox Navigation */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={lightboxPrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={lightboxNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {/* Lightbox Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
