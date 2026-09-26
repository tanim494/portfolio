import { cn } from "@/lib/utils";

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "facebook"
  | "email"
  | "playstore"
  | "external"
  | "huggingface"
  | "doi"
  | "workflow";

export const icons: Record<SocialPlatform, React.ReactNode> = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.3a1.46 1.46 0 1 0 0 2.92 1.46 1.46 0 0 0 0-2.92z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  playstore: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M3.609 1.814L13.793 12 3.61 22.186a2.02 2.02 0 0 1-.22-.387A2.08 2.08 0 0 1 3.25 21V3c0-.398.05-.778.14-1.134.07-.278.14-.326.219-.052zm11.256 11.258l2.25 2.25-10.742 6.138 8.492-8.388zm2.25-2.25l-2.25 2.25L6.373 4.634l10.742 6.188zm.892.892l2.673 1.538a1.515 1.515 0 0 1 0 2.628l-2.673 1.538-2.029-2.029 2.029-2.029z" />
    </svg>
  ),
  external: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  ),
  huggingface: (
    <span className="text-sm select-none" role="img" aria-label="Hugging Face">
      🤗
    </span>
  ),
  doi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  workflow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <rect width="7" height="7" x="3" y="3" rx="1.5" />
      <rect width="7" height="7" x="14" y="14" rx="1.5" />
      <path d="M6.5 10v4a3 3 0 0 0 3 3h4.5" />
    </svg>
  ),
};

export function SocialButton({
  href,
  label,
  platform,
  className,
}: {
  href: string;
  label: string;
  platform: SocialPlatform;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={platform === "email" ? undefined : "_blank"}
      rel={platform === "email" ? undefined : "noopener noreferrer"}
      aria-label={label}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl border",
        "border-zinc-200/80 bg-white text-zinc-600 transition-all duration-200",
        "hover:shadow-md hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900",
        "dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400",
        "dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500",
        className,
      )}
    >
      {icons[platform]}
    </a>
  );
}
