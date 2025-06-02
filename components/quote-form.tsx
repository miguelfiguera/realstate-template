"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    budget: "",
    timeframe: "",
    message: "",
    contactPreference: "email",
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your quote request has been submitted successfully. One of our remodeling experts will contact you within 24
          hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="hover:bg-eureka-red hover:text-white"
        >
          Submit Another Request
        </Button>
      </div>
    )
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
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="address">Property Address</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="projectType">Project Type *</Label>
        <Select
          value={formData.projectType}
          onValueChange={(value) => setFormData({ ...formData, projectType: value })}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
            <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
            <SelectItem value="wholehome">Whole Home Renovation</SelectItem>
            <SelectItem value="addition">Room Addition</SelectItem>
            <SelectItem value="basement">Basement Finishing</SelectItem>
            <SelectItem value="outdoor">Outdoor Living Space</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="budget">Estimated Budget</Label>
          <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under15k">Under $15,000</SelectItem>
              <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
              <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="over100k">Over $100,000</SelectItem>
              <SelectItem value="unsure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="timeframe">Desired Timeframe</Label>
          <Select value={formData.timeframe} onValueChange={(value) => setFormData({ ...formData, timeframe: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">As soon as possible</SelectItem>
              <SelectItem value="1-3months">1-3 months</SelectItem>
              <SelectItem value="3-6months">3-6 months</SelectItem>
              <SelectItem value="6-12months">6-12 months</SelectItem>
              <SelectItem value="planning">Just planning</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Project Details</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Please describe your project and any specific requirements or questions you have."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div>
        <Label>Preferred Contact Method</Label>
        <div className="flex space-x-4 mt-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="email-contact"
              name="contactPreference"
              value="email"
              checked={formData.contactPreference === "email"}
              onChange={() => setFormData({ ...formData, contactPreference: "email" })}
              className="mr-2"
            />
            <Label htmlFor="email-contact" className="text-sm font-normal">
              Email
            </Label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="phone-contact"
              name="contactPreference"
              value="phone"
              checked={formData.contactPreference === "phone"}
              onChange={() => setFormData({ ...formData, contactPreference: "phone" })}
              className="mr-2"
            />
            <Label htmlFor="phone-contact" className="text-sm font-normal">
              Phone
            </Label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="either-contact"
              name="contactPreference"
              value="either"
              checked={formData.contactPreference === "either"}
              onChange={() => setFormData({ ...formData, contactPreference: "either" })}
              className="mr-2"
            />
            <Label htmlFor="either-contact" className="text-sm font-normal">
              Either
            </Label>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.agreeToTerms}
          onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
          required
        />
        <Label htmlFor="terms" className="text-sm">
          I agree to the{" "}
          <a href="/terms" className="text-eureka-red hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-eureka-red hover:underline">
            Privacy Policy
          </a>
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-eureka-red hover:bg-red-700"
        disabled={isSubmitting || !formData.agreeToTerms}
      >
        {isSubmitting ? "Submitting..." : "Request Free Quote"}
      </Button>
    </form>
  )
}
