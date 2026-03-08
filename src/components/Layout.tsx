import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GitBranch,
  BarChart3,
  Trophy,
  GitCompareArrows,
  History,
  Search,
  Menu,
  X,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navItems = [
  { path: "/", label: "Home", icon: GitBranch },
  { path: "/analyze", label: "Analyze", icon: Search },
  { path: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { path: "/compare", label: "Compare", icon: GitCompareArrows },
  { path: "/history", label: "History", icon: History },
  { path: "/architecture", label: "Architecture", icon: Workflow },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">

      {/* Background blur */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <GitBranch className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">
                RepoInsight
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-secondary rounded-lg"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.4,
                        }}
                      />
                    )}

                    <span className="relative flex items-center gap-1.5">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-4 py-3 space-y-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Page content */}
      <main>{children}</main>

    </div>
  );
}