export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  price: number
  duration: string
  category: string
  level: string
  image: string
  publishedDate: string
  students: number
  curriculum: {
    sections: {
      title: string
      lessons: {
        title: string
        duration: string
      }[]
    }[]
  }
}

