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
  "trans-all flex min-w-max items-center justify-center gap-2 rounded-pill border-2 border-current font-bold px-6 py-3 text-sm md:text-base uppercase active:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-primary-100 disabled:text-neutral-900 disabled:opacity-70",
  {
    variants: {
      variant: {
        primary: "bg-primary-400 text-neutral-900 border-primary-400 hover:bg-primary-500 focus-visible:bg-primary-500 active:bg-primary-500",
        secondary: "bg-secondary-400 border-primary-500 hover:bg-secondary-300 focus-visible:bg-secondary-300 active:bg-secondary-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
