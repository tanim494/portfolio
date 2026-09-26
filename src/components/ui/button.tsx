import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "xl" | "icon"
}

const buttonVariants = ({
  variant = "default",
  size = "default",
}: {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "xl" | "icon"
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variantClasses = {
    default:
      "bg-slate-900 text-slate-50 hover:bg-slate-900/90 shadow-sm hover:shadow-md dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-100/90",
    destructive:
      "bg-red-500 text-slate-50 hover:bg-red-500/90 shadow-sm hover:shadow-md dark:bg-red-500 dark:text-slate-900 dark:hover:bg-red-500/90",
    outline:
      "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-100",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80",
    ghost:
      "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100",
    link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-100",
  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-xl px-3 text-xs",
    lg: "h-12 rounded-xl px-6 text-sm font-medium",
    xl: "h-14 rounded-xl px-8 text-base font-medium",
    icon: "h-10 w-10",
  }

  return cn(baseClasses, variantClasses[variant], sizeClasses[size])
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-slate-900 text-slate-50 hover:bg-slate-900/90 shadow-sm hover:shadow-md dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-100/90",
          variant === "destructive" && "bg-red-500 text-slate-50 hover:bg-red-500/90 shadow-sm hover:shadow-md dark:bg-red-500 dark:text-slate-900 dark:hover:bg-red-500/90",
          variant === "outline" && "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-100",
          variant === "secondary" && "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80",
          variant === "ghost" && "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100",
          variant === "link" && "text-slate-900 underline-offset-4 hover:underline dark:text-slate-100",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 rounded-xl px-3 text-xs",
          size === "lg" && "h-12 rounded-xl px-6 text-sm font-medium",
          size === "xl" && "h-14 rounded-xl px-8 text-base font-medium",
          size === "icon" && "h-10 w-10",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }