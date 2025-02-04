"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Doubt from "@/app/doubt/page";
import PaperGen from "@/app/paper-gen/page";
import Quiz from "@/app/quiz/page";

type TabType = "ask" | "quiz" | "generate" | null;

export const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<TabType>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const goBack = () => setActiveTab(null);

  return (
    <div className="flex justify-center items-center w-full h-full bg-white border-neutral-200 dark:bg-neutral-900">
      <div className="p-6 md:p-1 rounded-lg w-full max-w-4xl">
        {loading ? (
          <div className="space-y-4">
            <div className="h-20 rounded-lg bg-gray-100 dark:bg-neutral-700 animate-pulse" />
            <div className="h-20 rounded-lg bg-gray-100 dark:bg-neutral-700 animate-pulse" />
            <div className="h-20 rounded-lg bg-gray-100 dark:bg-neutral-700 animate-pulse" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {!activeTab ? (
              <motion.div
                key="cards"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 md:grid-cols-2 gap-10"
              >
                {[
                  {
                    title: "Ask a Doubt",
                    description: "Get quick answers to your academic questions from experts.",
                    tab: "ask",
                  },
                  {
                    title: "Take a Quiz",
                    description: "Test your knowledge with interactive quizzes.",
                    tab: "quiz",
                  },
                  {
                    title: "Generate Question Paper",
                    description: "Create personalized question papers for practice.",
                    tab: "generate",
                  },
                  {
                    title: "PDF-Review",
                    description: "Get Personalized Reviews on your PDFs.",
                    tab: "generate",
                  },
                ].map(({ title, description, tab }) => (
                  <motion.div
                    key={tab}
                    className="p-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 shadow-md border border-neutral-200 dark:border-neutral-600 flex flex-col justify-between"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => setActiveTab(tab as TabType)}
                  >
                    <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">{title}</h3>
                    <p className="text-base text-neutral-600 dark:text-neutral-400">{description}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {activeTab === "ask" && <Doubt goBack={goBack} />}
                {activeTab === "quiz" && <Quiz goBack={goBack} />}
                {activeTab === "generate" && <PaperGen goBack={goBack} />}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      <div className="absolute bottom-4 text-neutral-500 dark:text-neutral-400">
        AI tutor can make mistakes, be careful.
      </div>
    </div>
  );
};
