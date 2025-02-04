import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import PDFDocument from 'pdfkit'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)
const model = genAI.getGenerativeModel({ model: "gemini-pro" })

export async function POST(request: Request) {
  const { classname, subj, topic } = await request.json()

  const prompt = `Generate a question paper for class ${classname}, subject ${subj}, on the topic '${topic}'. The paper should help students score full marks in exams. Provide only essential information and not use markup.`
  
  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()

  // Create PDF
  const doc = new PDFDocument()
  const chunks: Uint8Array[] = []

  doc.on('data', (chunk) => chunks.push(chunk))
  doc.on('end', () => {
    const pdfBuffer = Buffer.concat(chunks)
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=question_paper_${classname}_${subj}_${topic}.pdf`,
      },
    })
  })

  doc.fontSize(16).text("Generated Question Paper", { align: "center" }).moveDown()
  doc.fontSize(12)
    .text(`Class: ${classname || "Not Specified"}`, { align: "left" })
    .text(`Subject: ${subj || "Not Specified"}`, { align: "left" })
    .text(`Topic: ${topic || "Not Specified"}`, { align: "left" })
    .moveDown()
  doc.fontSize(12).text(text, { align: "left", lineGap: 8 })

  doc.end()

  return new NextResponse(null, { status: 200 })
}

