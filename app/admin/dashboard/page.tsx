"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, DollarSign, Users, TrendingUp, Search, Edit, Trash2, Eye, Plus } from "lucide-react"

const mockProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: "$450,000",
    status: "for-sale",
    location: "Downtown District",
    type: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    dateAdded: "2024-01-15",
    agent: "Sarah Johnson",
  },
  {
    id: 2,
    title: "Luxury Family Home",
    price: "$2,800/month",
    status: "for-rent",
    location: "Suburban Heights",
    type: "house",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sq ft",
    dateAdded: "2024-01-10",
    agent: "Michael Chen",
  },
  {
    id: 3,
    title: "Executive Townhouse",
    price: "$3,500/month",
    status: "rent-to-own",
    location: "Business District",
    type: "townhouse",
    bedrooms: 3,
    bathrooms: 2.5,
    area: "1,800 sq ft",
    dateAdded: "2024-01-08",
    agent: "Emily Rodriguez",
  },
  {
    id: 4,
    title: "Cozy Studio Loft",
    price: "$320,000",
    status: "for-sale",
    location: "Arts Quarter",
    type: "apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: "800 sq ft",
    dateAdded: "2024-01-05",
    agent: "Sarah Johnson",
  },
  {
    id: 5,
    title: "Mountain Cabin Retreat",
    price: "$4,200/month",
    status: "for-rent",
    location: "Mountain View",
    type: "cabin",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,600 sq ft",
    dateAdded: "2024-01-03",
    agent: "Michael Chen",
  },
]

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "for-sale":
        return <Badge className="bg-eureka-red">For Sale</Badge>
      case "for-rent":
        return <Badge className="bg-blue-600">For Rent</Badge>
      case "rent-to-own":
        return <Badge className="bg-green-600">Rent to Own</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const filterProperties = (status: string) => {
    let filtered = mockProperties

    if (status !== "all") {
      filtered = filtered.filter((property) => property.status === status)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return filtered
  }

  const getTabProperties = (tab: string) => {
    switch (tab) {
      case "for-sale":
        return filterProperties("for-sale")
      case "for-rent":
        return filterProperties("for-rent")
      case "rent-to-own":
        return filterProperties("rent-to-own")
      default:
        return filterProperties("all")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-eureka-black mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your properties and monitor performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockProperties.length}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">For Sale</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockProperties.filter((p) => p.status === "for-sale").length}</div>
              <p className="text-xs text-muted-foreground">Active listings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">For Rent</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockProperties.filter((p) => p.status === "for-rent").length}</div>
              <p className="text-xs text-muted-foreground">Available rentals</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rent to Own</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockProperties.filter((p) => p.status === "rent-to-own").length}
              </div>
              <p className="text-xs text-muted-foreground">Special offers</p>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Button className="bg-eureka-red hover:bg-red-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Property
          </Button>
        </div>

        {/* Properties Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Properties</TabsTrigger>
            <TabsTrigger value="for-sale">For Sale</TabsTrigger>
            <TabsTrigger value="for-rent">For Rent</TabsTrigger>
            <TabsTrigger value="rent-to-own">Rent to Own</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <PropertyTable properties={getTabProperties("all")} />
          </TabsContent>

          <TabsContent value="for-sale" className="mt-6">
            <PropertyTable properties={getTabProperties("for-sale")} />
          </TabsContent>

          <TabsContent value="for-rent" className="mt-6">
            <PropertyTable properties={getTabProperties("for-rent")} />
          </TabsContent>

          <TabsContent value="rent-to-own" className="mt-6">
            <PropertyTable properties={getTabProperties("rent-to-own")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )

  function PropertyTable({ properties }: { properties: typeof mockProperties }) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Properties</CardTitle>
          <CardDescription>Manage your property listings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Property</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Price</th>
                  <th className="text-left p-4 font-medium">Details</th>
                  <th className="text-left p-4 font-medium">Agent</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{property.title}</div>
                        <div className="text-sm text-gray-600">{property.location}</div>
                      </div>
                    </td>
                    <td className="p-4">{getStatusBadge(property.status)}</td>
                    <td className="p-4 font-medium">{property.price}</td>
                    <td className="p-4">
                      <div className="text-sm">
                        <div>
                          {property.bedrooms} bed, {property.bathrooms} bath
                        </div>
                        <div className="text-gray-600">{property.area}</div>
                      </div>
                    </td>
                    <td className="p-4 text-sm">{property.agent}</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    )
  }
}
