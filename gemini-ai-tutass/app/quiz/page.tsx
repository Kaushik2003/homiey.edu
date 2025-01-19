'use client'

import { useState } from 'react'

export default function Quiz() {
  const [classname, setClassname] = useState('')
  const [subj, setSubj] = useState('')
  const [topic, setTopic] = useState('')
  const [quiz, setQuiz] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/v1/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classname, subj, topic }),
    })
    const data = await res.json()
    setQuiz(data.response)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Generate Quiz</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={classname}
          onChange={(e) => setClassname(e.target.value)}
          placeholder="Class"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={subj}
          onChange={(e) => setSubj(e.target.value)}
          placeholder="Subject"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Generate Quiz
        </button>
      </form>
      {quiz && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">Quiz:</h2>
          <pre className="whitespace-pre-wrap">{quiz}</pre>
        </div>
      )}
    </div>
  )
}

