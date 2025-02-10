"use client"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// const faqs = [
//   {
//     question: "How does the AI resolve doubts?",
//     answer:
//       "Our AI tutor analyzes your query and provides a clear, structured explanation relevant to your class and subject.",
//   },
//   {
//     question: "Can I generate quizzes for any subject?",
//     answer: "Yes! You can create quizzes for any subject and topic in just a few clicks.",
//   },
//   {
//     question: "What format will the generated question papers be in?",
//     answer: "The question papers are generated in PDF format, making them easy to download and print.",
//   },
//   {
//     question: "Is my data secure?",
//     answer: "Yes! We prioritize privacy and ensure that your data remains safe and confidential.",
//   },
// ]

// export default function FAQ() {
//   return (
//     <section id="faq" className="py-20 bg-white">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
//         <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
//           {faqs.map((faq, index) => (
//             <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-4">
//               <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
//                 {faq.question}
//               </AccordionTrigger>
//               <AccordionContent className="text-gray-600 mt-2">{faq.answer}</AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   )
// }

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    title: "How does the AI resolve doubts?",
    description:
      "Our AI tutor analyzes your query and provides a clear, structured explanation relevant to your class and subject.",
    link: "#faq",
  },
  {
    title: "Can I generate quizzes for any subject?",
    description:
      "Yes! You can create quizzes for any subject and topic in just a few clicks.",
    link: "#faq",
  },
  {
    title: "What format will the generated question papers be in?",
    description:
      "The question papers are generated in PDF format, making them easy to download and print.",
    link: "#faq",
  },
  {
    title: "Is my data secure?",
    description:
      "Yes! We prioritize privacy and ensure that your data remains safe and confidential.",
    link: "#faq",
  },
];

export const HoverEffect = ({ className }: { className?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-10", className)}>
      {faqs.map((faq, idx) => (
        <Link
          href={faq?.link}
          key={faq?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{faq.title}</CardTitle>
            <CardDescription>{faq.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
export  default HoverEffect