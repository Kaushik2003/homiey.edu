import type { Course } from "./types"

export const courses: Course[] = [
  {
    id: "1",
    title: "Blockchain Fundamentals: From Zero to Hero",
    description: "Learn the core concepts of blockchain technology and how it's revolutionizing industries worldwide.",
    instructor: "Alex Morgan",
    price: 0.15,
    duration: "12 hours",
    category: "Blockchain",
    level: "Beginner",
    image: "/placeholder.svg?height=400&width=600",
    publishedDate: "2023-11-15",
    students: 1245,
    curriculum: {
      sections: [
        {
          title: "Introduction to Blockchain",
          lessons: [
            { title: "What is Blockchain?", duration: "15 min" },
            { title: "History of Blockchain", duration: "20 min" },
            { title: "Key Blockchain Concepts", duration: "25 min" },
          ],
        },
        {
          title: "Blockchain Architecture",
          lessons: [
            { title: "Blocks and Chains", duration: "30 min" },
            { title: "Consensus Mechanisms", duration: "45 min" },
            { title: "Distributed Ledgers", duration: "35 min" },
          ],
        },
      ],
    },
  },
  {
    id: "2",
    title: "Smart Contract Development with Solidity",
    description:
      "Master the art of writing secure and efficient smart contracts using Solidity for Ethereum-based applications.",
    instructor: "Sarah Chen",
    price: 0.25,
    duration: "15 hours",
    category: "Development",
    level: "Intermediate",
    image: "/placeholder.svg?height=400&width=600",
    publishedDate: "2023-12-05",
    students: 892,
    curriculum: {
      sections: [
        {
          title: "Solidity Basics",
          lessons: [
            { title: "Introduction to Solidity", duration: "20 min" },
            { title: "Data Types and Variables", duration: "30 min" },
            { title: "Functions and Modifiers", duration: "40 min" },
          ],
        },
        {
          title: "Advanced Smart Contracts",
          lessons: [
            { title: "Contract Inheritance", duration: "35 min" },
            { title: "Error Handling", duration: "25 min" },
            { title: "Gas Optimization", duration: "45 min" },
          ],
        },
      ],
    },
  },
  {
    id: "3",
    title: "Cryptocurrency Trading Strategies",
    description:
      "Develop effective trading strategies for cryptocurrency markets and learn risk management techniques.",
    instructor: "Michael Johnson",
    price: 0.18,
    duration: "10 hours",
    category: "Trading",
    level: "All Levels",
    image: "/placeholder.svg?height=400&width=600",
    publishedDate: "2024-01-20",
    students: 1578,
    curriculum: {
      sections: [
        {
          title: "Market Analysis",
          lessons: [
            { title: "Technical Analysis Basics", duration: "40 min" },
            { title: "Chart Patterns", duration: "35 min" },
            { title: "Indicators and Oscillators", duration: "45 min" },
          ],
        },
        {
          title: "Trading Psychology",
          lessons: [
            { title: "Emotional Control", duration: "30 min" },
            { title: "Risk Management", duration: "40 min" },
            { title: "Building a Trading Plan", duration: "35 min" },
          ],
        },
      ],
    },
  },
  {
    id: "4",
    title: "DeFi: Decentralized Finance Explained",
    description: "Explore the world of DeFi and learn how to leverage decentralized financial instruments.",
    instructor: "Emma Wilson",
    price: 0.22,
    duration: "14 hours",
    category: "Finance",
    level: "Intermediate",
    image: "/placeholder.svg?height=400&width=600",
    publishedDate: "2024-02-10",
    students: 763,
    curriculum: {
      sections: [
        {
          title: "DeFi Fundamentals",
          lessons: [
            { title: "What is DeFi?", duration: "25 min" },
            { title: "DeFi vs Traditional Finance", duration: "30 min" },
            { title: "Key DeFi Protocols", duration: "40 min" },
          ],
        },
        {
          title: "DeFi Applications",
          lessons: [
            { title: "Lending and Borrowing", duration: "35 min" },
            { title: "Decentralized Exchanges", duration: "45 min" },
            { title: "Yield Farming", duration: "40 min" },
          ],
        },
      ],
    },
  },
  {
    id: "5",
    title: "NFT Creation and Marketing",
    description: "Learn how to create, mint, and market your own NFTs across various marketplaces.",
    instructor: "David Kim",
    price: 0.12,
    duration: "8 hours",
    category: "Art & Design",
    level: "Beginner",
    image: "/placeholder.svg?height=400&width=600",
    publishedDate: "2024-03-05",
    students: 1105,
    curriculum: {
      sections: [
        {
          title: "NFT Basics",
          lessons: [
            { title: "What are NFTs?", duration: "20 min" },
            { title: "NFT Standards", duration: "25 min" },
            { title: "NFT Marketplaces", duration: "30 min" },
          ],
        },
        {
          title: "Creating NFTs",
          lessons: [
            { title: "Digital Art Creation", duration: "45 min" },
            { title: "Minting Process", duration: "35 min" },
            { title: "Marketing Your NFTs", duration: "40 min" },
          ],
        },
      ],
    },
  },
  {
    id: "6",
    title: "Web3 Development Masterclass",
    description: "Build decentralized applications (dApps) using Web3 technologies and frameworks.",
    instructor: "James Rodriguez",
    price: 0.28,
    duration: "18 hours",
    category: "Development",
    level: "Advanced",
    image: "/placeholder.svg?height=400&width=600",
    publishedDate: "2024-01-15",
    students: 642,
    curriculum: {
      sections: [
        {
          title: "Web3 Fundamentals",
          lessons: [
            { title: "Web3 Architecture", duration: "30 min" },
            { title: "Web3 Libraries", duration: "40 min" },
            { title: "Connecting to Blockchain", duration: "35 min" },
          ],
        },
        {
          title: "Building dApps",
          lessons: [
            { title: "Frontend Integration", duration: "45 min" },
            { title: "Smart Contract Interaction", duration: "50 min" },
            { title: "Testing and Deployment", duration: "40 min" },
          ],
        },
      ],
    },
  },
]

