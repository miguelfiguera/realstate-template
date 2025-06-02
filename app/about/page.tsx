import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Home, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-eureka-black mb-6">
            About <span className="text-eureka-red">Eureka</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discovering exceptional real estate opportunities since 2010. We're more than just a real estate company –
            we're your partners in finding the perfect home.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-eureka-black mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2010 by a team of passionate real estate professionals, Eureka Real Estate began with a
                simple mission: to revolutionize the way people buy, sell, and rent properties. Our name "Eureka"
                represents that moment of discovery – the excitement of finding the perfect home.
              </p>
              <p>
                What started as a small local agency has grown into one of the most trusted real estate companies in the
                region. We've helped thousands of families find their dream homes, assisted investors in building their
                portfolios, and supported property owners in maximizing their returns.
              </p>
              <p>
                Our success is built on three core principles: integrity, expertise, and exceptional service. We believe
                that buying or selling a property is one of life's most important decisions, and we're committed to
                making that process as smooth and rewarding as possible.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Eureka Real Estate Office"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-eureka-red bg-opacity-10 rounded-lg"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-eureka-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-eureka-black mb-2">2,500+</h3>
              <p className="text-gray-600">Properties Sold</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-eureka-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-eureka-black mb-2">5,000+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-eureka-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-eureka-black mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-eureka-red rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-eureka-black mb-2">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-eureka-black mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional real estate services that exceed our clients' expectations. We strive to make
                every transaction smooth, transparent, and successful while building lasting relationships based on
                trust and integrity.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-eureka-black mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading real estate company in our region, known for innovation, excellence, and unwavering
                commitment to our clients. We envision a future where finding the perfect property is effortless and
                enjoyable.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-eureka-black text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-eureka-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and ethical practices in every interaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-eureka-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from customer service to market expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-eureka-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Commitment</h3>
              <p className="text-gray-600">
                We're committed to our clients' success and work tirelessly to achieve their goals.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-eureka-black mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mb-12">
            Our experienced professionals are here to guide you through every step of your real estate journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sarah Johnson"
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <Badge className="mb-2 bg-eureka-red">CEO & Founder</Badge>
                <p className="text-gray-600 text-sm">
                  15+ years of experience in real estate with a passion for helping families find their perfect home.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Michael Chen"
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
                <Badge className="mb-2 bg-eureka-red">Sales Director</Badge>
                <p className="text-gray-600 text-sm">
                  Expert in luxury properties and investment opportunities with a track record of exceptional results.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Emily Rodriguez"
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
                <Badge className="mb-2 bg-eureka-red">Property Manager</Badge>
                <p className="text-gray-600 text-sm">
                  Specializes in rental properties and property management with a focus on maximizing returns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
