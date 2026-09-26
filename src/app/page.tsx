"use client";

import { useState } from "react";
import Image from "next/image";
import { Navigation } from "@/components/nav";
import { ProjectModal } from "@/components/project-modal";
import { SocialButton, icons } from "@/components/social-icon";
import { androidApps, researchProjects, type Project } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function Home() {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);

  const email = "ahsanulk.tanim@gmail.com";
  const githubUrl = "https://github.com/tanim494";
  const linkedinUrl = "https://linkedin.com/in/tanim494";
  const facebookUrl = "https://facebook.com/tanim494";
  const cvUrl = "/CV_Ahsanul_Karim_Tanim.pdf";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <Navigation />

      <main id="main-content" className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Hero Section */}
        <section id="hero" className="pt-16 pb-14 sm:pt-24 sm:pb-20">
          <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex-1">
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50/80 px-3 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Available for hire</span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
                Ahsanul Karim Tanim
              </h1>

              <p className="mt-2.5 text-lg font-medium text-zinc-700 dark:text-zinc-300 sm:text-xl">
                Android App Developer & AI Automation Developer
              </p>

              <p className="mt-3 text-sm/relaxed text-zinc-600 dark:text-zinc-400 sm:text-base/relaxed">
                Building native Android applications serving 500+ active users, production AI automations in n8n, and multimodal AI datasets. Computer & Communication Engineering at IIUC.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-3.5 w-3.5">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Chattogram, Bangladesh</span>
                <span>·</span>
                <span>UTC +06:00</span>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="relative shrink-0">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-2 border-zinc-200/90 shadow-md transition-all duration-300 hover:scale-[1.02] dark:border-zinc-800 sm:h-32 sm:w-32">
                <Image
                  src="/profile.png"
                  alt="Ahsanul Karim Tanim"
                  width={128}
                  height={128}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <span
                className="absolute -bottom-1 -right-1 flex h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-sm dark:border-zinc-950"
                title="Available for hire"
              />
            </div>
          </div>

          {/* Social Links & Action CTAs: Send Mail, Copy Email, GitHub, LinkedIn, Facebook, Download CV */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href={`mailto:${email}`}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-xs font-medium text-white shadow-sm transition-all sm:text-sm",
                "hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
              )}
            >
              {icons.email}
              <span>Send Mail</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-xs font-medium transition-all sm:text-sm",
                copied
                  ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300"
                  : "border-zinc-200/80 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
              )}
              title="Copy email address"
            >
              {copied ? (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-emerald-500">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={cvUrl}
              download="CV_Ahsanul_Karim_Tanim.pdf"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-xs font-medium text-zinc-700 transition-all sm:text-sm",
                "border-zinc-200/80 bg-white hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950",
                "dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
              )}
              title="Download CV (PDF)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>

            <div className="flex items-center gap-1.5">
              <SocialButton href={githubUrl} label="GitHub Profile" platform="github" />
              <SocialButton href={linkedinUrl} label="LinkedIn Profile" platform="linkedin" />
              <SocialButton href={facebookUrl} label="Facebook Profile" platform="facebook" />
            </div>
          </div>
        </section>

        {/* SECTION 1: Android Apps */}
        <section id="apps" className="border-t border-zinc-200/80 py-14 dark:border-zinc-800/80 sm:py-16">
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
                Android Applications
              </h2>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                Native Android apps with custom architectures, networking tools, and active user bases.
              </p>
            </div>
            <span className="rounded-full border border-zinc-200/80 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              {androidApps.length} Apps
            </span>
          </div>

          <div className="mt-7 space-y-4">
            {androidApps.map((app) => (
              <div
                key={app.title}
                className={cn(
                  "group relative rounded-2xl border p-5 sm:p-6 transition-all duration-200",
                  "border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-md",
                  "dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700/80 dark:hover:bg-zinc-900/70",
                )}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  {/* App Logo */}
                  {app.logo && (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-800/60 sm:h-14 sm:w-14">
                      <Image
                        src={app.logo}
                        alt={`${app.title} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  {/* App Details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 sm:text-lg">
                        {app.title}
                      </h3>
                      {app.badge && (
                        <span className="rounded-full border border-zinc-200/80 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300">
                          {app.badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs/relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm/relaxed">
                      {app.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      {app.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* App Links & Actions */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 pt-1">
                      {app.downloadUrl && (
                        <a
                          href={app.downloadUrl}
                          download={app.downloadUrl.endsWith(".apk") ? true : undefined}
                          target={app.downloadUrl.startsWith("http") ? "_blank" : undefined}
                          rel={app.downloadUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium shadow-sm transition-colors",
                            "bg-zinc-950 text-white hover:bg-zinc-800",
                            "dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
                          )}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          <span>Download APK</span>
                        </a>
                      )}

                      {app.githubUrl && (
                        <a
                          href={app.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors",
                            "hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
                          )}
                        >
                          <span>{icons.github}</span>
                          <span>Project Link</span>
                        </a>
                      )}

                      <button
                        onClick={() => setModalProject(app)}
                        type="button"
                        className={cn(
                          "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition-colors",
                          "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-200",
                        )}
                      >
                        <span>Details</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: AI Automation & Research Projects */}
        <section id="projects" className="border-t border-zinc-200/80 py-14 dark:border-zinc-800/80 sm:py-16">
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
                AI Automation & Projects
              </h2>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                Production n8n agentic workflows, multimodal AI datasets, and open-source benchmarks.
              </p>
            </div>
            <span className="rounded-full border border-zinc-200/80 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              {researchProjects.length} Projects
            </span>
          </div>

          <div className="mt-7 space-y-4">
            {researchProjects.map((project) => (
              <div
                key={project.title}
                className={cn(
                  "group relative rounded-2xl border p-5 sm:p-6 transition-all duration-200",
                  "border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-md",
                  "dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700/80 dark:hover:bg-zinc-900/70",
                )}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  {/* Project Logo if present */}
                  {project.logo && (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-800/60 sm:h-14 sm:w-14">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 sm:text-lg">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="rounded-full border border-zinc-200/80 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs/relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm/relaxed">
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 pt-1">
                      {project.huggingFaceUrl && (
                        <a
                          href={project.huggingFaceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg bg-zinc-950 px-3 py-1.5 text-xs font-medium text-white transition-colors",
                            "hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
                          )}
                        >
                          <span>{icons.huggingface}</span>
                          <span>Hugging Face</span>
                        </a>
                      )}

                      {project.doiUrl && (
                        <a
                          href={project.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors",
                            "hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
                          )}
                        >
                          <span>{icons.doi}</span>
                          <span>DOI Reference</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors",
                            "hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
                          )}
                        >
                          <span>{icons.github}</span>
                          <span>Code Repository</span>
                        </a>
                      )}

                      <button
                        onClick={() => setModalProject(project)}
                        type="button"
                        className={cn(
                          "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition-colors",
                          "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-200",
                        )}
                      >
                        <span>Details</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Technical Skills & Tools */}
        <section id="skills" className="border-t border-zinc-200/80 py-14 dark:border-zinc-800/80 sm:py-16">
          <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
            Technical Stack & Ecosystem
          </h2>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
            Frameworks, platforms, and languages applied across production apps and AI research.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-zinc-200/90 bg-white p-5 dark:border-zinc-800/90 dark:bg-zinc-900/40"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {group.category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-zinc-200/70 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800/80 dark:bg-zinc-800/50 dark:text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Contact Section */}
        <section id="contact" className="border-t border-zinc-200/80 py-14 dark:border-zinc-800/80 sm:py-16">
          <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-6 sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/50">
            <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
              Let’s Connect
            </h2>
            <p className="mt-2 max-w-lg text-xs/relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm/relaxed">
              I’m open to discussing Android engineering, AI automation workflows (n8n), Vision-Language Models, or new career opportunities.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={`mailto:${email}`}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-xs font-medium text-white shadow-sm transition-all sm:text-sm",
                  "hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
                )}
              >
                {icons.email}
                <span>Send Mail</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-xs font-medium transition-all sm:text-sm",
                  copied
                    ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300"
                    : "border-zinc-200/80 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
                )}
              >
                {copied ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-emerald-500">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={cvUrl}
                download="CV_Ahsanul_Karim_Tanim.pdf"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-xs font-medium text-zinc-700 transition-all sm:text-sm",
                  "border-zinc-200/80 bg-white hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950",
                  "dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
                )}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/70 py-10 dark:border-zinc-800/70">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-zinc-500 dark:text-zinc-500 sm:flex-row sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} Ahsanul Karim Tanim. Built with Next.js & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
            >
              Facebook
            </a>
            <span>·</span>
            <a
              href="#hero"
              className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-zinc-400 dark:text-zinc-500">
          <p>Hire me for Android development or AI automation projects.</p>
        </div>
      </footer>

      {/* Project Details Modal */}
      <ProjectModal
        project={modalProject}
        isOpen={!!modalProject}
        onClose={() => setModalProject(null)}
      />
    </div>
  );
}
