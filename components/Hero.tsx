import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Globe } from "./magicui/globe";
import { SparklesText } from "./magicui/sparkles-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";

export default function Hero() {
  return (
    <div className="h-[50rem] pb-20 w-full bg-black bg-dot-white/[0.2]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex-col justify-center">
        <div>
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Aitor</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
        <div>
          <SparklesText text={"Worried about grades??"}></SparklesText>
        </div>
      </div>
    </div>
  );
}
