import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none dark:hover:bg-emarald-800 dark:hover:text-emarald-900 disabled:opacity-50 dark:focus:ring-emarald-400 disabled:pointer-events-none dark:focus:ring-offset-emarald-900 data-[state=open]:bg-emarald-100 dark:data-[state=open]:bg-emarald-800",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-900 text-white hover:bg-emerald-700 dark:bg-emerald-50 dark:text-emerald-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-emerald-400 hover:bg-emerald-100/50 dark:hover:bg-emerald-400/10 text-emerald-400",
        subtle:
          "bg-emerald-100 text-emerald-900 hover:bg-emerald-200 dark:bg-emerald-700 dark:text-emerald-100",
        ghost:
          "bg-transparent hover:bg-emerald-100 dark:hover:bg-emerald-800 dark:text-emerald-100 dark:hover:text-emerald-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-emerald-900 dark:text-emerald-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
