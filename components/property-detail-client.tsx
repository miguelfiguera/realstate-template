"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ImageSlideshow } from "@/components/image-slideshow"
import { ContactForm } from "@/components/contact-form"
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Phone,
  Mail,
  Share2,
  Heart,
  CheckCircle,
  Star,
} from "lucide-react"

interface Property {
  id: number
  title: string
  price: number
  priceDisplay: string
  type: string
  category: string
  location: string
  fullAddress: string
  propertyType: string
  bedrooms: number
  bathrooms: number
  area: number
  areaDisplay: string
  yearBuilt: number
  lotSize: string
  parking: string
  description: string
  features: string[]
  amenities: string[]
  images: string[]
  agent: {
    name: string
    title: string
    phone: string
    email: string
    image: string
  }
  dateAdded: string
  status: string
  propertyId: string
  mls: string
}

interface PropertyDetailClientProps {
  property: Property
}

export function PropertyDetailClient({ property }: PropertyDetailClientProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  const getStatusBadge = (type: string) => {
    switch (type) {
      case "For Sale":
        return <Badge className="bg-eureka-red text-white">For Sale</Badge>
      case "For Rent":
        return <Badge className="bg-blue-600 text-white">For Rent</Badge>
      case "Rent to Own":
        return <Badge className="bg-green-600 text-white">Rent to Own</Badge>
      default:
        return <Badge variant="secondary">{type}</Badge>
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: property.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/properties">
              <Button variant="outline" className="hover:bg-eureka-red hover:text-white transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Properties
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFavorited(!isFavorited)}
                className={`transition-colors ${
                  isFavorited ? "bg-eureka-red text-white" : "hover:bg-eureka-red hover:text-white"
                }`}
              >
                <Heart className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleShare}
                className="hover:bg-eureka-red hover:text-white"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Slideshow */}
            <Card className="overflow-hidden shadow-lg">
              <ImageSlideshow images={property.images} title={property.title} />
            </Card>

            {/* Property Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-eureka-black mb-2">
                      {property.title}
                    </CardTitle>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-5 w-5 mr-2 text-eureka-red" />
                      <span>{property.fullAddress}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      {getStatusBadge(property.type)}
                      <Badge variant="outline">ID: {property.propertyId}</Badge>
                      <Badge variant="outline">MLS: {property.mls}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl md:text-4xl font-bold text-eureka-red mb-2">{property.priceDisplay}</div>
                    <div className="text-sm text-gray-600">{property.category === "rent" ? "per month" : ""}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-eureka-red" />
                    <div className="font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="h-6 w-6 mx-auto mb-2 text-eureka-red" />
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="h-6 w-6 mx-auto mb-2 text-eureka-red" />
                    <div className="font-semibold">{property.area.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Calendar className="h-6 w-6 mx-auto mb-2 text-eureka-red" />
                    <div className="font-semibold">{property.yearBuilt}</div>
                    <div className="text-sm text-gray-600">Year Built</div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-eureka-black">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-eureka-black">Property Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Type:</span>
                      <span className="font-medium capitalize">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year Built:</span>
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lot Size:</span>
                      <span className="font-medium">{property.lotSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parking:</span>
                      <span className="font-medium">{property.parking}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-medium text-green-600">{property.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Listed:</span>
                      <span className="font-medium">{new Date(property.dateAdded).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property ID:</span>
                      <span className="font-medium">{property.propertyId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">MLS Number:</span>
                      <span className="font-medium">{property.mls}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-eureka-black">Features & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-eureka-red">Property Features</h4>
                    <ul className="space-y-2">
                      {property.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-eureka-red">Community Amenities</h4>
                    <ul className="space-y-2">
                      {property.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center">
                          <Star className="h-4 w-4 text-eureka-red mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-eureka-black">Contact Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={property.agent.image || "/placeholder.svg"}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{property.agent.name}</h3>
                    <p className="text-gray-600">{property.agent.title}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-eureka-red mr-3" />
                    <a href={`tel:${property.agent.phone}`} className="text-gray-700 hover:text-eureka-red">
                      {property.agent.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-eureka-red mr-3" />
                    <a href={`mailto:${property.agent.email}`} className="text-gray-700 hover:text-eureka-red">
                      {property.agent.email}
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-eureka-red hover:bg-red-700"
                    onClick={() => setShowContactForm(!showContactForm)}
                  >
                    {showContactForm ? "Hide Contact Form" : "Send Message"}
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-eureka-red hover:text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full hover:bg-eureka-red hover:text-white">
                    Schedule Tour
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            {showContactForm && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-eureka-black">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm property={property} />
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-eureka-black">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price per sq ft:</span>
                    <span className="font-semibold">
                      ${Math.round(property.price / property.area).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Property Type:</span>
                    <span className="font-semibold capitalize">{property.propertyType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Days on Market:</span>
                    <span className="font-semibold">
                      {Math.floor(
                        (new Date().getTime() - new Date(property.dateAdded).getTime()) / (1000 * 60 * 60 * 24),
                      )}{" "}
                      days
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            {property.category === "sale" && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-eureka-black">Estimated Monthly Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-eureka-red">
                        ${Math.round((property.price * 0.8 * 0.06) / 12).toLocaleString()}/mo
                      </div>
                      <div className="text-sm text-gray-600">Estimated with 20% down, 6% APR</div>
                    </div>
                    <Button variant="outline" className="w-full hover:bg-eureka-red hover:text-white">
                      Get Pre-Approved
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
