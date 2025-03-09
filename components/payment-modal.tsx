"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Course } from "@/lib/types"
import { Bitcoin, EclipseIcon as Ethereum, CheckCircle2, Loader2 } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  course: Course
}

export function PaymentModal({ isOpen, onClose, course }: PaymentModalProps) {
  const [step, setStep] = useState(1)
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const handleCryptoSelect = (crypto: string) => {
    setSelectedCrypto(crypto)
  }

  const handleProceed = () => {
    if (step === 1 && selectedCrypto) {
      setStep(2)
    } else if (step === 2) {
      setIsProcessing(true)
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false)
        setStep(3)
      }, 2000)
    } else if (step === 3) {
      onClose()
      router.push("/")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800 text-gray-200">
        <DialogHeader>
          <DialogTitle className="text-white">
            {step === 1 && "Select Payment Method"}
            {step === 2 && "Complete Payment"}
            {step === 3 && "Payment Successful"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <span>Course:</span>
              <span className="font-medium text-white">{course.title}</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span>Total:</span>
              <span className="font-bold text-white">{course.price} ETH</span>
            </div>

            <div className="space-y-3">
              <div
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedCrypto === "ethereum"
                    ? "border-blue-500 bg-blue-900/20"
                    : "border-gray-700 hover:border-gray-600"
                }`}
                onClick={() => handleCryptoSelect("ethereum")}
              >
                <div className="flex items-center">
                  <Ethereum className="h-5 w-5 mr-3 text-blue-400" />
                  <div>
                    <div className="font-medium text-white">Ethereum</div>
                    <div className="text-sm text-gray-400">Pay with ETH</div>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedCrypto === "bitcoin"
                    ? "border-orange-500 bg-orange-900/20"
                    : "border-gray-700 hover:border-gray-600"
                }`}
                onClick={() => handleCryptoSelect("bitcoin")}
              >
                <div className="flex items-center">
                  <Bitcoin className="h-5 w-5 mr-3 text-orange-400" />
                  <div>
                    <div className="font-medium text-white">Bitcoin</div>
                    <div className="text-sm text-gray-400">Pay with BTC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 py-4">
            <div className="text-center mb-4">
              <div className="font-medium text-white mb-1">Send exactly</div>
              <div className="text-2xl font-bold text-white mb-2">
                {course.price} {selectedCrypto === "ethereum" ? "ETH" : "BTC"}
              </div>
              <div className="text-sm text-gray-400">to the address below</div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="wallet-address">Wallet Address</Label>
              <div className="relative">
                <Input
                  id="wallet-address"
                  value={
                    selectedCrypto === "ethereum"
                      ? "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t"
                      : "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                  }
                  readOnly
                  className="bg-gray-800 border-gray-700 pr-20"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1 h-7 text-blue-400 hover:text-blue-300 hover:bg-transparent"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      selectedCrypto === "ethereum"
                        ? "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t"
                        : "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
                    )
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>

            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <div className="text-sm text-gray-400 mb-2">QR Code</div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white p-2 rounded-lg">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Payment QR Code" width={200} height={200} />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="py-6 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Payment Successful!</h3>
            <p className="text-gray-400 mb-6">You now have access to "{course.title}"</p>
            <div className="bg-gray-800 p-4 rounded-lg text-left mb-4">
              <div className="text-sm text-gray-400 mb-1">Transaction ID</div>
              <div className="font-mono text-sm truncate">
                {selectedCrypto === "ethereum"
                  ? "0xf7c8d9e0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0"
                  : "7f8e9d0c1b2a3f4e5d6c7b8a9f0e1d2c3b4a5f6e7d8c9b0a1"}
              </div>
            </div>
          </div>
        )}

        <DialogFooter>
          {step !== 3 && (
            <Button variant="outline" onClick={onClose} className="mr-2">
              Cancel
            </Button>
          )}
          <Button onClick={handleProceed} disabled={step === 1 && !selectedCrypto}>
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing
              </>
            ) : (
              <>
                {step === 1 && "Continue"}
                {step === 2 && "I've Sent the Payment"}
                {step === 3 && "Go to Dashboard"}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

