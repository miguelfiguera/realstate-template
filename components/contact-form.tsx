"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Property {
  id: number
  title: string
  propertyId: string
}

interface ContactFormProps {
  property: Property
}

export function ContactForm({ property }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: `I'm interested in ${property.title} (ID: ${property.propertyId}). Please contact me with more information.`,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you soon.")

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="inquiryType">Inquiry Type</Label>
          <Select
            value={formData.inquiryType}
            onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="viewing">Schedule Viewing</SelectItem>
              <SelectItem value="info">Request Information</SelectItem>
              <SelectItem value="financing">Financing Options</SelectItem>
              <SelectItem value="offer">Make an Offer</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>

      <Button type="submit" className="w-full bg-eureka-red hover:bg-red-700" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
