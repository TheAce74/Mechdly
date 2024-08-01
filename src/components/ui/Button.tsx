import { ButtonVariants } from "@/lib/types";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
};

export default function Button({
  children,
  variant,
  type,
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      type={type ?? "button"}
      {...otherProps}
      className={cn(buttonVariants({ variant }), className)}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva(
  "trans-all flex min-w-24 items-center justify-center gap-2 rounded-pill border-2 border-current px-6 py-2 text-sm font-bold active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-primary-100 disabled:text-neutral-900 disabled:opacity-70 md:text-base",
  {
    variants: {
      variant: {
        primary:
          "border-primary-400 bg-primary-400 text-neutral-900 hover:bg-primary-500 focus-visible:bg-primary-500 active:bg-primary-500",
        secondary:
          "border-primary-500 bg-secondary-400 hover:bg-secondary-300 focus-visible:bg-secondary-300 active:bg-secondary-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
