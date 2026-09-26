"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { icons } from "@/components/social-icon";
import type { Project } from "@/data/projects";

export function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handle = (e: MouseEvent) => {
      if (e.target === overlayRef.current) {
        onClose();
      }
    };
    overlayRef.current?.addEventListener("mousedown", handle);
    return () => overlayRef.current?.removeEventListener("mousedown", handle);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <div
      ref={overlayRef}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
        "bg-black/60 backdrop-blur-sm transition-opacity duration-200",
        isOpen ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-project-title"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={cn(
          "relative mx-auto w-full max-w-xl outline-none",
          "rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl sm:p-8",
          "dark:border-zinc-800 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100",
          "transition-all duration-200",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
      >
        <button
          onClick={onClose}
          className={cn(
            "absolute right-4 top-4 rounded-lg p-2 text-zinc-400 transition-colors",
            "hover:bg-zinc-100 hover:text-zinc-700",
            "dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
          )}
          aria-label="Close dialog"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {project.badge && (
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300">
              {project.badge}
            </span>
          )}
          <span className="text-xs text-zinc-400">·</span>
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {project.category}
          </span>
        </div>

        <h3 id="modal-project-title" className="mt-3 text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h3>

        <p className="mt-4 text-sm/relaxed text-zinc-600 dark:text-zinc-400 sm:text-base/relaxed">
          {project.longDescription ?? project.description}
        </p>

        {project.tech && project.tech.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Tools, Architecture & Frameworks
            </h4>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-300"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-2.5 border-t border-zinc-100 pt-6 dark:border-zinc-800/80">
          {project.huggingFaceUrl && (
            <a
              href={project.huggingFaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-3.5 py-2 text-xs font-medium text-white transition-colors",
                "hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
              )}
            >
              <span>{icons.huggingface}</span>
              <span>Hugging Face Dataset</span>
            </a>
          )}

          {project.doiUrl && (
            <a
              href={project.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3.5 py-2 text-xs font-medium text-zinc-800 transition-colors",
                "hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-800/60",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
              )}
            >
              <span>{icons.doi}</span>
              <span>Dataset DOI</span>
            </a>
          )}

          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              download={project.downloadUrl.endsWith(".apk") ? true : undefined}
              target={project.downloadUrl.startsWith("http") ? "_blank" : undefined}
              rel={project.downloadUrl.startsWith("http") ? "noopener noreferrer" : undefined}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium shadow-sm transition-colors",
                "bg-zinc-950 text-white hover:bg-zinc-800",
                "dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
              )}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download APK</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3.5 py-2 text-xs font-medium text-zinc-700 transition-colors",
                "hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/60",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
              )}
            >
              <span>{icons.github}</span>
              <span>Source Code</span>
            </a>
          )}

          <button
            onClick={onClose}
            className={cn(
              "ml-auto rounded-lg px-3.5 py-2 text-xs font-medium text-zinc-500 transition-colors",
              "hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
            )}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
