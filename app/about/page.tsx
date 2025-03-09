import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Bitcoin, EclipseIcon as Ethereum, Shield, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">About CryptoLearn</h1>
          <p className="text-xl text-gray-400 mb-8">
            The premier marketplace for blockchain and cryptocurrency education
          </p>
          <p className="text-gray-300 mb-8">
            CryptoLearn is dedicated to providing high-quality educational content in the rapidly evolving world of
            blockchain technology, cryptocurrencies, and decentralized finance. Our platform connects learners with
            expert instructors who are passionate about sharing their knowledge and experience.
          </p>
          <Button asChild size="lg">
            <Link href="/">Explore Courses</Link>
          </Button>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose CryptoLearn?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Trusted Content</h3>
              <p className="text-gray-400">
                All courses are vetted by industry experts to ensure accuracy and quality.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Learn at Your Pace</h3>
              <p className="text-gray-400">Access course content anytime, anywhere, and learn at your own speed.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Ethereum className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Crypto Payments</h3>
              <p className="text-gray-400">Seamlessly pay for courses using your preferred cryptocurrency.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Bitcoin className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Blockchain Certified</h3>
              <p className="text-gray-400">Receive blockchain-verified certificates upon course completion.</p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Our Mission</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <p className="text-gray-300 mb-4">
              At CryptoLearn, our mission is to democratize access to blockchain education and empower individuals to
              participate in the decentralized economy. We believe that knowledge is the key to responsible adoption and
              innovation in the blockchain space.
            </p>
            <p className="text-gray-300">
              By providing accessible, high-quality educational resources, we aim to bridge the knowledge gap and foster
              a community of informed participants who can contribute to the growth and development of blockchain
              technology and its applications.
            </p>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Join Our Community</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with like-minded learners, share insights, and stay updated on the latest developments in the
            blockchain space.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline">Discord</Button>
            <Button variant="outline">Twitter</Button>
            <Button variant="outline">Telegram</Button>
          </div>
        </section>
      </main>
    </div>
  )
}

