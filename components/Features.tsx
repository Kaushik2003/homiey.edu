"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { HelpCircle, BookOpen, FileText, FileSearch } from "lucide-react";
import { motion } from "framer-motion";
import Lottie from "@lottielab/lottie-player/react";

export default function BentoGridCustomDemo() {
  return (
    <BentoGrid className="w-full pb-20 mx-auto md:auto-rows-[20rem] grid gap-6">
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
  <motion.div className="flex flex-1 w-full h-full min-h-[6rem] p-4 bg-neutral-200 dark:bg-neutral-800 rounded-xl border border-neutral-300 dark:border-neutral-700" />
);

const SkeletonTwo = () => (
  <div className="flex items-center justify-center w-full h-full p-4">
    <Lottie src="https://cdn.lottielab.com/l/6CQCKv9ypojtP5.json" autoplay className="w-full h-full max-w-[250px] max-h-[250px]" />
  </div>
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
  
    <Lottie src="https://cdn.lottielab.com/l/2qFHd4sX4use1c.json" autoplay className=""/>
  
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




























// "use client";
// import { cn } from "@/lib/utils";
// import React from "react";
// import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
// import { HelpCircle, BookOpen, FileText, FileSearch } from "lucide-react";
// import { disableInstantTransitions, motion } from "framer-motion";

// import Image from 'next/image'
// import Lottie from '@lottielab/lottie-player/react';


// export default function BentoGridCustomDemo() {
//   return (
//     <BentoGrid className="w-full pb-20 mx-auto md:auto-rows-[20rem] grid gap-6">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           className={cn("[&>p:text-lg]", item.className)}
//           icon={item.icon}
//         />
//       ))}
//     </BentoGrid>
//   );
// }

// const SkeletonOne = () => {
//   const variants = {
//     initial: { opacity: 0.5, scale: 1 },
//     animate: {
//       opacity: 1,
//       scale: 1.05,
//       transition: { duration: 0.3, yoyo: Infinity },
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-200 dark:bg-neutral-800 rounded-xl border border-neutral-300 dark:border-neutral-700"
//     />
//   );
// };

// const SkeletonTwo = () => {
//   const variants = {
//     initial: { width: 0 },
//     animate: {
//       width: "100%",
//       transition: { duration: 0.2 },
//     },
//     hover: {
//       width: ["0%", "100%"],
//       transition: { duration: 2 },
//     },
//   };
//   return (
//     <Lottie src="https://cdn.lottielab.com/l/6CQCKv9ypojtP5.json" autoplay />
//   );
// };

// const SkeletonThree = () => {
//   const variants = {
//     initial: { backgroundPosition: "0 50%" },
//     animate: {
//       backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       variants={variants}
//       transition={{
//         duration: 5,
//         repeat: Infinity,
//         repeatType: "reverse",
//       }}
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
//       style={{
//         background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
//         backgroundSize: "400% 400%",
//       }}
//     >
//       <motion.div className="h-full w-full rounded-lg"></motion.div>
//     </motion.div>
//   );
// };

// const SkeletonFour = () => {
//   const first = {
//     initial: { x: 20, rotate: -5 },
//     hover: { x: 0, rotate: 0 },
//   };
//   const second = {
//     initial: { x: -20, rotate: 5 },
//     hover: { x: 0, rotate: 0 },
//   };
//   return (
//     <Lottie src="https://cdn.lottielab.com/l/2qFHd4sX4use1c.json" autoplay />
//   );
// };

// const SkeletonFive = () => {
//   const variants = {
//     initial: { x: 0 },
//     animate: {
//       x: 10,
//       rotate: 5,
//       transition: { duration: 0.2 },
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//     >
//       <motion.div
//         variants={variants}
//         className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
//       >
//         <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
//         <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
//       </motion.div>
//     </motion.div>
//   );
// };

// const items = [
//   {
//     title: "Instant Doubt Resolution",
//     description: "Have a question? Get precise and clear explanations instantly for any topic.",
//     header: <SkeletonOne />,
//     className: "md:col-span-1",  // Ensuring it spans across 2 columns
//     icon: <HelpCircle className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
//   },
//   {
//     title: "AI-Generated Quizzes",
//     description: "Prepare better with structured quizzes tailored to your subject and class.",
//     header: <SkeletonTwo />,
//     className: "md:col-span-1",  // Regular single column span
//     icon: <BookOpen className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
//   },
//   {
//     title: "Custom Question Papers",
//     description: "Generate question papers designed to help you score full marks in exams.",
//     header: <SkeletonThree />,
//     className: "md:col-span-1",  // Regular single column span
//     icon: <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
//   },
//   {
//     title: "Smart PDF Review & Summarization",
//     description: "Upload PDFs, get summaries, and receive AI-generated feedback on clarity, coherence, and engagement.",
//     header: <SkeletonFour />,
//     className: "md:col-span-2",  // Spans across 2 columns
//     icon: <FileSearch className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
//   },
//   {
//     title: "Online Assessment Tools",
//     description: "Design and create multiple-choice, fill-in-the-blank, and short-answer questions for your classes.",
//     header: <SkeletonFive />,
//     className: "md:col-span-1",  // Regular single column span
//     icon: <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
//   },
// ];

 





















// "use client";
// import { cn } from "@/lib/utils";
// import React from "react";
// import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
// import { HelpCircle, BookOpen, FileText, FileSearch } from "lucide-react";
// import { motion } from "framer-motion";

// export default function BentoGridCustomDemo() {
//   return (
//     <BentoGrid className="max-w-4xl pb-20 mx-auto md:auto-rows-[20rem]">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           className={cn("[&>p:text-lg]", item.className)}
//           icon={item.icon}
//         />
//       ))}
//     </BentoGrid>
//   );
// }

// const AnimatedSkeleton = () => {
//   const variants = {
//     initial: { opacity: 0.5, scale: 1 },
//     animate: {
//       opacity: 1,
//       scale: 1.05,
//       transition: { duration: 0.3, yoyo: Infinity },
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-200 dark:bg-neutral-800 rounded-xl border border-neutral-300 dark:border-neutral-700"
//     />
//   );
// };

// const items = [
//   {
//     title: "Instant Doubt Resolution",
//     description: "Have a question? Get precise and clear explanations instantly for any topic.",
//     header: <AnimatedSkeleton />,
//     className: "md:col-span-2",
//     icon: <HelpCircle className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
//   },
//   {
//     title: "AI-Generated Quizzes",
//     description: "Prepare better with structured quizzes tailored to your subject and class.",
//     header: <AnimatedSkeleton />,
//     className: "md:col-span-1",
//     icon: <BookOpen className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
//   },
//   {
//     title: "Custom Question Papers",
//     description: "Generate question papers designed to help you score full marks in exams.",
//     header: <AnimatedSkeleton />,
//     className: "md:col-span-1",
//     icon: <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
//   },
//   {
//     title: "Smart PDF Review & Summarization",
//     description: "Upload PDFs, get summaries, and receive AI-generated feedback on clarity, coherence, and engagement.",
//     header: <AnimatedSkeleton />,
//     className: "md:col-span-2",
//     icon: <FileSearch className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
//   },
//   {
//     title: "Online Assessment Tools",
//     description: "Design and create multiple-choice, fill-in-the-blank, and short-answer questions for your classes.",
//     header: <AnimatedSkeleton />,
//     className: "md:col-span-1",
//     icon: <FileText className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />,
//   },
// ];

