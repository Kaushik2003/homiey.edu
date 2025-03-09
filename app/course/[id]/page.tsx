"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Users, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SiteHeader } from "@/components/site-header"
import { courses } from "@/lib/data"
import type { Course } from "@/lib/types"
import { PaymentModal } from "@/components/payment-modal"

export default function CoursePage({ params }: { params: { id: string } }) {
  const [course, setCourse] = useState<Course | null>(null)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === params.id)
    if (foundCourse) {
      setCourse(foundCourse)
    }
  }, [params.id])

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-gray-200">
        <SiteHeader />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Return to courses
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to courses
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1>
            <p className="text-gray-400 mb-6">{course.description}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-1 text-gray-300">
                <Users className="h-4 w-4" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1 text-gray-300">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-300">
                <BookOpen className="h-4 w-4" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-300">
                <Award className="h-4 w-4" />
                <span>Certificate</span>
              </div>
            </div>

            <Tabs defaultValue="curriculum">
              <TabsList className="bg-gray-900 border-gray-800">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum" className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Course Content</h3>
                <Accordion type="single" collapsible className="w-full">
                  {course.curriculum.sections.map((section, index) => (
                    <AccordionItem key={index} value={`section-${index}`} className="border-gray-800">
                      <AccordionTrigger className="text-white hover:text-white hover:no-underline py-4">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={lessonIndex}
                              className="flex justify-between items-center py-2 px-4 bg-gray-900 rounded-md"
                            >
                              <span className="text-gray-300">{lesson.title}</span>
                              <span className="text-gray-500 text-sm">{lesson.duration}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              <TabsContent value="instructor" className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt={course.instructor}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{course.instructor}</h3>
                    <p className="text-gray-400 mt-2">
                      Expert instructor with years of experience in {course.category.toLowerCase()}. Passionate about
                      teaching and helping students master complex concepts through practical, hands-on learning.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="pt-6">
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold mb-2">Course Reviews</h3>
                  <p className="text-gray-400">Reviews will be available after the course launch.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="bg-gray-900 border-gray-800 sticky top-24">
              <div className="relative aspect-video">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-white">{course.price} ETH</span>
                  <Badge variant="outline" className="bg-blue-900/20 text-blue-400 border-blue-800">
                    {course.category}
                  </Badge>
                </div>
                <Button className="w-full mb-4" onClick={() => setIsPaymentModalOpen(true)}>
                  Purchase Course
                </Button>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Access on mobile and desktop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} course={course} />
    </div>
  )
}

