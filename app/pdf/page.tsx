"use client";

import { useState } from "react";

export default function PdfReview() {
  const [driveLink, setDriveLink] = useState("");
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSummary(null);

    try {
      const response = await fetch("/api/v1/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driveLink }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to process PDF.");

      setSummary(data.summary);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">PDF Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={driveLink}
          onChange={(e) => setDriveLink(e.target.value)}
          placeholder="Enter Google Drive PDF Link"
          className="w-full p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {summary && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-semibold">Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}