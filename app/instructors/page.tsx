import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InstructorsPage() {
  const instructors = [
    {
      name: "Alex Morgan",
      specialty: "Blockchain Technology",
      courses: 5,
      students: 1245,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sarah Chen",
      specialty: "Smart Contract Development",
      courses: 3,
      students: 892,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Michael Johnson",
      specialty: "Cryptocurrency Trading",
      courses: 4,
      students: 1578,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Emma Wilson",
      specialty: "Decentralized Finance",
      courses: 2,
      students: 763,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "David Kim",
      specialty: "NFT Creation",
      courses: 3,
      students: 1105,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "James Rodriguez",
      specialty: "Web3 Development",
      courses: 4,
      students: 642,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-white">Our Instructors</h1>
        <p className="text-gray-400 mb-8">Learn from industry experts with years of experience</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-800">
                    <Image
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{instructor.name}</h3>
                  <p className="text-blue-400 mb-3">{instructor.specialty}</p>
                  <div className="flex justify-center gap-4 text-sm text-gray-400 mb-4">
                    <div>{instructor.courses} Courses</div>
                    <div>{instructor.students.toLocaleString()} Students</div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/">View Courses</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

