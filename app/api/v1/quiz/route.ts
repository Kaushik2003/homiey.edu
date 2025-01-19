import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)
const model = genAI.getGenerativeModel({ model: "gemini-pro" })

export async function POST(request: Request) {
  const { classname, subj, topic } = await request.json()

  const prompt = `Create a quiz of 10 questions for class ${classname}, subject ${subj}, on the topic '${topic}'. Ensure the quiz is well-structured and relevant and provide options too. Avoid unnecessary information.`
  
  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()

  return NextResponse.json({ response: text })
}

