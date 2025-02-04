import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from "react";

export default function Hero() {
  return (
    <div className="h-[50rem] w-full bg-black bg-dot-white/[0.2]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
            Your AI-Powered Tutor: Learn, Clarify, Excel!
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Get instant answers to your doubts, generate quizzes, and create question papers with ease. Powered by AI
            for smarter learning.
          </p>
          <div className="flex gap-4">
            <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-8">Start Learning</Button>
            <Button variant="outline" className="rounded-full">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full h-[400px] relative">
            <Image
              src="https://i.pinimg.com/originals/aa/90/48/aa90481e8487bedab3c32f937de9454c.gif"

              alt="AI Tutor Illustration"
              fill
              objectFit="contain"
              className="drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 mix-blend-color-burn opacity-30 rounded-3xl"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
