import { notFound } from "next/navigation"
import { PropertyDetailClient } from "@/components/property-detail-client"

// Mock property data - in a real app, this would come from a database
const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 450000,
    priceDisplay: "$450,000",
    type: "For Sale",
    category: "sale",
    location: "Downtown District",
    fullAddress: "123 Main Street, Downtown District, City, State 12345",
    propertyType: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    areaDisplay: "1,200 sq ft",
    yearBuilt: 2020,
    lotSize: "N/A",
    parking: "1 Garage Space",
    description:
      "This stunning modern apartment features floor-to-ceiling windows, premium finishes, and an open-concept design perfect for urban living. Located in the heart of downtown, you'll have easy access to restaurants, shopping, and public transportation.",
    features: [
      "Floor-to-ceiling windows",
      "Hardwood floors throughout",
      "Stainless steel appliances",
      "In-unit washer/dryer",
      "Central air conditioning",
      "Balcony with city views",
      "Secure building entry",
      "Fitness center access",
      "Rooftop terrace",
      "Pet-friendly",
    ],
    amenities: [
      "24/7 Concierge",
      "Fitness Center",
      "Rooftop Pool",
      "Business Center",
      "Package Service",
      "Bike Storage",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Living+Room",
      "/placeholder.svg?height=600&width=800&text=Kitchen",
      "/placeholder.svg?height=600&width=800&text=Bedroom",
      "/placeholder.svg?height=600&width=800&text=Bathroom",
      "/placeholder.svg?height=600&width=800&text=Balcony",
      "/placeholder.svg?height=600&width=800&text=Building+Exterior",
    ],
    agent: {
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@eureka-realestate.com",
      image: "/placeholder.svg?height=200&width=200&text=Sarah+Johnson",
    },
    dateAdded: "2024-01-15",
    status: "Available",
    propertyId: "ERE-001",
    mls: "MLS123456",
  },
  {
    id: 2,
    title: "Luxury Family Home",
    price: 2800,
    priceDisplay: "$2,800/month",
    type: "For Rent",
    category: "rent",
    location: "Suburban Heights",
    fullAddress: "456 Oak Avenue, Suburban Heights, City, State 12345",
    propertyType: "house",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    areaDisplay: "2,500 sq ft",
    yearBuilt: 2018,
    lotSize: "0.25 acres",
    parking: "2-Car Garage",
    description:
      "Beautiful family home in a quiet suburban neighborhood. This spacious property features an open floor plan, modern kitchen, and large backyard perfect for entertaining. The master suite includes a walk-in closet and en-suite bathroom.",
    features: [
      "Open floor plan",
      "Gourmet kitchen with island",
      "Master suite with walk-in closet",
      "Hardwood floors",
      "Fireplace in living room",
      "Large backyard",
      "Two-car garage",
      "Laundry room",
      "Central heating and cooling",
      "Security system",
    ],
    amenities: ["Community Pool", "Playground", "Walking Trails", "Tennis Court", "Clubhouse"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Front+Exterior",
      "/placeholder.svg?height=600&width=800&text=Living+Room",
      "/placeholder.svg?height=600&width=800&text=Kitchen",
      "/placeholder.svg?height=600&width=800&text=Master+Bedroom",
      "/placeholder.svg?height=600&width=800&text=Backyard",
      "/placeholder.svg?height=600&width=800&text=Garage",
    ],
    agent: {
      name: "Michael Chen",
      title: "Property Specialist",
      phone: "+1 (555) 234-5678",
      email: "michael.chen@eureka-realestate.com",
      image: "/placeholder.svg?height=200&width=200&text=Michael+Chen",
    },
    dateAdded: "2024-01-10",
    status: "Available",
    propertyId: "ERE-002",
    mls: "MLS234567",
  },
  {
    id: 3,
    title: "Cozy Studio Loft",
    price: 320000,
    priceDisplay: "$320,000",
    type: "For Sale",
    category: "sale",
    location: "Arts Quarter",
    fullAddress: "789 Creative Street, Arts Quarter, City, State 12345",
    propertyType: "apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    areaDisplay: "800 sq ft",
    yearBuilt: 2019,
    lotSize: "N/A",
    parking: "Street Parking",
    description:
      "Charming studio loft in the vibrant Arts Quarter. This unique space features exposed brick walls, high ceilings, and large windows that flood the space with natural light. Perfect for artists, young professionals, or anyone looking for a stylish urban retreat.",
    features: [
      "Exposed brick walls",
      "High ceilings",
      "Large windows",
      "Polished concrete floors",
      "Modern kitchen",
      "Murphy bed",
      "Built-in storage",
      "Air conditioning",
      "Secure entry",
      "Bike storage",
    ],
    amenities: ["Art Gallery", "Coffee Shop", "Shared Workspace", "Rooftop Access"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Main+Living+Space",
      "/placeholder.svg?height=600&width=800&text=Kitchen+Area",
      "/placeholder.svg?height=600&width=800&text=Bathroom",
      "/placeholder.svg?height=600&width=800&text=Windows+View",
      "/placeholder.svg?height=600&width=800&text=Building+Entrance",
    ],
    agent: {
      name: "Emily Rodriguez",
      title: "Urban Properties Specialist",
      phone: "+1 (555) 345-6789",
      email: "emily.rodriguez@eureka-realestate.com",
      image: "/placeholder.svg?height=200&width=200&text=Emily+Rodriguez",
    },
    dateAdded: "2024-01-05",
    status: "Available",
    propertyId: "ERE-003",
    mls: "MLS345678",
  },
  {
    id: 4,
    title: "Executive Townhouse",
    price: 3500,
    priceDisplay: "$3,500/month",
    type: "Rent to Own",
    category: "both",
    location: "Business District",
    fullAddress: "321 Executive Boulevard, Business District, City, State 12345",
    propertyType: "townhouse",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1800,
    areaDisplay: "1,800 sq ft",
    yearBuilt: 2021,
    lotSize: "0.1 acres",
    parking: "2-Car Garage",
    description:
      "Sophisticated townhouse in the prestigious Business District. This three-story home offers modern amenities, a private garage, and easy access to major business centers. Features include a gourmet kitchen, master suite, and private patio.",
    features: [
      "Three-story layout",
      "Gourmet kitchen",
      "Master suite with en-suite",
      "Private patio",
      "Two-car garage",
      "Hardwood stairs",
      "Granite countertops",
      "Stainless steel appliances",
      "Central air and heat",
      "Security system",
    ],
    amenities: ["Business Center", "Conference Rooms", "Fitness Facility", "Concierge Service"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Townhouse+Exterior",
      "/placeholder.svg?height=600&width=800&text=Living+Room",
      "/placeholder.svg?height=600&width=800&text=Kitchen",
      "/placeholder.svg?height=600&width=800&text=Master+Bedroom",
      "/placeholder.svg?height=600&width=800&text=Patio",
      "/placeholder.svg?height=600&width=800&text=Garage",
    ],
    agent: {
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@eureka-realestate.com",
      image: "/placeholder.svg?height=200&width=200&text=Sarah+Johnson",
    },
    dateAdded: "2024-01-08",
    status: "Available",
    propertyId: "ERE-004",
    mls: "MLS456789",
  },
  {
    id: 5,
    title: "Mountain Cabin Retreat",
    price: 680000,
    priceDisplay: "$680,000",
    type: "For Sale",
    category: "sale",
    location: "Mountain View",
    fullAddress: "555 Pine Ridge Road, Mountain View, City, State 12345",
    propertyType: "cabin",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    areaDisplay: "1,600 sq ft",
    yearBuilt: 2017,
    lotSize: "2 acres",
    parking: "Detached Garage",
    description:
      "Escape to this beautiful mountain cabin retreat surrounded by nature. This rustic yet modern home features a stone fireplace, wraparound deck, and stunning mountain views. Perfect for a vacation home or year-round living for nature lovers.",
    features: [
      "Stone fireplace",
      "Wraparound deck",
      "Mountain views",
      "Rustic wood beams",
      "Modern kitchen",
      "Master loft",
      "Hot tub",
      "Fire pit area",
      "Hiking trails access",
      "Wildlife viewing",
    ],
    amenities: ["Hiking Trails", "Lake Access", "Ski Resort Nearby", "National Park Access"],
    images: [
      "/placeholder.svg?height=600&width=800&text=Cabin+Exterior",
      "/placeholder.svg?height=600&width=800&text=Living+Room+Fireplace",
      "/placeholder.svg?height=600&width=800&text=Kitchen",
      "/placeholder.svg?height=600&width=800&text=Master+Loft",
      "/placeholder.svg?height=600&width=800&text=Deck+View",
      "/placeholder.svg?height=600&width=800&text=Mountain+Views",
    ],
    agent: {
      name: "Michael Chen",
      title: "Property Specialist",
      phone: "+1 (555) 234-5678",
      email: "michael.chen@eureka-realestate.com",
      image: "/placeholder.svg?height=200&width=200&text=Michael+Chen",
    },
    dateAdded: "2024-01-03",
    status: "Available",
    propertyId: "ERE-005",
    mls: "MLS567890",
  },
]

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const propertyId = Number.parseInt(params.id)
  const property = properties.find((p) => p.id === propertyId)

  if (!property) {
    notFound()
  }

  return <PropertyDetailClient property={property} />
}

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }))
}

export function generateMetadata({ params }: PropertyPageProps) {
  const propertyId = Number.parseInt(params.id)
  const property = properties.find((p) => p.id === propertyId)

  if (!property) {
    return {
      title: "Property Not Found",
    }
  }

  return {
    title: `${property.title} - ${property.priceDisplay} | Eureka Real Estate`,
    description: property.description,
  }
}
