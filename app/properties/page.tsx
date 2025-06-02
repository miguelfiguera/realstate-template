"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Bed, Bath, Square, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const allProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 450000,
    priceDisplay: "$450,000",
    type: "For Sale",
    category: "sale",
    location: "Downtown District",
    propertyType: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    areaDisplay: "1,200 sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Luxury Family Home",
    price: 2800,
    priceDisplay: "$2,800/month",
    type: "For Rent",
    category: "rent",
    location: "Suburban Heights",
    propertyType: "house",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    areaDisplay: "2,500 sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Cozy Studio Loft",
    price: 320000,
    priceDisplay: "$320,000",
    type: "For Sale",
    category: "sale",
    location: "Arts Quarter",
    propertyType: "apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    areaDisplay: "800 sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Executive Townhouse",
    price: 3500,
    priceDisplay: "$3,500/month",
    type: "Rent to Own",
    category: "both",
    location: "Business District",
    propertyType: "townhouse",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1800,
    areaDisplay: "1,800 sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Mountain Cabin Retreat",
    price: 680000,
    priceDisplay: "$680,000",
    type: "For Sale",
    category: "sale",
    location: "Mountain View",
    propertyType: "cabin",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    areaDisplay: "1,600 sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "City Center Penthouse",
    price: 5200,
    priceDisplay: "$5,200/month",
    type: "For Rent",
    category: "rent",
    location: "City Center",
    propertyType: "apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    areaDisplay: "2,200 sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    propertyType: "all",
    minPrice: "",
    maxPrice: "",
    bedrooms: "all",
    bathrooms: "all",
  });

  const applyFilters = () => {
    const filtered = allProperties.filter((property) => {
      // Search filter
      if (
        filters.search &&
        !property.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !property.location.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (
        filters.category !== "all" &&
        property.category !== filters.category
      ) {
        return false;
      }

      // Property type filter
      if (
        filters.propertyType !== "all" &&
        property.propertyType !== filters.propertyType
      ) {
        return false;
      }

      // Price filter
      if (
        filters.minPrice &&
        property.price < Number.parseInt(filters.minPrice)
      ) {
        return false;
      }
      if (
        filters.maxPrice &&
        property.price > Number.parseInt(filters.maxPrice)
      ) {
        return false;
      }

      // Bedrooms filter
      if (
        filters.bedrooms !== "all" &&
        property.bedrooms !== Number.parseInt(filters.bedrooms)
      ) {
        return false;
      }

      // Bathrooms filter
      if (
        filters.bathrooms !== "all" &&
        property.bathrooms < Number.parseInt(filters.bathrooms)
      ) {
        return false;
      }

      return true;
    });

    setFilteredProperties(filtered);
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      category: "all",
      propertyType: "all",
      minPrice: "",
      maxPrice: "",
      bedrooms: "all",
      bathrooms: "all",
    });
    setFilteredProperties(allProperties);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-eureka-black mb-4">
            Properties
          </h1>
          <p className="text-lg text-gray-600">
            Find your perfect property from our extensive collection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Search
                  </label>
                  <Input
                    placeholder="Search properties..."
                    value={filters.search}
                    onChange={(e) =>
                      setFilters({ ...filters, search: e.target.value })
                    }
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Category
                  </label>
                  <Select
                    value={filters.category}
                    onValueChange={(value) =>
                      setFilters({ ...filters, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="sale">For Sale</SelectItem>
                      <SelectItem value="rent">For Rent</SelectItem>
                      <SelectItem value="both">Rent to Own</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Property Type
                  </label>
                  <Select
                    value={filters.propertyType}
                    onValueChange={(value) =>
                      setFilters({ ...filters, propertyType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="cabin">Cabin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Min"
                      type="number"
                      value={filters.minPrice}
                      onChange={(e) =>
                        setFilters({ ...filters, minPrice: e.target.value })
                      }
                    />
                    <Input
                      placeholder="Max"
                      type="number"
                      value={filters.maxPrice}
                      onChange={(e) =>
                        setFilters({ ...filters, maxPrice: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Bedrooms
                  </label>
                  <Select
                    value={filters.bedrooms}
                    onValueChange={(value) =>
                      setFilters({ ...filters, bedrooms: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Bathrooms
                  </label>
                  <Select
                    value={filters.bathrooms}
                    onValueChange={(value) =>
                      setFilters({ ...filters, bathrooms: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Button
                    onClick={applyFilters}
                    className="w-full bg-eureka-red hover:bg-red-700"
                  >
                    Apply Filters
                  </Button>
                  <Button
                    onClick={resetFilters}
                    variant="outline"
                    className="w-full"
                  >
                    Reset Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredProperties.length} of {allProperties.length}{" "}
                properties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <Card
                  key={property.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                      width={400}
                      height={300}
                    />
                    <Badge
                      className={`absolute top-2 right-2 ${
                        property.type === "For Sale"
                          ? "bg-eureka-red"
                          : property.type === "For Rent"
                          ? "bg-blue-600"
                          : "bg-green-600"
                      }`}
                    >
                      {property.type}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{property.title}</CardTitle>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-eureka-red">
                        {property.priceDisplay}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        <span>{property.areaDisplay}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/properties/${property.id}`}
                      className="w-full"
                    >
                      <Button className="w-full bg-eureka-black hover:bg-gray-800">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No properties found matching your criteria.
                </p>
                <Button
                  onClick={resetFilters}
                  className="mt-4 bg-eureka-red hover:bg-red-700"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
