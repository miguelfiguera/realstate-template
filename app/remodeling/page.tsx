import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { QuoteForm } from "@/components/quote-form"
import {
  ArrowRight,
  CheckCircle,
  Star,
  PenToolIcon as Tool,
  Paintbrush,
  Ruler,
  Home,
  Hammer,
  Clock,
  DollarSign,
} from "lucide-react"

const remodelingServices = [
  {
    id: 1,
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into a modern, functional space with custom cabinets, premium countertops, and energy-efficient appliances.",
    icon: <Paintbrush className="h-8 w-8 text-white" />,
    features: [
      "Custom cabinet design and installation",
      "Premium countertop options (granite, quartz, marble)",
      "Energy-efficient appliance upgrades",
      "Modern lighting solutions",
      "Flooring replacement and upgrades",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Kitchen+Remodeling",
  },
  {
    id: 2,
    title: "Bathroom Renovation",
    description:
      "Create a luxurious bathroom retreat with high-end fixtures, custom tile work, and modern vanities that maximize both style and functionality.",
    icon: <Tool className="h-8 w-8 text-white" />,
    features: [
      "Custom shower and tub installations",
      "Luxury fixture upgrades",
      "Custom tile work and stonework",
      "Modern vanity and storage solutions",
      "Water-efficient toilet and faucet options",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Bathroom+Renovation",
  },
  {
    id: 3,
    title: "Whole Home Renovation",
    description:
      "Completely transform your living space with comprehensive renovations that modernize your home while increasing its value and functionality.",
    icon: <Home className="h-8 w-8 text-white" />,
    features: [
      "Open concept layout transformations",
      "Complete flooring replacement",
      "Interior and exterior painting",
      "Lighting and electrical upgrades",
      "Window and door replacements",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Whole+Home+Renovation",
  },
  {
    id: 4,
    title: "Room Additions",
    description:
      "Expand your living space with custom room additions that seamlessly integrate with your existing home, adding both value and functionality.",
    icon: <Ruler className="h-8 w-8 text-white" />,
    features: [
      "Master suite additions",
      "Family room expansions",
      "Home office additions",
      "Sunroom and enclosed porch designs",
      "Second story additions",
    ],
    image: "/placeholder.svg?height=400&width=600&text=Room+Additions",
  },
]

const beforeAfterProjects = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    description: "Complete kitchen renovation with custom cabinets, quartz countertops, and new appliances.",
    beforeImage: "/placeholder.svg?height=500&width=700&text=Kitchen+Before",
    afterImage: "/placeholder.svg?height=500&width=700&text=Kitchen+After",
    cost: "$45,000",
    duration: "6 weeks",
  },
  {
    id: 2,
    title: "Luxury Master Bathroom",
    description: "Master bathroom upgrade with walk-in shower, freestanding tub, and custom tile work.",
    beforeImage: "/placeholder.svg?height=500&width=700&text=Bathroom+Before",
    afterImage: "/placeholder.svg?height=500&width=700&text=Bathroom+After",
    cost: "$32,000",
    duration: "4 weeks",
  },
  {
    id: 3,
    title: "Open Concept Living Space",
    description: "Wall removal and complete renovation to create a modern open concept living area.",
    beforeImage: "/placeholder.svg?height=500&width=700&text=Living+Room+Before",
    afterImage: "/placeholder.svg?height=500&width=700&text=Living+Room+After",
    cost: "$55,000",
    duration: "8 weeks",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Jennifer & David Thompson",
    location: "Downtown District",
    quote:
      "Eureka completely transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of work exceeded our expectations. We couldn't be happier with the results!",
    rating: 5,
    project: "Kitchen Remodeling",
    image: "/placeholder.svg?height=100&width=100&text=Jennifer",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Suburban Heights",
    quote:
      "The bathroom renovation was completed on time and within budget. The team was professional, clean, and respectful of our home. The final result is absolutely stunning!",
    rating: 5,
    project: "Bathroom Renovation",
    image: "/placeholder.svg?height=100&width=100&text=Michael",
  },
  {
    id: 3,
    name: "Sarah & James Wilson",
    location: "Arts Quarter",
    quote:
      "Our whole home renovation was a massive undertaking, but Eureka made the process smooth and stress-free. They transformed our outdated house into a modern dream home.",
    rating: 5,
    project: "Whole Home Renovation",
    image: "/placeholder.svg?height=100&width=100&text=Sarah",
  },
]

export default function RemodelingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-eureka-black to-gray-900 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('/placeholder.svg?height=1080&width=1920&text=Remodeling')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-eureka-black/90 to-eureka-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your
              <span className="text-eureka-red"> Space</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Expert remodeling services to increase your home's value and create the living space of your dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-eureka-red hover:bg-red-700 text-white">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-eureka-black"
              >
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-eureka-black mb-4">
              Our Remodeling <span className="text-eureka-red">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From kitchen and bathroom renovations to whole home transformations, we offer comprehensive remodeling
              services tailored to your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {remodelingServices.map((service, index) => (
              <Card
                key={service.id}
                className="overflow-hidden hover-lift border-0 shadow-lg animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="w-12 h-12 gradient-red rounded-full flex items-center justify-center mb-2">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-eureka-red mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="mt-4 p-0 text-eureka-red hover:text-red-700 flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-eureka-black mb-4">
              Why Choose <span className="text-eureka-red">Eureka</span> Remodeling
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team delivers exceptional quality, transparent pricing, and personalized service for every
              remodeling project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover-lift animate-fadeInLeft">
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Expert Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Our team of skilled professionals brings years of experience and attention to detail to every project,
                  ensuring exceptional quality and lasting results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover-lift animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We provide detailed, upfront estimates with no hidden costs. Our transparent approach ensures you know
                  exactly what to expect throughout your project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover-lift animate-fadeInRight" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">On-Time Completion</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  We understand the importance of timelines. Our efficient project management ensures your remodeling
                  project is completed on schedule without sacrificing quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-eureka-black mb-4">
              Before & <span className="text-eureka-red">After</span> Transformations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the dramatic difference our remodeling services can make with these stunning before and after
              projects.
            </p>
          </div>

          <Tabs defaultValue="project1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="project1">Kitchen Transformation</TabsTrigger>
              <TabsTrigger value="project2">Bathroom Renovation</TabsTrigger>
              <TabsTrigger value="project3">Open Concept Living</TabsTrigger>
            </TabsList>
            {beforeAfterProjects.map((project, index) => (
              <TabsContent key={project.id} value={`project${project.id}`} className="animate-fadeInUp">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={project.afterImage}
                      beforeLabel="Before"
                      afterLabel="After"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-eureka-black">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <DollarSign className="h-5 w-5 text-eureka-red mr-2" />
                          <span className="font-semibold">Project Cost</span>
                        </div>
                        <p className="text-lg font-bold">{project.cost}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Clock className="h-5 w-5 text-eureka-red mr-2" />
                          <span className="font-semibold">Timeline</span>
                        </div>
                        <p className="text-lg font-bold">{project.duration}</p>
                      </div>
                    </div>
                    <Button className="bg-eureka-red hover:bg-red-700">View More Details</Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-eureka-black mb-4">
              What Our <span className="text-eureka-red">Clients</span> Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from homeowners who have experienced our remodeling services
              firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="border-0 shadow-lg hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <Badge className="bg-eureka-red">{testimonial.project}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-eureka-black mb-4">
              Remodeling <span className="text-eureka-red">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our popular remodeling packages or request a custom quote tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover-lift animate-fadeInLeft">
              <div className="h-2 bg-blue-500 rounded-t-lg"></div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Essential Package</CardTitle>
                <div className="text-3xl font-bold mt-2">
                  Starting at <span className="text-eureka-red">$15,000</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Basic kitchen or bathroom update</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Cabinet refacing or refinishing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>New countertops installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Fixture replacements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Fresh paint and basic lighting</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-500 hover:bg-blue-600">Get Started</Button>
              </CardContent>
            </Card>

            <Card
              className="border-0 shadow-xl hover-lift scale-105 relative animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-2 bg-eureka-red rounded-t-lg"></div>
              <Badge className="absolute top-4 right-4 bg-eureka-red">Most Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium Package</CardTitle>
                <div className="text-3xl font-bold mt-2">
                  Starting at <span className="text-eureka-red">$35,000</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Complete kitchen or bathroom renovation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Custom cabinetry and premium countertops</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>New flooring throughout</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>High-end fixtures and appliances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Custom lighting design</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-eureka-red hover:bg-red-700">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover-lift animate-fadeInRight" style={{ animationDelay: "0.4s" }}>
              <div className="h-2 bg-purple-600 rounded-t-lg"></div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Luxury Package</CardTitle>
                <div className="text-3xl font-bold mt-2">
                  Starting at <span className="text-eureka-red">$60,000</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Whole home renovation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Architectural changes and open concept</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Luxury materials and finishes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Smart home integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Custom features and built-ins</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Request */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-eureka-black mb-6">
                Ready to <span className="text-eureka-red">Transform</span> Your Home?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out our quick quote form to get started on your remodeling project. Our team will contact you
                within 24 hours to discuss your needs and schedule a free consultation.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-eureka-red mr-3" />
                  <span className="font-medium">Free, no-obligation consultations</span>
                </div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-eureka-red mr-3" />
                  <span className="font-medium">Detailed project estimates</span>
                </div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-eureka-red mr-3" />
                  <span className="font-medium">Flexible financing options available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-eureka-red mr-3" />
                  <span className="font-medium">5-year workmanship warranty</span>
                </div>
              </div>
              <div className="flex items-center">
                <img src="/placeholder.svg?height=60&width=120&text=BBB+A+" alt="BBB A+ Rating" className="h-12 mr-6" />
                <img
                  src="/placeholder.svg?height=60&width=120&text=Licensed"
                  alt="Licensed Contractor"
                  className="h-12 mr-6"
                />
                <img src="/placeholder.svg?height=60&width=120&text=Insured" alt="Fully Insured" className="h-12" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 animate-fadeInRight">
              <h3 className="text-2xl font-bold text-eureka-black mb-6">Request a Free Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeInUp">
            Ready to Start Your <span className="text-eureka-red">Remodeling Project</span>?
          </h2>
          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Contact us today to schedule your free consultation and take the first step toward your dream home.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="bg-eureka-red hover:bg-red-700">
              Schedule Consultation
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-eureka-black"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
