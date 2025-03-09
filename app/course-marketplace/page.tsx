import { CourseList } from "@/components/course-list"
import { SearchAndFilter } from "@/components/search-filter"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8 text-white">Discover Courses</h1>
        <SearchAndFilter />
        <CourseList />
      </main>
      <footer className="border-t border-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Homiey Course Marketplace. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

