"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const containerWidth = rect.width;

        // Calculate position as percentage
        let newPosition = (x / containerWidth) * 100;

        // Clamp between 0 and 100
        newPosition = Math.max(0, Math.min(100, newPosition));

        setSliderPosition(newPosition);
      }
    },
    [isDragging]
  );

  const handleTouchMove = (e: TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const containerWidth = rect.width;

      // Calculate position as percentage
      let newPosition = (x / containerWidth) * 100;

      // Clamp between 0 and 100
      newPosition = Math.max(0, Math.min(100, newPosition));

      setSliderPosition(newPosition);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchMove={(e) => handleTouchMove(e as unknown as TouchEvent)}
    >
      {/* Before Image (Full width) */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt="Before"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* This div scales the image content to be the full width of the main container,
            allowing the parent 'clipper' div to reveal the correct portion. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            // Calculate width to make image appear as wide as the main slider container.
            // Width is relative to this div's parent (the clipper).
            width:
              sliderPosition > 0 ? `${100 / (sliderPosition / 100)}%` : "100%",
          }}
        >
          <Image
            src={afterImage || "/placeholder.svg"}
            alt="After"
            className="object-cover" // `fill` handles sizing and positioning.
            fill
          />
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {afterLabel}
        </div>
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-eureka-red flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
