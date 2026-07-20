import type { Repository } from "./types";

const STORAGE_KEY_REPOS = "repo_insight_repositories_v1";
const STORAGE_KEY_HISTORY = "repo_insight_history_v1";

export const PRELOADED_REPOSITORIES: Repository[] = [
  {
    id: "preload-react",
    repo_name: "react",
    owner: "facebook",
    repo_url: "https://github.com/facebook/react",
    description: "The library for web and native user interfaces.",
    stars: 228000,
    forks: 46000,
    issues: 620,
    watchers: 6700,
    contributors: 1620,
    commit_frequency: "daily",
    last_commit_date: new Date().toISOString(),
    language: "JavaScript",
    score: 9.4,
    documentation_score: 9.5,
    maintainability_score: 9.2,
    structure_score: 9.6,
    community_health_score: 9.8,
    dependency_health_score: 9.0,
    code_complexity_score: 8.5,
    activity_score: 9.7,
    dependency_count: 32,
    large_files_count: 4,
    max_directory_depth: 6,
    avg_file_size: 14200,
    dependency_files: ["package.json"],
    dependency_risk_level: "Low",
    risk_score: 1.2,
    risk_level: "Low",
    risk_reasons: ["No significant risk indicators detected"],
    score_explanations: {
      documentation: "Comprehensive README (>5k chars). Has sections: Installation, Usage, API, Contributing. Contributing guide present. License present.",
      maintainability: "Strong automated test suite, modern workflow, strict linting and code style guidelines.",
      structure: "Test folder present. CI/CD configuration found. Good structure: src, packages, fixtures.",
      community_health: "High star count (228,000). 46,000 forks. Large contributor base (~1620). Daily commits.",
      activity: "Very active (daily commits). Last commit within a week.",
      dependency_health: "Manageable dependency count (32). Dependency files: package.json.",
      code_complexity: "Clean architectural separation across packages with manageable depth.",
    },
    file_tree: [
      { name: "packages", type: "dir", path: "packages" },
      { name: "fixtures", type: "dir", path: "fixtures" },
      { name: "scripts", type: "dir", path: "scripts" },
      { name: "package.json", type: "file", path: "package.json", size: 3400 },
      { name: "README.md", type: "file", path: "README.md", size: 8500 },
    ],
    summary: "React is a world-class open source library with top-tier community health, rigorous automated testing, and comprehensive documentation.",
    recommendations: [
      "Keep issue triage active to handle high volume.",
      "Maintain strict deprecation notices for major version upgrades.",
      "Expand automated benchmarking for concurrent features."
    ],
    has_tests: true,
    has_ci_cd: true,
    has_docs_folder: true,
    has_contributing: true,
    has_license: true,
    readme_length: 8500,
    readme_sections: ["Installation", "Usage", "API", "Contributing", "License"],
    detected_technologies: ["React", "TypeScript", "JavaScript", "Jest", "ESLint", "Prettier", "Node.js"],
    explanation: {
      purpose: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      architecture: "Monorepo containing react core, react-dom, react-reconciler, and internal test utilities.",
      key_modules: ["react", "react-dom", "react-reconciler", "scheduler"],
      technologies: ["React", "TypeScript", "JavaScript", "Jest", "Rollup"],
      how_to_run: "npm install react react-dom",
      score_explanation: "Scored 9.4/10 due to exemplary maintainability, massive active community, and modular package architecture."
    },
    file_count: 1450,
    created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    cached_at: new Date().toISOString(),
  },
  {
    id: "preload-nextjs",
    repo_name: "next.js",
    owner: "vercel",
    repo_url: "https://github.com/vercel/next.js",
    description: "The React Framework for the Web.",
    stars: 124000,
    forks: 26500,
    issues: 1850,
    watchers: 2400,
    contributors: 3100,
    commit_frequency: "daily",
    last_commit_date: new Date().toISOString(),
    language: "TypeScript",
    score: 9.1,
    documentation_score: 9.6,
    maintainability_score: 9.0,
    structure_score: 9.2,
    community_health_score: 9.5,
    dependency_health_score: 8.6,
    code_complexity_score: 8.0,
    activity_score: 9.8,
    dependency_count: 65,
    large_files_count: 8,
    max_directory_depth: 8,
    avg_file_size: 18400,
    dependency_files: ["package.json", "Cargo.toml"],
    dependency_risk_level: "Low",
    risk_score: 1.5,
    risk_level: "Low",
    risk_reasons: ["Growing issue backlog due to rapid feature expansion"],
    score_explanations: {
      documentation: "Outstanding documentation site and comprehensive in-repo guidance.",
      maintainability: "Rust-powered compiler (Turbopack) and extensive integration test suite.",
      structure: "Modular monorepo structure with clear boundaries.",
      community_health: "Vibrant ecosystem with over 3,000 contributors.",
      activity: "Multiple daily commits and quick release cycles.",
      dependency_health: "Well-managed native and JS dependencies.",
      code_complexity: "Deep monorepo structure with high code volume.",
    },
    file_tree: [
      { name: "packages", type: "dir", path: "packages" },
      { name: "crates", type: "dir", path: "crates" },
      { name: "test", type: "dir", path: "test" },
      { name: "package.json", type: "file", path: "package.json", size: 4200 },
      { name: "README.md", type: "file", path: "README.md", size: 6200 },
    ],
    summary: "Next.js delivers hybrid server/client rendering with top engineering standards, robust Rust tooling, and active community participation.",
    recommendations: [
      "Streamline open issue backlog for core router features.",
      "Optimize CI build times for cross-platform integration tests."
    ],
    has_tests: true,
    has_ci_cd: true,
    has_docs_folder: true,
    has_contributing: true,
    has_license: true,
    readme_length: 6200,
    readme_sections: ["Installation", "Usage", "API", "Contributing", "License"],
    detected_technologies: ["Next.js", "React", "TypeScript", "Rust", "Node.js", "Tailwind CSS", "Vitest", "ESLint"],
    explanation: {
      purpose: "Full-stack React framework providing hybrid rendering, file-based routing, and built-in optimizations.",
      architecture: "Monorepo containing next core, next-swc, turbopack, and create-next-app.",
      key_modules: ["packages/next", "crates/turbopack", "packages/create-next-app"],
      technologies: ["Next.js", "React", "TypeScript", "Rust", "Node.js"],
      how_to_run: "npx create-next-app@latest",
      score_explanation: "High overall score of 9.1/10 supported by exceptional activity and leading documentation."
    },
    file_count: 3800,
    created_at: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
    cached_at: new Date().toISOString(),
  },
  {
    id: "preload-tailwind",
    repo_name: "tailwindcss",
    owner: "tailwindlabs",
    repo_url: "https://github.com/tailwindlabs/tailwindcss",
    description: "A utility-first CSS framework for rapid UI development.",
    stars: 81000,
    forks: 4200,
    issues: 85,
    watchers: 890,
    contributors: 340,
    commit_frequency: "daily",
    last_commit_date: new Date().toISOString(),
    language: "TypeScript",
    score: 9.3,
    documentation_score: 9.8,
    maintainability_score: 9.4,
    structure_score: 9.1,
    community_health_score: 9.0,
    dependency_health_score: 9.2,
    code_complexity_score: 9.0,
    activity_score: 9.1,
    dependency_count: 18,
    large_files_count: 2,
    max_directory_depth: 5,
    avg_file_size: 9800,
    dependency_files: ["package.json", "Cargo.toml"],
    dependency_risk_level: "Low",
    risk_score: 0.8,
    risk_level: "Low",
    risk_reasons: ["No significant risk indicators detected"],
    score_explanations: {
      documentation: "Industry standard documentation, tutorials, and interactive examples.",
      maintainability: "Extremely focused codebase with high unit test coverage.",
      structure: "Clean engine layout with oxide parser.",
      community_health: "Highly regarded by web developers globally.",
      activity: "Consistent daily updates and bug fixes.",
      dependency_health: "Minimal external dependencies.",
      code_complexity: "High efficiency compilation pipeline.",
    },
    file_tree: [
      { name: "packages", type: "dir", path: "packages" },
      { name: "crates", type: "dir", path: "crates" },
      { name: "package.json", type: "file", path: "package.json", size: 2100 },
      { name: "README.md", type: "file", path: "README.md", size: 5400 },
    ],
    summary: "Tailwind CSS is an impeccably maintained utility CSS engine with fast compile speeds and clean architecture.",
    recommendations: [
      "Keep expanding v4 oxide engine performance docs."
    ],
    has_tests: true,
    has_ci_cd: true,
    has_docs_folder: true,
    has_contributing: true,
    has_license: true,
    readme_length: 5400,
    readme_sections: ["Installation", "Usage", "Contributing", "License"],
    detected_technologies: ["Tailwind CSS", "TypeScript", "Rust", "Node.js", "Vitest"],
    explanation: {
      purpose: "Utility-first CSS compiler generating minimal CSS bundles on demand.",
      architecture: "Rust-based engine with JS plugin ecosystem wrapper.",
      key_modules: ["oxide", "tailwindcss", "@tailwindcss/vite"],
      technologies: ["Tailwind CSS", "TypeScript", "Rust"],
      how_to_run: "npm install tailwindcss",
      score_explanation: "Score 9.3/10 due to low complexity, strong maintainability, and clean dependency footprint."
    },
    file_count: 620,
    created_at: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    cached_at: new Date().toISOString(),
  },
  {
    id: "preload-shadcn-ui",
    repo_name: "ui",
    owner: "shadcn",
    repo_url: "https://github.com/shadcn/ui",
    description: "Beautifully designed components that you can copy and paste into your apps.",
    stars: 72000,
    forks: 5800,
    issues: 140,
    watchers: 650,
    contributors: 420,
    commit_frequency: "daily",
    last_commit_date: new Date().toISOString(),
    language: "TypeScript",
    score: 9.0,
    documentation_score: 9.5,
    maintainability_score: 8.9,
    structure_score: 9.0,
    community_health_score: 9.2,
    dependency_health_score: 8.8,
    code_complexity_score: 9.2,
    activity_score: 9.0,
    dependency_count: 24,
    large_files_count: 1,
    max_directory_depth: 4,
    avg_file_size: 7200,
    dependency_files: ["package.json"],
    dependency_risk_level: "Low",
    risk_score: 1.0,
    risk_level: "Low",
    risk_reasons: ["No significant risk indicators detected"],
    score_explanations: {
      documentation: "Clear CLI instructions and interactive component playground.",
      maintainability: "Unstyled primitive base (Radix UI) ensuring modularity.",
      structure: "Clean component catalog and CLI schema.",
      community_health: "Massive developer adoption and community blocks.",
      activity: "Daily commits and new component additions.",
      dependency_health: "Composable Radix and Lucide dependencies.",
      code_complexity: "Straightforward file organization with copy-paste friendliness.",
    },
    file_tree: [
      { name: "apps", type: "dir", path: "apps" },
      { name: "packages", type: "dir", path: "packages" },
      { name: "package.json", type: "file", path: "package.json", size: 1800 },
      { name: "README.md", type: "file", path: "README.md", size: 4800 },
    ],
    summary: "shadcn/ui offers modern component distribution with excellent documentation and clean code structure.",
    recommendations: [
      "Expand automated visual regression tests across themes."
    ],
    has_tests: true,
    has_ci_cd: true,
    has_docs_folder: true,
    has_contributing: true,
    has_license: true,
    readme_length: 4800,
    readme_sections: ["Installation", "Usage", "Contributing", "License"],
    detected_technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js"],
    explanation: {
      purpose: "Re-usable component library based on Radix UI primitives and Tailwind CSS styling.",
      architecture: "Monorepo housing documentation site and CLI utility.",
      key_modules: ["apps/www", "packages/cli", "packages/shadcn"],
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      how_to_run: "npx shadcn@latest init",
      score_explanation: "Scored 9.0/10 based on elegant developer experience and strong component maintainability."
    },
    file_count: 480,
    created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    cached_at: new Date().toISOString(),
  }
];

