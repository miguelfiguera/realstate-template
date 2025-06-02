"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Building, Info, FileText, LogIn, UserPlus, PenToolIcon as Tool } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-eureka-black/95 backdrop-blur-md shadow-2xl" : "bg-eureka-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Building className="h-8 w-8 text-eureka-red transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-eureka-red">
                EUREKA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center space-x-1 text-white hover:text-eureka-red transition-all duration-300 group"
            >
              <Home className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eureka-red transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              href="/properties"
              className="flex items-center space-x-1 text-white hover:text-eureka-red transition-all duration-300 group"
            >
              <Building className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative">
                Properties
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eureka-red transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              href="/remodeling"
              className="flex items-center space-x-1 text-white hover:text-eureka-red transition-all duration-300 group"
            >
              <Tool className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative">
                Remodeling
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eureka-red transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              href="/about"
              className="flex items-center space-x-1 text-white hover:text-eureka-red transition-all duration-300 group"
            >
              <Info className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eureka-red transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              href="/requirements"
              className="flex items-center space-x-1 text-white hover:text-eureka-red transition-all duration-300 group"
            >
              <FileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative">
                Requirements
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eureka-red transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-eureka-red text-eureka-red hover:bg-eureka-red hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="gradient-red hover:scale-105 transition-all duration-300 shadow-lg">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Register
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-eureka-red transition-colors duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`}
                />
                <X
                  className={`h-6 w-6 absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-eureka-black/95 backdrop-blur-md">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:text-eureka-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="block px-3 py-2 text-white hover:text-eureka-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link
              href="/remodeling"
              className="block px-3 py-2 text-white hover:text-eureka-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Remodeling
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:text-eureka-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/requirements"
              className="block px-3 py-2 text-white hover:text-eureka-red transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Requirements
            </Link>
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-eureka-red text-eureka-red hover:bg-eureka-red hover:text-white transition-all duration-300"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full gradient-red transition-all duration-300">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
