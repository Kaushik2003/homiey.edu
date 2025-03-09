"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Clock, Users } from "lucide-react"
import { useCourseStore } from "@/lib/store"
import { courses } from "@/lib/data"

export function CourseList() {
  const { searchQuery, sortOption, setFilteredCourses, filteredCourses } = useCourseStore()

  useEffect(() => {
    let result = [...courses]

    // Apply search filter
    if (searchQuery) {
      result = result.filter((course) => course.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "popular":
        result.sort((a, b) => b.students - a.students)
        break
      case "newest":
      default:
        result.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
        break
    }

    setFilteredCourses(result)
  }, [searchQuery, sortOption, setFilteredCourses])

  if (filteredCourses.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No courses found</h3>
        <p className="text-gray-400">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCourses.map((course) => (
        <Card key={course.id} className="course-card bg-gray-900 border-gray-800 overflow-hidden">
          <div className="relative aspect-video">
            <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="bg-black/70 backdrop-blur-sm text-white border-0">
                {course.category}
              </Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-white line-clamp-2">{course.title}</h3>
              <span className="font-bold text-blue-400">{course.price} ETH</span>
            </div>
            <p className="text-gray-400 text-sm line-clamp-2 mb-3">{course.description}</p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button asChild variant="outline" className="w-full">
              <Link href={`/course/${course.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

