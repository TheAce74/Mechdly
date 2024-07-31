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
  "trans-all flex min-w-max items-center justify-center gap-2 rounded-sm border border-current px-6 py-3 text-sm uppercase text-neutral-900 hover:scale-95 focus-visible:scale-95 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "",
        inverted: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
