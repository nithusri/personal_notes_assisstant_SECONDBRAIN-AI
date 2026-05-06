
# personal_notes_assisstant_SECONDBRAIN-AI
Second Brain AI: Upload PDFs, chat with your documents using multimodal AI, and generate targeted smart quizzes to test your knowledg
=======
>>>>>>> 6a17ba2 (Initial commit: Complete MERN Second Brain AI)
# 🧠 Second Brain AI

A powerful, full-stack Personal AI Assistant and Knowledge Base built with the MERN stack (MongoDB, Express, React, Node.js) and powered by Google's Gemini AI. 

Upload your PDFs, study notes, and documents to build a personalized knowledge base. Then, chat with your notes, extract text from images, and generate targeted AI quizzes to test your understanding!

## ✨ Features

- **Upload Knowledge**: Easily upload PDF documents and text files. The system extracts the text, breaks it into chunks, and stores vector embeddings using MongoDB Atlas Vector Search.
- **AI Assistant**: Chat with your personalized knowledge base. The AI strictly answers based on the context of your uploaded notes.
- **Multimodal Support**: Upload images containing questions directly in the chat! The AI will read the image, search your notes, and answer the questions for you.
- **Smart Quiz Engine**: Generate a dynamic 10-question multiple-choice quiz. You can choose exactly which notes/PDFs you want to be tested on. The AI provides balanced options and shuffles the correct answers.
- **Manage History**: View a history of all your uploaded documents and easily delete notes (along with their vector embeddings) when they are no longer needed.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, React Router, Tailwind CSS (or custom CSS), Lucide Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Atlas Vector Search)
- **AI Integration**: `@google/genai` (Google Gemini 2.5 Flash / Flash-lite models)
- **Authentication**: JSON Web Tokens (JWT) & bcrypt
- **File Parsing**: `multer`, `pdf-parse`

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine
- A MongoDB Atlas account with Vector Search configured
- A Google Gemini API Key

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/second-brain-ai.git
cd second-brain-ai
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
```
Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
Open a new terminal window:
```bash
cd frontend
npm install
```
Start the Vite development server:
```bash
npm run dev
```

## 📝 License
This project is open-source and available under the MIT License.
