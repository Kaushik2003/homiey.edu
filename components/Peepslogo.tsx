"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://i.pinimg.com/736x/d4/76/8c/d4768c0e7d8762294c1f169a6a1d3c27.jpg",
  },
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://i.pinimg.com/736x/d4/76/8c/d4768c0e7d8762294c1f169a6a1d3c27.jpg",
  },
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://i.pinimg.com/736x/d4/76/8c/d4768c0e7d8762294c1f169a6a1d3c27.jpg",
  },
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://i.pinimg.com/736x/d4/76/8c/d4768c0e7d8762294c1f169a6a1d3c27.jpg",
  },
  
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full mt-4">
      <AnimatedTooltip items={people}  />
    </div>
  );
}
