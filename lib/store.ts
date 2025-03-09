import { create } from "zustand"
import type { Course } from "./types"
import { courses } from "./data"

interface CourseStore {
  searchQuery: string
  sortOption: string
  filteredCourses: Course[]
  setSearchQuery: (query: string) => void
  setSortOption: (option: string) => void
  setFilteredCourses: (courses: Course[]) => void
}

export const useCourseStore = create<CourseStore>((set) => ({
  searchQuery: "",
  sortOption: "newest",
  filteredCourses: courses,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSortOption: (option) => set({ sortOption: option }),
  setFilteredCourses: (courses) => set({ filteredCourses: courses }),
}))

