import Link from "next/link"
import { Building, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-eureka-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-8 w-8 text-eureka-red" />
              <span className="text-2xl font-bold">EUREKA</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in real estate. We help you find the perfect property for your needs, whether you're
              buying, selling, or renting.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-eureka-red" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-eureka-red" />
                <span>info@eureka-realestate.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-eureka-red" />
                <span>123 Real Estate Ave, City, State 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-eureka-red">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-eureka-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-eureka-red transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-eureka-red transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/requirements" className="hover:text-eureka-red transition-colors">
                  Requirements
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-eureka-red">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-eureka-red transition-colors cursor-pointer">Property Sales</span>
              </li>
              <li>
                <span className="hover:text-eureka-red transition-colors cursor-pointer">Property Rentals</span>
              </li>
              <li>
                <span className="hover:text-eureka-red transition-colors cursor-pointer">Property Management</span>
              </li>
              <li>
                <span className="hover:text-eureka-red transition-colors cursor-pointer">Investment Consulting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 Eureka Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
