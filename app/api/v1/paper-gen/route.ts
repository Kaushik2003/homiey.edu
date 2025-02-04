import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function POST(request: Request) {
  try {
    const { classname, subj, topic } = await request.json();

    // Create the prompt for Google Gemini to generate the question paper content
    const prompt = `Create a question paper for class ${classname}, subject ${subj}, on the topic '${topic}'. The paper should be designed to help students score full marks in exams. Ensure the content is concise and to the point, with no extra markup. Structure the paper into three distinct sections: Section A, Section B, and Section C, with appropriate questions for each.`;


    // Use Google Gemini to generate the content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const content = response.text();

    // Return the generated content in JSON format
    return NextResponse.json({ content });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
