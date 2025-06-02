import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PropertySlider } from "@/components/property-slider"
import { AnimatedCounter } from "@/components/animated-counter"
import Link from "next/link"
import { ArrowRight, Star, Shield, Award, Users } from "lucide-react"

const featuredProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: "$450,000",
    type: "For Sale",
    location: "Downtown District",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Family Home",
    price: "$2,800/month",
    type: "For Rent",
    location: "Suburban Heights",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 3,
    title: "Cozy Studio Loft",
    price: "$320,000",
    type: "For Sale",
    location: "Arts Quarter",
    bedrooms: 1,
    bathrooms: 1,
    area: "800 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 4,
    title: "Executive Townhouse",
    price: "$3,500/month",
    type: "Rent to Own",
    location: "Business District",
    bedrooms: 3,
    bathrooms: 2.5,
    area: "1,800 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 5,
    title: "Mountain Cabin Retreat",
    price: "$680,000",
    type: "For Sale",
    location: "Mountain View",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,600 sq ft",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-eureka-black/80 via-eureka-black/60 to-transparent" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-eureka-red/10 rounded-full blur-3xl animate-pulse-slow" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-eureka-red/5 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Find Your Perfect
              <span className="text-eureka-red block animate-fadeInRight" style={{ animationDelay: "0.3s" }}>
                Dream Home
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              Discover exceptional properties with Eureka Real Estate. Your journey to the perfect home starts here.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp"
              style={{ animationDelay: "0.9s" }}
            >
              <Link href="/properties">
                <Button
                  size="lg"
                  className="gradient-red hover:scale-105 transition-all duration-300 text-white shadow-2xl px-8 py-4 text-lg"
                >
                  Browse Properties
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce-slow" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-white text-white hover:bg-white hover:text-eureka-black transition-all duration-300 px-8 py-4 text-lg hover:scale-105"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-eureka-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-eureka-red/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeInUp">
              <div className="text-4xl md:text-5xl font-bold text-eureka-red mb-2">
                <AnimatedCounter end={2500} suffix="+" />
              </div>
              <p className="text-gray-300">Properties Sold</p>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-eureka-red mb-2">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl md:text-5xl font-bold text-eureka-red mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl md:text-5xl font-bold text-eureka-red mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Slider */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-eureka-black to-transparent opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-eureka-black mb-6">
              Featured <span className="text-eureka-red">Properties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after properties, carefully selected for their exceptional value and prime
              locations
            </p>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <PropertySlider properties={featuredProperties} />
          </div>

          <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <Link href="/properties">
              <Button
                size="lg"
                variant="outline"
                className="border-eureka-red text-eureka-red hover:bg-eureka-red hover:text-white transition-all duration-300 hover:scale-105 px-8 py-4 text-lg shadow-lg"
              >
                View All Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-eureka-black mb-6">
              Our <span className="text-eureka-red">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to meet all your property needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover-lift border-0 shadow-lg animate-fadeInLeft">
              <CardContent className="pt-6">
                <div className="w-20 h-20 gradient-red rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-eureka-black">Property Sales</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert guidance through the entire buying and selling process with personalized attention to your
                  needs
                </p>
              </CardContent>
            </Card>

            <Card
              className="text-center p-8 hover-lift border-0 shadow-lg animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="pt-6">
                <div className="w-20 h-20 gradient-red rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-eureka-black">Property Rentals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Find the perfect rental property or reliable tenant for your investment with our comprehensive
                  screening
                </p>
              </CardContent>
            </Card>

            <Card
              className="text-center p-8 hover-lift border-0 shadow-lg animate-fadeInRight"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="pt-6">
                <div className="w-20 h-20 gradient-red rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-eureka-black">Property Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Full-service property management for hassle-free ownership and maximum return on investment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-eureka-red/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your <span className="text-eureka-red">Perfect Home?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who found their dream properties with Eureka Real Estate
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-eureka-red hover:bg-red-700 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Get Started Today
                </Button>
              </Link>
              <Link href="/properties">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-eureka-black transition-all duration-300 hover:scale-105 px-8 py-4 text-lg"
                >
                  Browse Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
