import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "group relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-none bg-maroon px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:bg-maroon-dark hover:shadow-[0_6px_20px_rgba(78,11,17,0.3)] active:translate-y-0 active:shadow-[0_2px_8px_rgba(78,11,17,0.2)] sm:w-auto",
  secondary:
    "inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-gray-900 transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:border-maroon hover:bg-[rgba(78,11,17,0.03)] hover:text-maroon hover:shadow-[0_4px_16px_rgba(78,11,17,0.08)] active:translate-y-0 sm:w-auto",
};

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={className ? `${variantClasses[variant]} ${className}` : variantClasses[variant]}
      {...props}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-250 group-hover:opacity-100" />
      )}
      {children}
    </button>
  );
}
