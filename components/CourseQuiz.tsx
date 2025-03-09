"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog"

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: string
}

type QuizProps = {
  classname?: string
  subj?: string
  topic?: string
  numQuestions?: number
  goBack?: () => void
}

export default function CourseQuiz({
  classname: propClassname = "Computer Science",
  subj: propSubj = "",
  topic: propTopic = "",
  numQuestions: propNumQuestions = 5,
  goBack,
}: QuizProps) {
  const router = useRouter()
  const [classname, setClassname] = useState(propClassname)
  const [subj, setSubj] = useState(propSubj)
  const [topic, setTopic] = useState(propTopic)
  const [numQuestions, setNumQuestions] = useState(String(propNumQuestions))
  const [quiz, setQuiz] = useState<QuizQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [quizStarted, setQuizStarted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [quizFinished, setQuizFinished] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setClassname(propClassname)
    setSubj(propSubj)
    setTopic(propTopic)
    setNumQuestions(String(propNumQuestions))
  }, [propClassname, propSubj, propTopic, propNumQuestions])

  const generateQuiz = async () => {
    if (!classname.trim() || !subj.trim() || !topic.trim()) {
      setError("Please fill in all fields")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/v1/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          classname,
          subj,
          topic,
          numQuestions: Number.parseInt(numQuestions),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate quiz")
      }

      const data = await response.json()
      if (!data.quiz || !Array.isArray(data.quiz) || data.quiz.length === 0) {
        throw new Error("Invalid quiz data received")
      }
      setQuiz(data.quiz)
      setQuizStarted(true)
      setCurrentQuestion(0)
      setScore(0)
      setSelectedAnswer("")
      setUserAnswers([])
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to generate quiz")
      setQuizStarted(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto max-w-md mt-10 p-4">
      <Button onClick={goBack || (() => router.back())} className="fixed top-4 right-4">
        ← Back
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Quiz</CardTitle>
          <CardDescription>Generate a quiz on any topic</CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="classname">Class</Label>
          <Input id="classname" value={classname} onChange={(e) => setClassname(e.target.value)} />
          <Label htmlFor="subj">Subject</Label>
          <Input id="subj" value={subj} onChange={(e) => setSubj(e.target.value)} />
          <Label htmlFor="topic">Topic</Label>
          <Input id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
          <Label htmlFor="numQuestions">Number of Questions</Label>
          <Input id="numQuestions" type="number" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} />
          {error && <p className="text-red-500">{error}</p>}
        </CardContent>
        <CardFooter>
          <Button onClick={generateQuiz} disabled={loading}>{loading ? "Generating..." : "Generate Quiz"}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
