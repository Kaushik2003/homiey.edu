"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { HelpCircle, BookOpen, FileText, FileSearch } from "lucide-react";
import { motion } from "framer-motion";
import Lottie from "@lottielab/lottie-player/react";
import { Meteors } from "../components/ui/meteors";




export default function BentoGridCustomDemo() {
  return (
    <BentoGrid className="max-w-6xl pb-20 mx-auto md:auto-rows-[20rem] grid gap-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg] p-6", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => (
  // <motion.div className="flex flex-1 w-full h-full min-h-[6rem] p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl border border-neutral-300 dark:border-neutral-700" />
  <div className="">
      <div className=" w-full h-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-blue-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div> */}
 
          <h1 className="font-bold text-xl text-white mb-12 relative z-50">
            Meteors because they&apos;re cool
          </h1>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>

);

const SkeletonTwo = () => (
  <Lottie src="https://cdn.lottielab.com/l/AjBDKht8s1oUa0.json" autoplay />
);

const SkeletonThree = () => (
  <motion.div
    className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 p-4"
    style={{
      background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      backgroundSize: "400% 400%",
    }}
  />
);

const SkeletonFour = () => (
  
  <Lottie src="https://cdn.lottielab.com/l/CJZCvDA8pLuwCZ.json" autoplay />
  
);

const SkeletonFive = () => (
  <motion.div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-4">
    <motion.div className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-4 items-start space-x-2 bg-white dark:bg-black">
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
    </motion.div>
  </motion.div>
);

const items = [
  {
    title: "Instant Doubt Resolution",
    description: "Get precise and clear explanations instantly for any topic.",
    header: <SkeletonOne />, 
    className: "md:col-span-1",  
    icon: <HelpCircle className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
  },
  {
    title: "AI-Generated Quizzes",
    description: "Prepare better with structured quizzes tailored to your subject.",
    header: <SkeletonTwo />,
    className: "md:col-span-1 p-6",  
    icon: <BookOpen className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
  },
  {
    title: "Custom Question Papers",
    description: "Generate question papers designed for better exam preparation.",
    header: <SkeletonThree />,
    className: "md:col-span-1",  
    icon: <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
  },
  {
    title: "Smart PDF Review & Summarization",
    description: "Upload PDFs, get summaries, and AI-generated feedback.",
    header: <SkeletonFour  />,
    className: "md:col-span-2 p-6",  
    icon: <FileSearch className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
  },
  {
    title: "Online Assessment Tools",
    description: "Create multiple-choice, fill-in-the-blank, and short-answer questions.",
    header: <SkeletonFive />,
    className: "md:col-span-1",  
    icon: <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
  },
];





























