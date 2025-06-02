"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bed,
  Bath,
  Square,
} from "lucide-react";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  price: string;
  type: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  featured: boolean;
}

interface PropertySliderProps {
  properties: Property[];
}

export function PropertySlider({ properties }: PropertySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === properties.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, properties.length, isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? properties.length - 1 : currentIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === properties.length - 1 ? 0 : currentIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Show 3 properties at once on desktop, 1 on mobile
  // const getVisibleProperties = () => {
  //   const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
  //   const result = []

  //   for (let i = 0; i < visibleCount; i++) {
  //     const index = (currentIndex + i) % properties.length
  //     result.push(properties[index])
  //   }

  //   return result
  // }

  const [visibleProperties, setVisibleProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Only run this effect on the client and if there are properties
    if (!isClient || properties.length === 0) return;

    const updateVisibleProperties = () => {
      const visibleCount =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      const result = [];

      for (let i = 0; i < visibleCount; i++) {
        const index = (currentIndex + i) % properties.length;
        result.push(properties[index]);
      }

      setVisibleProperties(result);
    };

    updateVisibleProperties();
    window.addEventListener("resize", updateVisibleProperties);

    return () => window.removeEventListener("resize", updateVisibleProperties);
  }, [currentIndex, properties, isClient]); // Add isClient to dependencies

  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Only render the mapped properties on the client after mount */}
            {
              isClient && visibleProperties.length > 0
                ? visibleProperties.map((property, index) => (
                    <Card
                      key={`${property.id}-${index}`}
                      className="overflow-hidden hover-lift bg-white shadow-lg border-0"
                    >
                      <div className="relative group h-48">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge
                          className={`absolute top-3 right-3 ${
                            property.type === "For Sale"
                              ? "bg-eureka-red hover:bg-red-700"
                              : property.type === "For Rent"
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "bg-green-600 hover:bg-green-700"
                          } shadow-lg`}
                        >
                          {property.type}
                        </Badge>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-bold text-eureka-black hover:text-eureka-red transition-colors">
                          {property.title}
                        </CardTitle>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1 text-eureka-red" />
                          <span className="text-sm">{property.location}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-2xl font-bold text-eureka-red">
                            {property.price}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <div className="flex items-center">
                            <Bed className="h-4 w-4 mr-1 text-eureka-red" />
                            <span>{property.bedrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <Bath className="h-4 w-4 mr-1 text-eureka-red" />
                            <span>{property.bathrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <Square className="h-4 w-4 mr-1 text-eureka-red" />
                            <span>{property.area}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={`/properties/${property.id}`}
                          className="w-full"
                        >
                          <Button className="w-full gradient-black hover:gradient-red transition-all duration-300 transform hover:scale-105">
                            View Details
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))
                : null /* Or render skeleton placeholders here if desired, ensuring they match server render */
            }
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-eureka-red text-eureka-red hover:text-white hover:bg-eureka-red shadow-lg z-10"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-eureka-red text-eureka-red hover:text-white hover:bg-eureka-red shadow-lg z-10"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {properties.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-eureka-red scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
