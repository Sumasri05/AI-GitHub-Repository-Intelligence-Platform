# AI GitHub Repository Intelligence Platform

An AI-powered platform that analyzes GitHub repositories and provides quality scores, insights, risk predictions, and engineering recommendations.

The system evaluates repositories using multiple metrics such as project structure, documentation quality, commit activity, community health, code complexity, dependency health, and technology stack detection.

---

## 🚀 Resilient Dual-Mode Architecture

To prevent backend dependency failures (such as Supabase free tier auto-pausing or DNS `ERR_NAME_NOT_RESOLVED`), this platform uses a **Fault-Tolerant Hybrid Architecture**:

1. **Cloud Mode (Default when Supabase is active)**: Uses Supabase PostgreSQL & Edge Functions for AI-generated summaries and persistent cloud storage.
2. **Resilient Standalone Mode (Automatic Fallback)**: Runs a full **Client-Side Repository Analysis Engine** directly inside the user's browser using GitHub's REST API. Stores scans and history seamlessly in `localStorage` so the Dashboard, Leaderboard, Compare, and History pages **never crash or stay blank**.

```
                  ┌─────────────────────────────────────────┐
                  │          User Requests Analysis         │
                  └────────────────────┬────────────────────┘
                                       │
                        Try Supabase Edge Function
                                       │
                    ┌──────────────────┴──────────────────┐
                    ▼                                     ▼
             [Supabase Online]                    [Supabase Offline / Paused]
        Executes via Cloud DB & AI           Falls Back to Client-Side Analyzer
                    │                        (Direct GitHub API + Local Storage)
                    └──────────────────┬──────────────────┘
                                       │
                       Renders Dashboard & Saved History
```

---

## 🌟 Key Features

- **Repository Quality Scoring**: Computes 7 sub-scores (Documentation, Maintainability, Structure, Community Health, Activity, Dependency Health, Code Complexity) and a weighted overall score out of 10.
- **Risk Prediction Engine**: Predicts repository health risks (Low/Moderate/High) based on contributor patterns, commit recency, and issue backlog.
- **Technology Stack Detection**: Automatically identifies frameworks, build tools, languages, and test suites (React, Next.js, Rust, Tailwind CSS, TypeScript, Python, etc.).
- **Side-by-Side Repository Comparison**: Compare two GitHub projects across all metrics with animated visual charts.
- **Leaderboard & Analytics Dashboard**: Ranks top open-source projects and visualizes score distributions, language breakdown, and maintenance timelines.
- **Interactive Codebase Assistant (AI Chat)**: Ask questions about any scanned codebase.
- **PDF Report Download**: Export comprehensive analysis summaries for any project.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, TypeScript, TailwindCSS, Framer Motion, Recharts, Lucide Icons, Radix UI Primitives
- **Backend & Storage**: Supabase (PostgreSQL, Auth, Edge Functions), LocalStorage Fallback Store
- **APIs**: GitHub REST API, Lovable AI Gateway
- **Deployment**: Netlify / Vercel / Static Hosting

---

## 📁 Project Structure

```
AI-GitHub-Repository-Intelligence-Platform
│
├── public                  Static assets
├── src                     Main application source
│   ├── components          UI components (Layout, CodebaseChat, ScoreGauge, etc.)
│   ├── hooks               Custom hooks (useAuth, use-toast)
│   ├── lib                 Core utilities & engines
│   │   ├── repoAnalyzer.ts Client-side GitHub REST API analyzer
│   │   ├── storage.ts      Local storage & preloaded dataset store
│   │   ├── types.ts        TypeScript interface definitions
│   │   └── utils.ts        Helper utilities
│   └── pages               Application pages (Analyze, Dashboard, Leaderboard, Compare, History, etc.)
│
├── supabase                Backend configuration & functions
│   ├── functions           Edge Functions (analyze-repo, repo-chat, repo-api)
│   └── migrations          PostgreSQL schema migrations
│
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

---

## ⚙️ Installation & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/Sumasri05/AI-GitHub-Repository-Intelligence-Platform.git
cd AI-GitHub-Repository-Intelligence-Platform
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:

```env
VITE_SUPABASE_PROJECT_ID="your_project_id"
VITE_SUPABASE_URL="https://your_project.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="your_publishable_key"

# Optional: Higher GitHub API rate limits (5,000 requests/hr)
# VITE_GITHUB_TOKEN="your_github_personal_access_token"
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🧪 Build & Test

```bash
# Run production build check
npx vite build

# Run unit tests
npm run test
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Sumasri**  
B.Tech Computer Science (AI & ML)
