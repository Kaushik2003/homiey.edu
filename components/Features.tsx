"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { HelpCircle, BookOpen, FileText, FileSearch } from "lucide-react";
import { motion } from "framer-motion";

export default function BentoGridCustomDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const AnimatedSkeleton = () => {
  const variants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: 1,
      scale: 1.05,
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-200 dark:bg-neutral-800 rounded-xl border border-neutral-300 dark:border-neutral-700"
    />
  );
};

const items = [
  {
    title: "Instant Doubt Resolution",
    description: "Have a question? Get precise and clear explanations instantly for any topic.",
    header: <AnimatedSkeleton />,
    className: "md:col-span-2",
    icon: <HelpCircle className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
  },
  {
    title: "AI-Generated Quizzes",
    description: "Prepare better with structured quizzes tailored to your subject and class.",
    header: <AnimatedSkeleton />,
    className: "md:col-span-1",
    icon: <BookOpen className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
  },
  {
    title: "Custom Question Papers",
    description: "Generate question papers designed to help you score full marks in exams.",
    header: <AnimatedSkeleton />,
    className: "md:col-span-1",
    icon: <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
  },
  {
    title: "Smart PDF Review & Summarization",
    description: "Upload PDFs, get summaries, and receive AI-generated feedback on clarity, coherence, and engagement.",
    header: <AnimatedSkeleton />,
    className: "md:col-span-2",
    icon: <FileSearch className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
  },
];

