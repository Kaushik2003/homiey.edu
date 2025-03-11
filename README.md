# Homiey

<!-- ![Homiey Banner](https://your-image-url.com) -->

## 🚀 Overview
Homiey is an AI-powered educational assistant designed to help students with exam preparation, doubt resolution, and study materials. It provides features such as AI-generated quizzes, custom question papers, and online assessment tools.

## ✨ Features
- **Instant Doubt Resolution**: Get precise and clear explanations instantly for any topic.
- **AI-Generated Quizzes**: Prepare better with structured quizzes tailored for your subjects.
- **Custom Question Papers**: Create question papers designed for better exam preparation.
- **Smart PDF Review & Summarization**: Upload PDFs, get summaries, and AI-generated feedback.
- **Online Assessment Tools**: Create multiple-choice, fill-in-the-blank, and short-answer questions.
- **Real-time chat interface**: Interact with an AI assistant for instant academic assistance.
- **Message history persistence**: Save and review past conversations.
- **Markdown support for messages**: Format messages with Markdown.
- **Code syntax highlighting**: Highlight code snippets.
- **LaTeX math rendering**: Display mathematical equations seamlessly.

## 💡 How It Works
Homiey leverages Natural Language Processing (NLP) to analyze queries, extract relevant information, and provide structured explanations. It cross-references academic sources and provides solutions that align with class levels and subject requirements.

## 🔗 Live Demo
Check out the live version: [Homiey](https://homiey.vercel.app/)

## 🛠 Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL / MongoDB
- **AI**: Gemini AI
- **Authentication**: NextAuth.js

## 📦 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Kaushik2003/homiey.edu.git
   cd homiey
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="your-database-url"
   GOOGLE_API_KEY="your-openai-api-key"
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## 📂 Project Structure

```
├── app/
│   ├── api/         # API routes
│   ├── components/  # React components
│   ├── lib/         # Utility functions and configurations
│   └── pages/       # Page components
├── prisma/          # Database schema and migrations
├── public/          # Static assets
└── styles/          # CSS styles
```

## 🤝 Contribution
This project is open-source. Feel free to contribute and make it better! 🚀
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

