'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CreditCard, Building2, Smartphone, Copy } from 'lucide-react'
import { toast } from "sonner";

export function Donation() {
  const bankDetails = {
    bankName: "Al-Haq Islamic Bank",
    accountTitle: "Al-Haq Khidmat Foundation",
    accountNumber: "0123456789012345",
    iban: "PK12ALHQ0123456789012345",
    swiftCode: "ALHQPKKA",
    branch: "Main Branch, Karachi"
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <section id="donation" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Our Cause</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous donations help us continue our mission of serving humanity. 
            Every contribution, no matter the size, makes a meaningful difference in someone's life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Make a Donation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="amount">Donation Amount (PKR)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  className="text-lg"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Button variant="outline" className="text-sm">PKR 1,000</Button>
                <Button variant="outline" className="text-sm">PKR 5,000</Button>
                <Button variant="outline" className="text-sm">PKR 10,000</Button>
                <Button variant="outline" className="text-sm">PKR 25,000</Button>
              </div>

              <div>
                <Label htmlFor="donor-name">Full Name</Label>
                <Input id="donor-name" placeholder="Your full name" />
              </div>

              <div>
                <Label htmlFor="donor-email">Email Address</Label>
                <Input id="donor-email" type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <Label htmlFor="donor-phone">Phone Number</Label>
                <Input id="donor-phone" placeholder="+92 300 1234567" />
              </div>

              <div>
                <Label htmlFor="donation-purpose">Donation Purpose (Optional)</Label>
                <Textarea
                  id="donation-purpose"
                  placeholder="Specify how you'd like your donation to be used..."
                  rows={3}
                />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
              onClick={() => toast.info("This payment option is under construction.")} >
                <CreditCard className="mr-2 h-5 w-5" />
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>

          {/* Bank Details */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Building2 className="mr-2 h-6 w-6 text-green-600" />
                  Bank Transfer Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="text-sm text-gray-600">Bank Name</p>
                      <p className="font-semibold">{bankDetails.bankName}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="text-sm text-gray-600">Account Title</p>
                      <p className="font-semibold">{bankDetails.accountTitle}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="text-sm text-gray-600">Account Number</p>
                      <p className="font-semibold font-mono">{bankDetails.accountNumber}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(bankDetails.accountNumber)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="text-sm text-gray-600">IBAN</p>
                      <p className="font-semibold font-mono">{bankDetails.iban}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(bankDetails.iban)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="text-sm text-gray-600">SWIFT Code</p>
                      <p className="font-semibold">{bankDetails.swiftCode}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="text-sm text-gray-600">Branch</p>
                      <p className="font-semibold">{bankDetails.branch}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Smartphone className="mr-2 h-5 w-5 text-green-600" />
                  Mobile Banking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-semibold">JazzCash</p>
                      <p className="text-sm text-gray-600">03XX-XXXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-semibold">EasyPaisa</p>
                      <p className="text-sm text-gray-600">03XX-XXXXXXX</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-green-100 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Important Note</h4>
              <p className="text-sm text-green-700">
                After making a bank transfer, please send us the transaction receipt via WhatsApp 
                or email for confirmation and to receive your donation receipt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
