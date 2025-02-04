import { useState } from "react";
import { pdf, Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

interface DoubtProps {
  goBack: () => void;
}
export default function PaperGen({ goBack }: DoubtProps) {
  const [classname, setClassname] = useState("");
  const [subj, setSubj] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch generated paper content and create a downloadable PDF.
  const generatePaper = async () => {
    if (!classname.trim() || !subj.trim() || !topic.trim()) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      // Call the API route to generate paper content via Google Gemini.
      const response = await fetch("/api/v1/paper-gen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classname, subj, topic }),
      });
      if (!response.ok) {
        throw new Error("Failed to generate paper");
      }
      const data = await response.json();
      const content = data.content;

      // Define the PDF document using react-pdf.
      const MyDocument = () => (
        <Document>
          <Page style={pdfStyles.page}>
            <Text style={pdfStyles.header}>Question Paper</Text>
            <Text style={pdfStyles.text}>Class: {classname}</Text>
            <Text style={pdfStyles.text}>Subject: {subj}</Text>
            <Text style={pdfStyles.text}>Topic: {topic}</Text>
            <Text style={pdfStyles.text}>{content}</Text>
          </Page>
        </Document>
      );

      // Convert the PDF document to a blob, then trigger a download.
      const blob = await pdf(<MyDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `question_paper_${classname}_${subj}_${topic}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <Card className="max-w-lg mt-10 mx-auto p-6 space-y-5 bg-white dark:bg-black shadow-lg rounded-lg">
        <CardHeader className="text-xl font-semibold">Generate Question Paper</CardHeader>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
          Enter details below to generate your paper.
        </CardDescription>
        <div className="space-y-5">
          {/* Class Input */}
          <Card className="space-y-2">
            <Label htmlFor="classname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Class
            </Label>
            <Input
              id="classname"
              type="text"
              placeholder="Enter class"
              value={classname}
              onChange={(e) => setClassname(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </Card>

          {/* Subject Input */}
          <Card className="space-y-2">
            <Label htmlFor="subj" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Subject
            </Label>
            <Input
              id="subj"
              type="text"
              placeholder="Enter subject"
              value={subj}
              onChange={(e) => setSubj(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </Card>

          {/* Topic Input */}
          <Card className="space-y-2">
            <Label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Topic
            </Label>
            <Input
              id="topic"
              type="text"
              placeholder="Enter topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </Card>

          {error && <div className="text-red-500 text-sm">{error}</div>}
        </div>
        <Button
          onClick={generatePaper}
          disabled={loading}
          className="w-full mt-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900"
        >
          {loading ? "Generating..." : "Generate Paper"}
        </Button>
      </Card>
    </div>
  );
}

// PDF document styles using react-pdf's StyleSheet.
const pdfStyles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
    marginTop: 50,
    marginBottom: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 30,
    textTransform: "uppercase", // For a more formal look
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    textDecoration: "underline", // Underline for section headers like Class, Subject, Topic
  },
  text: {
    fontSize: 14,
    color: "#333",
    lineHeight: 1.6, // Increased line spacing for better readability
    marginBottom: 15,
  },
  questionText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
    textIndent: 20, // Indent questions for a more formal look
  },
  answerText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 30,
    marginBottom: 15,
    marginTop: 5,
  },
  footer: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginTop: 40,
  },
});
