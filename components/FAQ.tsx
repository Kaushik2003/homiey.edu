import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI resolve doubts?",
    answer:
      "Our AI tutor analyzes your query and provides a clear, structured explanation relevant to your class and subject.",
  },
  {
    question: "Can I generate quizzes for any subject?",
    answer: "Yes! You can create quizzes for any subject and topic in just a few clicks.",
  },
  {
    question: "What format will the generated question papers be in?",
    answer: "The question papers are generated in PDF format, making them easy to download and print.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes! We prioritize privacy and ensure that your data remains safe and confidential.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-4">
              <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 mt-2">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

