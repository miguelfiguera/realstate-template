import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Home, Users, AlertCircle } from "lucide-react"

export default function RequirementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-eureka-black mb-6">
            Sale <span className="text-eureka-red">Requirements</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the documentation and requirements for a successful property sale.
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-12 border-l-4 border-l-eureka-red">
          <CardHeader>
            <CardTitle className="flex items-center text-eureka-black">
              <AlertCircle className="h-6 w-6 mr-2 text-eureka-red" />
              Important Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              To ensure a smooth and legal property transaction, all parties must provide the required documentation.
              Please prepare these documents in advance to expedite the sale process. Our team will guide you through
              each step and verify all requirements are met.
            </p>
          </CardContent>
        </Card>

        {/* For Sellers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-eureka-black mb-8 flex items-center">
            <Home className="h-8 w-8 mr-3 text-eureka-red" />
            For Sellers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Property Documentation</CardTitle>
                <Badge className="w-fit bg-eureka-red">Required</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Original property deed or title certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Property tax records (last 3 years)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Property survey and boundary documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building permits and inspection certificates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Homeowners association documents (if applicable)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Personal Identification</CardTitle>
                <Badge className="w-fit bg-eureka-red">Required</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Government-issued photo ID (driver's license or passport)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Social Security card or tax identification number</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proof of current address (utility bill or bank statement)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Power of attorney (if selling on behalf of someone else)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Financial Records</CardTitle>
                <Badge className="w-fit bg-eureka-red">Required</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mortgage payoff statement (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Property insurance policy information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Utility bills and service transfer information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Bank account information for proceeds transfer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Disclosure Documents</CardTitle>
                <Badge className="w-fit bg-blue-600">Recommended</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Property condition disclosure statement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lead paint disclosure (for homes built before 1978)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Environmental hazard disclosures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Home warranty information (if applicable)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* For Buyers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-eureka-black mb-8 flex items-center">
            <Users className="h-8 w-8 mr-3 text-eureka-red" />
            For Buyers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Financial Documentation</CardTitle>
                <Badge className="w-fit bg-eureka-red">Required</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pre-approval letter from mortgage lender</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Bank statements (last 3 months)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Employment verification letter</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tax returns (last 2 years)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proof of down payment funds</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Personal Identification</CardTitle>
                <Badge className="w-fit bg-eureka-red">Required</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Government-issued photo ID</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Social Security card</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proof of current address</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Marriage certificate (if buying jointly)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Insurance & Inspections</CardTitle>
                <Badge className="w-fit bg-eureka-red">Required</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Homeowner's insurance policy quote</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional home inspection report</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Appraisal report (arranged by lender)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Title insurance policy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Additional Requirements</CardTitle>
                <Badge className="w-fit bg-blue-600">Conditional</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gift letter (if down payment is a gift)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Divorce decree (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Bankruptcy discharge papers (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Immigration documents (for non-citizens)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-eureka-black mb-8 flex items-center">
            <FileText className="h-8 w-8 mr-3 text-eureka-red" />
            Sale Process Timeline
          </h2>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-eureka-red rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Document Preparation (1-2 weeks)</h3>
                    <p className="text-gray-600">Gather all required documents and complete property disclosures.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-eureka-red rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Property Listing & Marketing (1-4 weeks)</h3>
                    <p className="text-gray-600">
                      Professional photography, listing creation, and marketing campaign launch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-eureka-red rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Offer Review & Negotiation (1-2 weeks)</h3>
                    <p className="text-gray-600">Review offers, negotiate terms, and accept the best proposal.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-eureka-red rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Due Diligence Period (2-3 weeks)</h3>
                    <p className="text-gray-600">Buyer inspections, appraisal, and final loan approval.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-eureka-red rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Closing Preparation (1 week)</h3>
                    <p className="text-gray-600">Final document review, title search, and closing coordination.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Closing Day</h3>
                    <p className="text-gray-600">Final walkthrough, document signing, and key transfer.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="bg-eureka-black text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help with Documentation?</h2>
            <p className="text-gray-300 mb-6">
              Our experienced team is here to guide you through every step of the process. Contact us for personalized
              assistance with your sale requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center">
                <span className="text-eureka-red mr-2">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-eureka-red mr-2">✉️</span>
                <span>sales@eureka-realestate.com</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
