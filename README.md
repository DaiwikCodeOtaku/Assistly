# Assistly 🤖

**Your personal, customizable AI chatbot.**

Assistly is a full-stack AI chatbot application that lets users create and interact with **multiple AI personas**. Each chatbot can have its own personality and behavior, which is stored in a database and used to personalize the AI's responses.

The project focuses on building a practical AI application with **persistent persona configuration, database integration, authentication, and a modern chat interface**.

## ✨ Features

- 🤖 **Create Multiple AI Personas**
  - Create different chatbots with different personalities and instructions.
  - Each persona can behave differently based on its configuration.

- 🧠 **Persistent Personality**
  - Persona information is stored in the database using **Prisma**.
  - The selected personality is retrieved when generating responses.

- 💬 **AI-Powered Conversations**
  - User messages and persona information are sent to the **Grok API** to generate responses.
  - Different personas can produce different styles of responses.

- 🔐 **User Authentication**
  - Users can securely access their own chatbot experience.

- 🎨 **Modern UI**
  - Built using **Next.js** and **Tailwind CSS**.
  - UI components are built with **shadcn/ui**.
  - Designed to provide a clean and responsive chat experience.

- 👤 **Customizable Experience**
  - Users can create personas according to the type of conversation they want.

## 🧠 How Persona-Based Chat Works

The core idea behind Assistly is to make the chatbot's behavior configurable.

```text
User creates a persona
        │
        ▼
Personality & configuration
        │
        ▼
Stored in Database
        │
        │ Prisma
        ▼
Persona retrieved during chat
        │
        ▼
User message + Persona instructions
        │
        ▼
       Grok API
        │
        ▼
Personalized AI Response
```

Instead of having one fixed chatbot, Assistly allows the user to create **different AI personalities for different conversations**.

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons

### Backend / Data

- Next.js API / Server-side functionality
- Prisma ORM
- PostgreSQL / Neon Database

### AI

- Grok API

### Authentication

- Clerk

## 📁 Project Structure

```text
Assistly/
├── app/
│   ├── api/
│   ├── ...
│
├── components/
│   ├── ChatInterface/
│   ├── ui/
│   └── ...
│
├── prisma/
│   └── schema.prisma
│
├── lib/
│   └── ...
│
├── public/
│
├── package.json
└── README.md
```

> The exact structure may vary as the project evolves.

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DaiwikCodeOtaku/assistly.git
cd assistly
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
DATABASE_URL="your_database_url"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

GROK_API_KEY="your_grok_api_key"
```

Use the environment variable names expected by your current implementation.

### 4. Set up Prisma

```bash
npx prisma generate
npx prisma db push
```

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🗄️ Database

Prisma is used as the ORM for managing application data.

A major part of the database design is storing **persona information**, allowing chatbot configurations to persist between conversations.

This makes the chatbot behavior dynamic rather than hard-coded into the application.

## 🔑 Example Persona Concept

A user could create personas such as:

```text
Persona: Coding Mentor
Personality: Patient and encouraging
Behavior: Explain concepts clearly and provide hints before solutions
```

or:

```text
Persona: Interviewer
Personality: Strict and professional
Behavior: Ask technical interview questions and evaluate responses
```

The persona configuration is then incorporated into the AI request so that the generated response follows the selected personality.

## 🚀 What I Learned

Building Assistly involved working across several parts of modern full-stack development:

- Building a full-stack application with Next.js
- Designing reusable UI components
- Managing application data with Prisma
- Working with relational databases
- Implementing authentication
- Integrating an external LLM API
- Designing prompt/persona-based AI behavior
- Managing environment variables and API credentials
- Connecting frontend interactions with backend logic

## 🔮 Future Improvements

Some planned improvements include:

- Conversation history for each persona
- Better persona customization
- Persona templates
- Chat memory
- Streaming AI responses
- More advanced prompt controls
- Message search and conversation management
- Improved error handling and loading states

## 👨‍💻 Author

**Daiwik Rathor**  
Mathematics & Computing — IIT Jammu

GitHub: **[@DaiwikCodeOtaku](https://github.com/DaiwikCodeOtaku)**

---

> **Assistly — One platform. Different personalities. Infinite conversations.**
