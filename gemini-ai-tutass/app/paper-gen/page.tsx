'use client'

import { useState } from 'react'

export default function PaperGen() {
  const [classname, setClassname] = useState('')
  const [subj, setSubj] = useState('')
  const [topic, setTopic] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/v1/paper-gen', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classname, subj, topic }),
    })
    
    if (res.ok) {
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = `question_paper_${classname}_${subj}_${topic}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    } else {
      console.error('Failed to generate PDF')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Generate Question Paper</h1>
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
          Generate Question Paper
        </button>
      </form>
    </div>
  )
}