export function getStoredRepositories(): Repository[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_REPOS);
    if (raw) {
      const userSaved: Repository[] = JSON.parse(raw);
      // Merge user saved with preloaded repositories by ID / repo_name
      const map = new Map<string, Repository>();
      PRELOADED_REPOSITORIES.forEach((r) => map.set(`${r.owner}/${r.repo_name}`, r));
      userSaved.forEach((r) => map.set(`${r.owner}/${r.repo_name}`, r));
      return Array.from(map.values());
    }
  } catch (e) {
    console.error("Failed to read repositories from storage:", e);
  }
  return PRELOADED_REPOSITORIES;
}

export function saveRepositoryToStorage(repo: Repository): void {
  try {
    const repos = getStoredRepositories();
    const existingIndex = repos.findIndex((r) => r.owner === repo.owner && r.repo_name === repo.repo_name);
    if (existingIndex >= 0) {
      repos[existingIndex] = repo;
    } else {
      repos.unshift(repo);
    }
    localStorage.setItem(STORAGE_KEY_REPOS, JSON.stringify(repos));
  } catch (e) {
    console.error("Failed to save repository to storage:", e);
  }
}

export interface StoredHistoryEntry {
  id: string;
  user_id?: string;
  repository_id: string;
  repository_name: string;
  repository_owner: string;
  score: number;
  risk_level: string;
  analyzed_at: string;
}

