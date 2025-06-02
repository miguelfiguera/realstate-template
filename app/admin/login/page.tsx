"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Eye, EyeOff, Shield } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle admin login logic here
    console.log("Admin login attempt:", formData)
    // Redirect to admin dashboard on successful login
    router.push("/admin/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-eureka-black to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Building className="h-12 w-12 text-eureka-red" />
            <span className="text-3xl font-bold text-white">EUREKA</span>
          </div>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-eureka-red" />
            <h2 className="text-3xl font-bold text-white">Admin Portal</h2>
          </div>
          <p className="mt-2 text-gray-300">Secure access for authorized personnel only</p>
        </div>

        {/* Admin Login Form */}
        <Card className="border-eureka-red">
          <CardHeader>
            <CardTitle className="text-eureka-red">Administrator Login</CardTitle>
            <CardDescription>Enter your admin credentials to access the dashboard</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@eureka-realestate.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter admin password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full bg-eureka-red hover:bg-red-700">
                Access Dashboard
              </Button>

              <div className="text-center text-sm text-gray-600">
                <Link href="/login" className="text-eureka-red hover:underline">
                  ← Back to User Login
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>

        {/* Security Notice */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-start space-x-2">
              <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-yellow-800">Security Notice</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  This is a restricted area. All access attempts are logged and monitored. Unauthorized access is
                  prohibited.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
