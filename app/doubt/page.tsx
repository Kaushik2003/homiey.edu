'use client'

import { useState } from 'react'

export default function Doubt() {
  const [classname, setClassname] = useState('')
  const [subj, setSubj] = useState('')
  const [topic, setTopic] = useState('')
  const [doubt, setDoubt] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/v1/doubt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classname, subj, topic, doubt }),
    })
    const data = await res.json()
    setResponse(data.response)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ask a Doubt</h1>
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
        <textarea
          value={doubt}
          onChange={(e) => setDoubt(e.target.value)}
          placeholder="Enter your doubt here..."
          className="w-full p-2 border rounded h-32"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-xl font-bold mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}