export function getStoredHistory(userId?: string): StoredHistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    if (raw) {
      const history: StoredHistoryEntry[] = JSON.parse(raw);
      if (userId) {
        return history.filter((h) => !h.user_id || h.user_id === userId);
      }
      return history;
    }
  } catch (e) {
    console.error("Failed to read history from storage:", e);
  }
  // Default history from preloaded repos
  return PRELOADED_REPOSITORIES.map((r) => ({
    id: `history-${r.id}`,
    repository_id: r.id,
    repository_name: r.repo_name,
    repository_owner: r.owner,
    score: r.score,
    risk_level: r.risk_level,
    analyzed_at: r.created_at,
  }));
}

export function saveHistoryToStorage(repo: Repository, userId?: string): StoredHistoryEntry {
  const entry: StoredHistoryEntry = {
    id: `hist-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    user_id: userId,
    repository_id: repo.id,
    repository_name: repo.repo_name,
    repository_owner: repo.owner,
    score: repo.score,
    risk_level: repo.risk_level || "Low",
    analyzed_at: new Date().toISOString(),
  };

  try {
    const history = getStoredHistory();
    history.unshift(entry);
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));
  } catch (e) {
    console.error("Failed to save history entry to storage:", e);
  }
  return entry;
}

export function deleteHistoryFromStorage(id: string): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    if (raw) {
      const history: StoredHistoryEntry[] = JSON.parse(raw);
      const filtered = history.filter((h) => h.id !== id);
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(filtered));
    }
  } catch (e) {
    console.error("Failed to delete history from storage:", e);
  }
}
