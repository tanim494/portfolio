"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "About" },
  { href: "#apps", label: "Apps" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const { href } of navLinks) {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        "border-b border-zinc-200/70 bg-white/85 backdrop-blur-md",
        "dark:border-zinc-800/80 dark:bg-zinc-950/85",
        "transition-colors duration-200",
      )}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3.5">
        {/* Brand / Name */}
        <Link
          href="#hero"
          className="group flex items-center gap-2.5 text-sm font-bold tracking-tight text-zinc-950 dark:text-zinc-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Tanim</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex items-center gap-1 sm:gap-1.5" aria-label="Main Navigation">
          {navLinks.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={cn(
                  "rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-150 sm:text-sm",
                  isActive
                    ? "bg-zinc-100 font-semibold text-zinc-950 dark:bg-zinc-800/80 dark:text-zinc-50"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-100",
                )}
              >
                {label}
              </a>
            );
          })}
          <div className="ml-1 pl-1 border-l border-zinc-200 dark:border-zinc-800 sm:ml-2 sm:pl-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Actions: Theme Toggle + Hamburger Menu */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg border",
              "border-zinc-200/80 bg-zinc-50 text-zinc-700 transition-colors",
              "hover:border-zinc-300 hover:bg-zinc-100",
              "dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
            )}
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-zinc-200/80 bg-white px-6 py-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 transition-all">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-zinc-100 font-semibold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/80 dark:hover:text-zinc-100",
                  )}
                >
                  <span>{label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
