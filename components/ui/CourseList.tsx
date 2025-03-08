import { useEffect, useState } from "react";
const course = {
  id: 1,
  title: "React for Beginners",
  description: "Learn React from scratch",
  category: "Web Development",
  imageUrl: "https://via.placeholder.com/300",
  price: 50,
  rating: 4.5,
};
const CourseCard: React.FC<{ course: typeof course }> = ({ course }) => {
  return (
    <div className="group p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 border border-gray-600 hover:border-gray-500">
      <div className="relative mb-3">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 bg-blue-500 text-xs font-bold px-2 py-1 rounded">
          {course.category}
        </div>
      </div>
      <h3 className="text-lg font-bold mb-1 group-hover:text-blue-300 transition-colors">
        {course.title}
      </h3>
      <p className="text-gray-400 text-sm mb-3">
        {course.description}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-gray-300">${course.price}</span>
        <div className="flex items-center text-yellow-400 text-sm">
          <span className="material-symbols-outlined text-sm mr-1">star</span>
          <span>{course.rating}</span>
        </div>
      </div>
    </div>
  );
};

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/courses") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-white">Loading courses...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
