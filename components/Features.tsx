import { HelpCircle, BookOpen, FileText, FileSearch } from "lucide-react"

const features = [
  {
    icon: HelpCircle,
    title: "Instant Doubt Resolution",
    description: "Have a question? Get precise and clear explanations instantly for any topic.",
  },
  {
    icon: BookOpen,
    title: "AI-Generated Quizzes",
    description: "Prepare better with structured quizzes tailored to your subject and class.",
  },
  {
    icon: FileText,
    title: "Custom Question Papers",
    description: "Generate question papers designed to help you score full marks in exams.",
  },
  {
    icon: FileSearch,
    title: "Smart PDF Review & Summarization",
    description: "Upload PDFs, get summaries, and receive AI-generated feedback on clarity, coherence, and engagement.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

